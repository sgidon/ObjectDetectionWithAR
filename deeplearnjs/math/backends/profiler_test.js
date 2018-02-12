"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ndarray_1 = require("../ndarray");
var profiler_1 = require("./profiler");
var TestBackendTimer = (function () {
    function TestBackendTimer(delayMs, queryTimeMs) {
        this.delayMs = delayMs;
        this.queryTimeMs = queryTimeMs;
        this.counter = 1;
    }
    TestBackendTimer.prototype.time = function (query) {
        var _this = this;
        query();
        return new Promise(function (resolve) { return setTimeout(resolve(_this.queryTimeMs * _this.counter++), _this.delayMs); });
    };
    return TestBackendTimer;
}());
var TestLogger = (function (_super) {
    __extends(TestLogger, _super);
    function TestLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestLogger.prototype.logKernelProfile = function (kernelName, result, vals, timeMs) { };
    return TestLogger;
}(profiler_1.Logger));
describe('profiler.Profiler', function () {
    it('profiles simple function', function (doneFn) {
        var delayMs = 5;
        var queryTimeMs = 10;
        var timer = new TestBackendTimer(delayMs, queryTimeMs);
        var logger = new TestLogger();
        var profiler = new profiler_1.Profiler(timer, logger);
        spyOn(timer, 'time').and.callThrough();
        spyOn(logger, 'logKernelProfile').and.callThrough();
        var timeSpy = timer.time;
        var logKernelProfileSpy = logger.logKernelProfile;
        var kernelCalled = false;
        var result = 1;
        var resultScalar = ndarray_1.Scalar.new(result);
        profiler.profileKernel('MatMul', function () {
            kernelCalled = true;
            return resultScalar;
        });
        setTimeout(function () {
            expect(timeSpy.calls.count()).toBe(1);
            expect(logKernelProfileSpy.calls.count()).toBe(1);
            expect(logKernelProfileSpy.calls.first().args).toEqual([
                'MatMul', resultScalar, new Float32Array([result]), queryTimeMs
            ]);
            expect(kernelCalled).toBe(true);
            doneFn();
        }, delayMs * 2);
    });
    it('profiles nested kernel', function (doneFn) {
        var delayMs = 5;
        var queryTimeMs = 10;
        var timer = new TestBackendTimer(delayMs, queryTimeMs);
        var logger = new TestLogger();
        var profiler = new profiler_1.Profiler(timer, logger);
        spyOn(timer, 'time').and.callThrough();
        spyOn(logger, 'logKernelProfile').and.callThrough();
        var timeSpy = timer.time;
        var logKernelProfileSpy = logger.logKernelProfile;
        var matmulKernelCalled = false;
        var maxKernelCalled = false;
        var result = 1;
        var resultScalar = ndarray_1.Scalar.new(result);
        profiler.profileKernel('MatMul', function () {
            var result = profiler.profileKernel('Max', function () {
                maxKernelCalled = true;
                return resultScalar;
            });
            matmulKernelCalled = true;
            return result;
        });
        setTimeout(function () {
            expect(timeSpy.calls.count()).toBe(2);
            expect(logKernelProfileSpy.calls.count()).toBe(2);
            expect(logKernelProfileSpy.calls.first().args).toEqual([
                'Max', resultScalar, new Float32Array([result]), queryTimeMs
            ]);
            expect(logKernelProfileSpy.calls.argsFor(1)).toEqual([
                'MatMul', resultScalar, new Float32Array([result]), queryTimeMs * 2
            ]);
            expect(matmulKernelCalled).toBe(true);
            expect(maxKernelCalled).toBe(true);
            doneFn();
        }, delayMs * 2);
    });
});
//# sourceMappingURL=profiler_test.js.map