"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_util = require("../test_util");
var util = require("../util");
var ndarray_1 = require("./ndarray");
{
    var tests = function (it) {
        it('debug mode does not error when no nans', function (math) {
            var a = ndarray_1.Array1D.new([2, -1, 0, 3]);
            var res = math.relu(a);
            test_util.expectArraysClose(res, [2, 0, 0, 3]);
        });
        it('debug mode errors when there are nans, float32', function (math) {
            var a = ndarray_1.Array1D.new([2, NaN]);
            var f = function () { return math.relu(a); };
            expect(f).toThrowError();
        });
        it('debug mode errors when there are nans, int32', function (math) {
            var a = ndarray_1.Array1D.new([2, util.NAN_INT32], 'int32');
            var f = function () { return math.relu(a); };
            expect(f).toThrowError();
        });
        it('debug mode errors when there are nans, bool', function (math) {
            var a = ndarray_1.Array1D.new([1, util.NAN_BOOL], 'bool');
            var f = function () { return math.relu(a); };
            expect(f).toThrowError();
        });
        it('A x B', function (math) {
            var a = ndarray_1.Array2D.new([2, 3], [1, 2, 3, 4, 5, 6]);
            var b = ndarray_1.Array2D.new([3, 2], [0, 1, -3, 2, 2, 1]);
            var c = math.matMul(a, b);
            expect(c.shape).toEqual([2, 2]);
            test_util.expectArraysClose(c, [0, 8, -3, 20]);
        });
    };
    test_util.describeMathCPU('debug mode on', [tests], [{ 'DEBUG': true }]);
    test_util.describeMathGPU('debug mode on ', [tests], [
        { 'DEBUG': true, 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'DEBUG': true, 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'DEBUG': true, 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var gpuTests = function (it) {
        it('no errors where there are nans, and debug mode is disabled', function (math) {
            var a = ndarray_1.Array1D.new([2, NaN]);
            var res = math.relu(a);
            test_util.expectArraysClose(res, [2, NaN]);
        });
    };
    test_util.describeMathCPU('debug mode off', [gpuTests], [{ 'DEBUG': false }]);
    test_util.describeMathGPU('debug mode off', [gpuTests], [
        { 'DEBUG': false, 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'DEBUG': false, 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 }, {
            'DEBUG': false,
            'WEBGL_FLOAT_TEXTURE_ENABLED': false,
            'WEBGL_VERSION': 1
        }
    ]);
}
//# sourceMappingURL=debug_mode_test.js.map