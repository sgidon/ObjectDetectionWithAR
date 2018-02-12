"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dl = require("../index");
var test_util = require("../test_util");
var util = require("../util");
var ndarray_1 = require("./ndarray");
{
    var tests = function (it) {
        it('1D default dtype', function () {
            var a = dl.zeros([3]);
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3]);
            test_util.expectArraysClose(a, [0, 0, 0]);
        });
        it('1D float32 dtype', function () {
            var a = dl.zeros([3], 'float32');
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3]);
            test_util.expectArraysClose(a, [0, 0, 0]);
        });
        it('1D int32 dtype', function () {
            var a = dl.zeros([3], 'int32');
            expect(a.dtype).toBe('int32');
            expect(a.shape).toEqual([3]);
            test_util.expectArraysEqual(a, [0, 0, 0]);
        });
        it('1D bool dtype', function () {
            var a = dl.zeros([3], 'bool');
            expect(a.dtype).toBe('bool');
            expect(a.shape).toEqual([3]);
            test_util.expectArraysEqual(a, [0, 0, 0]);
        });
        it('2D default dtype', function () {
            var a = dl.zeros([3, 2]);
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3, 2]);
            test_util.expectArraysClose(a, [0, 0, 0, 0, 0, 0]);
        });
        it('2D float32 dtype', function () {
            var a = dl.zeros([3, 2], 'float32');
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3, 2]);
            test_util.expectArraysClose(a, [0, 0, 0, 0, 0, 0]);
        });
        it('2D int32 dtype', function () {
            var a = dl.zeros([3, 2], 'int32');
            expect(a.dtype).toBe('int32');
            expect(a.shape).toEqual([3, 2]);
            test_util.expectArraysEqual(a, [0, 0, 0, 0, 0, 0]);
        });
        it('2D bool dtype', function () {
            var a = dl.zeros([3, 2], 'bool');
            expect(a.dtype).toBe('bool');
            expect(a.shape).toEqual([3, 2]);
            test_util.expectArraysEqual(a, [0, 0, 0, 0, 0, 0]);
        });
        it('3D default dtype', function () {
            var a = dl.zeros([2, 2, 2]);
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([2, 2, 2]);
            test_util.expectArraysClose(a, [0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it('3D float32 dtype', function () {
            var a = dl.zeros([2, 2, 2], 'float32');
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([2, 2, 2]);
            test_util.expectArraysClose(a, [0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it('3D int32 dtype', function () {
            var a = dl.zeros([2, 2, 2], 'int32');
            expect(a.dtype).toBe('int32');
            expect(a.shape).toEqual([2, 2, 2]);
            test_util.expectArraysEqual(a, [0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it('3D bool dtype', function () {
            var a = dl.zeros([2, 2, 2], 'bool');
            expect(a.dtype).toBe('bool');
            expect(a.shape).toEqual([2, 2, 2]);
            test_util.expectArraysEqual(a, [0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it('4D default dtype', function () {
            var a = dl.zeros([3, 2, 1, 1]);
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3, 2, 1, 1]);
            test_util.expectArraysClose(a, [0, 0, 0, 0, 0, 0]);
        });
        it('4D float32 dtype', function () {
            var a = dl.zeros([3, 2, 1, 1], 'float32');
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3, 2, 1, 1]);
            test_util.expectArraysClose(a, [0, 0, 0, 0, 0, 0]);
        });
        it('4D int32 dtype', function () {
            var a = dl.zeros([3, 2, 1, 1], 'int32');
            expect(a.dtype).toBe('int32');
            expect(a.shape).toEqual([3, 2, 1, 1]);
            test_util.expectArraysEqual(a, [0, 0, 0, 0, 0, 0]);
        });
        it('4D bool dtype', function () {
            var a = dl.zeros([3, 2, 1, 1], 'bool');
            expect(a.dtype).toBe('bool');
            expect(a.shape).toEqual([3, 2, 1, 1]);
            test_util.expectArraysEqual(a, [0, 0, 0, 0, 0, 0]);
        });
    };
    test_util.describeMathCPU('zeros', [tests]);
    test_util.describeMathGPU('zeros', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('1D default dtype', function () {
            var a = dl.ones([3]);
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3]);
            test_util.expectArraysClose(a, [1, 1, 1]);
        });
        it('1D float32 dtype', function () {
            var a = dl.ones([3], 'float32');
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3]);
            test_util.expectArraysClose(a, [1, 1, 1]);
        });
        it('1D int32 dtype', function () {
            var a = dl.ones([3], 'int32');
            expect(a.dtype).toBe('int32');
            expect(a.shape).toEqual([3]);
            test_util.expectArraysEqual(a, [1, 1, 1]);
        });
        it('1D bool dtype', function () {
            var a = dl.ones([3], 'bool');
            expect(a.dtype).toBe('bool');
            expect(a.shape).toEqual([3]);
            test_util.expectArraysEqual(a, [1, 1, 1]);
        });
        it('2D default dtype', function () {
            var a = dl.ones([3, 2]);
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3, 2]);
            test_util.expectArraysClose(a, [1, 1, 1, 1, 1, 1]);
        });
        it('2D float32 dtype', function () {
            var a = dl.ones([3, 2], 'float32');
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3, 2]);
            test_util.expectArraysClose(a, [1, 1, 1, 1, 1, 1]);
        });
        it('2D int32 dtype', function () {
            var a = dl.ones([3, 2], 'int32');
            expect(a.dtype).toBe('int32');
            expect(a.shape).toEqual([3, 2]);
            test_util.expectArraysEqual(a, [1, 1, 1, 1, 1, 1]);
        });
        it('2D bool dtype', function () {
            var a = dl.ones([3, 2], 'bool');
            expect(a.dtype).toBe('bool');
            expect(a.shape).toEqual([3, 2]);
            test_util.expectArraysEqual(a, [1, 1, 1, 1, 1, 1]);
        });
        it('3D default dtype', function () {
            var a = dl.ones([2, 2, 2]);
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([2, 2, 2]);
            test_util.expectArraysClose(a, [1, 1, 1, 1, 1, 1, 1, 1]);
        });
        it('3D float32 dtype', function () {
            var a = dl.ones([2, 2, 2], 'float32');
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([2, 2, 2]);
            test_util.expectArraysClose(a, [1, 1, 1, 1, 1, 1, 1, 1]);
        });
        it('3D int32 dtype', function () {
            var a = dl.ones([2, 2, 2], 'int32');
            expect(a.dtype).toBe('int32');
            expect(a.shape).toEqual([2, 2, 2]);
            test_util.expectArraysEqual(a, [1, 1, 1, 1, 1, 1, 1, 1]);
        });
        it('3D bool dtype', function () {
            var a = dl.ones([2, 2, 2], 'bool');
            expect(a.dtype).toBe('bool');
            expect(a.shape).toEqual([2, 2, 2]);
            test_util.expectArraysEqual(a, [1, 1, 1, 1, 1, 1, 1, 1]);
        });
        it('4D default dtype', function () {
            var a = dl.ones([3, 2, 1, 1]);
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3, 2, 1, 1]);
            test_util.expectArraysClose(a, [1, 1, 1, 1, 1, 1]);
        });
        it('4D float32 dtype', function () {
            var a = dl.ones([3, 2, 1, 1], 'float32');
            expect(a.dtype).toBe('float32');
            expect(a.shape).toEqual([3, 2, 1, 1]);
            test_util.expectArraysClose(a, [1, 1, 1, 1, 1, 1]);
        });
        it('4D int32 dtype', function () {
            var a = dl.ones([3, 2, 1, 1], 'int32');
            expect(a.dtype).toBe('int32');
            expect(a.shape).toEqual([3, 2, 1, 1]);
            test_util.expectArraysEqual(a, [1, 1, 1, 1, 1, 1]);
        });
        it('4D bool dtype', function () {
            var a = dl.ones([3, 2, 1, 1], 'bool');
            expect(a.dtype).toBe('bool');
            expect(a.shape).toEqual([3, 2, 1, 1]);
            test_util.expectArraysEqual(a, [1, 1, 1, 1, 1, 1]);
        });
    };
    test_util.describeMathCPU('ones', [tests]);
    test_util.describeMathGPU('ones', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('1D default dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3]);
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysClose(b, [0, 0, 0]);
        });
        it('1D float32 dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'float32');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysClose(b, [0, 0, 0]);
        });
        it('1D int32 dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'int32');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysEqual(b, [0, 0, 0]);
        });
        it('1D bool dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'bool');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysEqual(b, [0, 0, 0]);
        });
        it('2D default dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4]);
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysClose(b, [0, 0, 0, 0]);
        });
        it('2D float32 dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'float32');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysClose(b, [0, 0, 0, 0]);
        });
        it('2D int32 dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'int32');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysEqual(b, [0, 0, 0, 0]);
        });
        it('2D bool dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'bool');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysEqual(b, [0, 0, 0, 0]);
        });
        it('3D default dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4]);
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysClose(b, [0, 0, 0, 0]);
        });
        it('3D float32 dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'float32');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysClose(b, [0, 0, 0, 0]);
        });
        it('3D int32 dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'int32');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysEqual(b, [0, 0, 0, 0]);
        });
        it('3D bool dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'bool');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysEqual(b, [0, 0, 0, 0]);
        });
        it('4D default dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4]);
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysClose(b, [0, 0, 0, 0]);
        });
        it('4D float32 dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'float32');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysClose(b, [0, 0, 0, 0]);
        });
        it('4D int32 dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'int32');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysEqual(b, [0, 0, 0, 0]);
        });
        it('4D bool dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'bool');
            var b = dl.zerosLike(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysEqual(b, [0, 0, 0, 0]);
        });
    };
    test_util.describeMathCPU('zerosLike', [tests]);
    test_util.describeMathGPU('zerosLike', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('1D default dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3]);
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysClose(b, [1, 1, 1]);
        });
        it('1D float32 dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'float32');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysClose(b, [1, 1, 1]);
        });
        it('1D int32 dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'int32');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysEqual(b, [1, 1, 1]);
        });
        it('1D bool dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'bool');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysEqual(b, [1, 1, 1]);
        });
        it('2D default dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4]);
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysClose(b, [1, 1, 1, 1]);
        });
        it('2D float32 dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'float32');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysClose(b, [1, 1, 1, 1]);
        });
        it('2D int32 dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'int32');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
        it('2D bool dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'bool');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
        it('3D default dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4]);
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysClose(b, [1, 1, 1, 1]);
        });
        it('3D float32 dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'float32');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysClose(b, [1, 1, 1, 1]);
        });
        it('3D int32 dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'int32');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
        it('3D bool dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'bool');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
        it('4D default dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4]);
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysClose(b, [1, 1, 1, 1]);
        });
        it('4D float32 dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'float32');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysClose(b, [1, 1, 1, 1]);
        });
        it('4D int32 dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'int32');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
        it('4D bool dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'bool');
            var b = dl.onesLike(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
    };
    test_util.describeMathCPU('onesLike', [tests]);
    test_util.describeMathGPU('onesLike', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('should return a random 1D float32 array', function () {
            var shape = [10];
            var result = dl.rand(shape, function () { return util.randUniform(0, 2); });
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 2);
            result = dl.rand(shape, function () { return util.randUniform(0, 1.5); });
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 1.5);
        });
        it('should return a random 1D int32 array', function () {
            var shape = [10];
            var result = dl.rand(shape, function () { return util.randUniform(0, 2); }, 'int32');
            expect(result.dtype).toBe('int32');
            test_util.expectValuesInRange(result, 0, 2);
        });
        it('should return a random 1D bool array', function () {
            var shape = [10];
            var result = dl.rand(shape, function () { return util.randUniform(0, 1); }, 'bool');
            expect(result.dtype).toBe('bool');
            test_util.expectValuesInRange(result, 0, 1);
        });
        it('should return a random 2D float32 array', function () {
            var shape = [3, 4];
            var result = dl.rand(shape, function () { return util.randUniform(0, 2.5); });
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 2.5);
            result = dl.rand(shape, function () { return util.randUniform(0, 1.5); }, 'float32');
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 1.5);
        });
        it('should return a random 2D int32 array', function () {
            var shape = [3, 4];
            var result = dl.rand(shape, function () { return util.randUniform(0, 2); }, 'int32');
            expect(result.dtype).toBe('int32');
            test_util.expectValuesInRange(result, 0, 2);
        });
        it('should return a random 2D bool array', function () {
            var shape = [3, 4];
            var result = dl.rand(shape, function () { return util.randUniform(0, 1); }, 'bool');
            expect(result.dtype).toBe('bool');
            test_util.expectValuesInRange(result, 0, 1);
        });
        it('should return a random 3D float32 array', function () {
            var shape = [3, 4, 5];
            var result = dl.rand(shape, function () { return util.randUniform(0, 2.5); });
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 2.5);
            result = dl.rand(shape, function () { return util.randUniform(0, 1.5); }, 'float32');
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 1.5);
        });
        it('should return a random 3D int32 array', function () {
            var shape = [3, 4, 5];
            var result = dl.rand(shape, function () { return util.randUniform(0, 2); }, 'int32');
            expect(result.dtype).toBe('int32');
            test_util.expectValuesInRange(result, 0, 2);
        });
        it('should return a random 3D bool array', function () {
            var shape = [3, 4, 5];
            var result = dl.rand(shape, function () { return util.randUniform(0, 1); }, 'bool');
            expect(result.dtype).toBe('bool');
            test_util.expectValuesInRange(result, 0, 1);
        });
        it('should return a random 4D float32 array', function () {
            var shape = [3, 4, 5, 6];
            var result = dl.rand(shape, function () { return util.randUniform(0, 2.5); });
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 2.5);
            result = dl.rand(shape, function () { return util.randUniform(0, 1.5); });
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 1.5);
        });
        it('should return a random 4D int32 array', function () {
            var shape = [3, 4, 5, 6];
            var result = dl.rand(shape, function () { return util.randUniform(0, 2); }, 'int32');
            expect(result.dtype).toBe('int32');
            test_util.expectValuesInRange(result, 0, 2);
        });
        it('should return a random 4D bool array', function () {
            var shape = [3, 4, 5, 6];
            var result = dl.rand(shape, function () { return util.randUniform(0, 1); }, 'bool');
            expect(result.dtype).toBe('bool');
            test_util.expectValuesInRange(result, 0, 1);
        });
    };
    test_util.describeMathCPU('rand', [tests]);
    test_util.describeMathGPU('rand', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        var SEED = 2002;
        var EPSILON = 0.05;
        it('should return a float32 1D of random normal values', function () {
            var SAMPLES = 10000;
            var result = dl.randNormal([SAMPLES], 0, 0.5, null, SEED);
            expect(result.dtype).toBe('float32');
            expect(result.shape).toEqual([SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 0.5, EPSILON);
            result = dl.randNormal([SAMPLES], 0, 1.5, 'float32', SEED);
            expect(result.dtype).toBe('float32');
            expect(result.shape).toEqual([SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 1.5, EPSILON);
        });
        it('should return a int32 1D of random normal values', function () {
            var SAMPLES = 10000;
            var result = dl.randNormal([SAMPLES], 0, 2, 'int32', SEED);
            expect(result.dtype).toBe('int32');
            expect(result.shape).toEqual([SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 2, EPSILON);
        });
        it('should return a float32 2D of random normal values', function () {
            var SAMPLES = 250;
            var result = dl.randNormal([SAMPLES, SAMPLES], 0, 2.5, null, SEED);
            expect(result.dtype).toBe('float32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 2.5, EPSILON);
            result = dl.randNormal([SAMPLES, SAMPLES], 0, 3.5, 'float32', SEED);
            expect(result.dtype).toBe('float32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 3.5, EPSILON);
        });
        it('should return a int32 2D of random normal values', function () {
            var SAMPLES = 100;
            var result = dl.randNormal([SAMPLES, SAMPLES], 0, 2, 'int32', SEED);
            expect(result.dtype).toBe('int32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 2, EPSILON);
        });
        it('should return a float32 3D of random normal values', function () {
            var SAMPLES = 50;
            var result = dl.randNormal([SAMPLES, SAMPLES, SAMPLES], 0, 0.5, null, SEED);
            expect(result.dtype).toBe('float32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 0.5, EPSILON);
            result =
                dl.randNormal([SAMPLES, SAMPLES, SAMPLES], 0, 1.5, 'float32', SEED);
            expect(result.dtype).toBe('float32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 1.5, EPSILON);
        });
        it('should return a int32 3D of random normal values', function () {
            var SAMPLES = 50;
            var result = dl.randNormal([SAMPLES, SAMPLES, SAMPLES], 0, 2, 'int32', SEED);
            expect(result.dtype).toBe('int32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 2, EPSILON);
        });
        it('should return a float32 4D of random normal values', function () {
            var SAMPLES = 25;
            var result = dl.randNormal([SAMPLES, SAMPLES, SAMPLES, SAMPLES], 0, 0.5, null, SEED);
            expect(result.dtype).toBe('float32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES, SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 0.5, EPSILON);
            result = dl.randNormal([SAMPLES, SAMPLES, SAMPLES, SAMPLES], 0, 1.5, 'float32', SEED);
            expect(result.dtype).toBe('float32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES, SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 1.5, EPSILON);
        });
        it('should return a int32 4D of random normal values', function () {
            var SAMPLES = 25;
            var result = dl.randNormal([SAMPLES, SAMPLES, SAMPLES, SAMPLES], 0, 2, 'int32', SEED);
            expect(result.dtype).toBe('int32');
            expect(result.shape).toEqual([SAMPLES, SAMPLES, SAMPLES, SAMPLES]);
            test_util.jarqueBeraNormalityTest(result);
            test_util.expectArrayInMeanStdRange(result, 0, 2, EPSILON);
        });
    };
    test_util.describeMathCPU('randNormal', [tests]);
    test_util.describeMathGPU('randNormal', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        var EPSILON = 0.60;
        var SEED = 2002;
        function assertTruncatedValues(array, mean, stdv) {
            var bounds = mean + stdv * 2;
            var values = array.dataSync();
            for (var i = 0; i < values.length; i++) {
                expect(Math.abs(values[i])).toBeLessThanOrEqual(bounds);
            }
        }
        it('should return a random 1D float32 array', function () {
            var shape = [1000];
            var result = dl.truncatedNormal(shape, 0, 3.5, null, SEED);
            expect(result.dtype).toBe('float32');
            assertTruncatedValues(result, 0, 3.5);
            test_util.expectArrayInMeanStdRange(result, 0, 3.5, EPSILON);
            result = dl.truncatedNormal(shape, 0, 4.5, 'float32', SEED);
            expect(result.dtype).toBe('float32');
            assertTruncatedValues(result, 0, 4.5);
            test_util.expectArrayInMeanStdRange(result, 0, 4.5, EPSILON);
        });
        it('should return a randon 1D int32 array', function () {
            var shape = [1000];
            var result = dl.truncatedNormal(shape, 0, 5, 'int32', SEED);
            expect(result.dtype).toBe('int32');
            assertTruncatedValues(result, 0, 5);
            test_util.expectArrayInMeanStdRange(result, 0, 5, EPSILON);
        });
        it('should return a 2D float32 array', function () {
            var shape = [50, 50];
            var result = dl.truncatedNormal(shape, 0, 3.5, null, SEED);
            expect(result.dtype).toBe('float32');
            assertTruncatedValues(result, 0, 3.5);
            test_util.expectArrayInMeanStdRange(result, 0, 3.5, EPSILON);
            result = dl.truncatedNormal(shape, 0, 4.5, 'float32', SEED);
            expect(result.dtype).toBe('float32');
            assertTruncatedValues(result, 0, 4.5);
            test_util.expectArrayInMeanStdRange(result, 0, 4.5, EPSILON);
        });
        it('should return a 2D int32 array', function () {
            var shape = [50, 50];
            var result = dl.truncatedNormal(shape, 0, 5, 'int32', SEED);
            expect(result.dtype).toBe('int32');
            assertTruncatedValues(result, 0, 5);
            test_util.expectArrayInMeanStdRange(result, 0, 5, EPSILON);
        });
        it('should return a 3D float32 array', function () {
            var shape = [10, 10, 10];
            var result = dl.truncatedNormal(shape, 0, 3.5, null, SEED);
            expect(result.dtype).toBe('float32');
            assertTruncatedValues(result, 0, 3.5);
            test_util.expectArrayInMeanStdRange(result, 0, 3.5, EPSILON);
            result = dl.truncatedNormal(shape, 0, 4.5, 'float32', SEED);
            expect(result.dtype).toBe('float32');
            assertTruncatedValues(result, 0, 4.5);
            test_util.expectArrayInMeanStdRange(result, 0, 4.5, EPSILON);
        });
        it('should return a 3D int32 array', function () {
            var shape = [10, 10, 10];
            var result = dl.truncatedNormal(shape, 0, 5, 'int32', SEED);
            expect(result.dtype).toBe('int32');
            assertTruncatedValues(result, 0, 5);
            test_util.expectArrayInMeanStdRange(result, 0, 5, EPSILON);
        });
        it('should return a 4D float32 array', function () {
            var shape = [5, 5, 5, 5];
            var result = dl.truncatedNormal(shape, 0, 3.5, null, SEED);
            expect(result.dtype).toBe('float32');
            assertTruncatedValues(result, 0, 3.5);
            test_util.expectArrayInMeanStdRange(result, 0, 3.5, EPSILON);
            result = dl.truncatedNormal(shape, 0, 4.5, 'float32', SEED);
            expect(result.dtype).toBe('float32');
            assertTruncatedValues(result, 0, 4.5);
            test_util.expectArrayInMeanStdRange(result, 0, 4.5, EPSILON);
        });
        it('should return a 4D int32 array', function () {
            var shape = [5, 5, 5, 5];
            var result = dl.truncatedNormal(shape, 0, 5, 'int32', SEED);
            expect(result.dtype).toBe('int32');
            assertTruncatedValues(result, 0, 5);
            test_util.expectArrayInMeanStdRange(result, 0, 5, EPSILON);
        });
    };
    test_util.describeMathCPU('truncatedNormal', [tests]);
    test_util.describeMathGPU('truncatedNormal', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('should return a random 1D float32 array', function () {
            var shape = [10];
            var result = dl.randUniform(shape, 0, 2.5);
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 2.5);
            result = dl.randUniform(shape, 0, 1.5, 'float32');
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 1.5);
        });
        it('should return a random 1D int32 array', function () {
            var shape = [10];
            var result = dl.randUniform(shape, 0, 2, 'int32');
            expect(result.dtype).toBe('int32');
            test_util.expectValuesInRange(result, 0, 2);
        });
        it('should return a random 1D bool array', function () {
            var shape = [10];
            var result = dl.randUniform(shape, 0, 1, 'bool');
            expect(result.dtype).toBe('bool');
            test_util.expectValuesInRange(result, 0, 1);
        });
        it('should return a random 2D float32 array', function () {
            var shape = [3, 4];
            var result = dl.randUniform(shape, 0, 2.5);
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 2.5);
            result = dl.randUniform(shape, 0, 1.5, 'float32');
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 1.5);
        });
        it('should return a random 2D int32 array', function () {
            var shape = [3, 4];
            var result = dl.randUniform(shape, 0, 2, 'int32');
            expect(result.dtype).toBe('int32');
            test_util.expectValuesInRange(result, 0, 2);
        });
        it('should return a random 2D bool array', function () {
            var shape = [3, 4];
            var result = dl.randUniform(shape, 0, 1, 'bool');
            expect(result.dtype).toBe('bool');
            test_util.expectValuesInRange(result, 0, 1);
        });
        it('should return a random 3D float32 array', function () {
            var shape = [3, 4, 5];
            var result = dl.randUniform(shape, 0, 2.5);
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 2.5);
            result = dl.randUniform(shape, 0, 1.5, 'float32');
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 1.5);
        });
        it('should return a random 3D int32 array', function () {
            var shape = [3, 4, 5];
            var result = dl.randUniform(shape, 0, 2, 'int32');
            expect(result.dtype).toBe('int32');
            test_util.expectValuesInRange(result, 0, 2);
        });
        it('should return a random 3D bool array', function () {
            var shape = [3, 4, 5];
            var result = dl.randUniform(shape, 0, 1, 'bool');
            expect(result.dtype).toBe('bool');
            test_util.expectValuesInRange(result, 0, 1);
        });
        it('should return a random 4D float32 array', function () {
            var shape = [3, 4, 5, 6];
            var result = dl.randUniform(shape, 0, 2.5);
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 2.5);
            result = dl.randUniform(shape, 0, 1.5, 'float32');
            expect(result.dtype).toBe('float32');
            test_util.expectValuesInRange(result, 0, 1.5);
        });
        it('should return a random 4D int32 array', function () {
            var shape = [3, 4, 5, 6];
            var result = dl.randUniform(shape, 0, 2, 'int32');
            expect(result.dtype).toBe('int32');
            test_util.expectValuesInRange(result, 0, 2);
        });
        it('should return a random 4D bool array', function () {
            var shape = [3, 4, 5, 6];
            var result = dl.randUniform(shape, 0, 1, 'bool');
            expect(result.dtype).toBe('bool');
            test_util.expectValuesInRange(result, 0, 1);
        });
    };
    test_util.describeMathCPU('randUniform', [tests]);
    test_util.describeMathGPU('randUniform', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('ImageData 1x1x3', function () {
            var pixels = new ImageData(1, 1);
            pixels.data[0] = 0;
            pixels.data[1] = 80;
            pixels.data[2] = 160;
            pixels.data[3] = 240;
            var array = dl.fromPixels(pixels, 3);
            test_util.expectArraysEqual(array, [0, 80, 160]);
        });
        it('ImageData 1x1x4', function () {
            var pixels = new ImageData(1, 1);
            pixels.data[0] = 0;
            pixels.data[1] = 80;
            pixels.data[2] = 160;
            pixels.data[3] = 240;
            var array = dl.fromPixels(pixels, 4);
            test_util.expectArraysEqual(array, [0, 80, 160, 240]);
        });
        it('ImageData 2x2x3', function () {
            var pixels = new ImageData(2, 2);
            for (var i = 0; i < 8; i++) {
                pixels.data[i] = i * 2;
            }
            for (var i = 8; i < 16; i++) {
                pixels.data[i] = i * 2;
            }
            var array = dl.fromPixels(pixels, 3);
            test_util.expectArraysEqual(array, [0, 2, 4, 8, 10, 12, 16, 18, 20, 24, 26, 28]);
        });
        it('ImageData 2x2x4', function () {
            var pixels = new ImageData(2, 2);
            for (var i = 0; i < 8; i++) {
                pixels.data[i] = i * 2;
            }
            for (var i = 8; i < 16; i++) {
                pixels.data[i] = i * 2;
            }
            var array = dl.fromPixels(pixels, 4);
            test_util.expectArraysClose(array, new Int32Array([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]));
        });
        it('fromPixels, 3 channels', function () {
            var pixels = new ImageData(1, 2);
            pixels.data[0] = 2;
            pixels.data[1] = 3;
            pixels.data[2] = 4;
            pixels.data[3] = 255;
            pixels.data[4] = 5;
            pixels.data[5] = 6;
            pixels.data[6] = 7;
            pixels.data[7] = 255;
            var res = dl.fromPixels(pixels, 3);
            expect(res.shape).toEqual([2, 1, 3]);
            expect(res.dtype).toBe('int32');
            test_util.expectArraysClose(res, [2, 3, 4, 5, 6, 7]);
        });
        it('fromPixels, reshape, then do dl.add()', function () {
            var pixels = new ImageData(1, 1);
            pixels.data[0] = 2;
            pixels.data[1] = 3;
            pixels.data[2] = 4;
            pixels.data[3] = 255;
            var a = dl.fromPixels(pixels, 3).reshape([1, 1, 1, 3]);
            var res = a.add(ndarray_1.Scalar.new(2, 'int32'));
            expect(res.shape).toEqual([1, 1, 1, 3]);
            expect(res.dtype).toBe('int32');
            test_util.expectArraysClose(res, [4, 5, 6]);
        });
        it('fromPixels + fromPixels', function () {
            var pixelsA = new ImageData(1, 1);
            pixelsA.data[0] = 255;
            pixelsA.data[1] = 3;
            pixelsA.data[2] = 4;
            pixelsA.data[3] = 255;
            var pixelsB = new ImageData(1, 1);
            pixelsB.data[0] = 5;
            pixelsB.data[1] = 6;
            pixelsB.data[2] = 7;
            pixelsB.data[3] = 255;
            var a = dl.fromPixels(pixelsA, 3).toFloat();
            var b = dl.fromPixels(pixelsB, 3).toFloat();
            var res = a.add(b);
            expect(res.shape).toEqual([1, 1, 3]);
            expect(res.dtype).toBe('float32');
            test_util.expectArraysClose(res, [260, 9, 11]);
        });
    };
    test_util.describeMathCPU('fromPixels', [tests]);
    test_util.describeMathGPU('fromPixels', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('1D default dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3]);
            var b = dl.clone(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysClose(b, [1, 2, 3]);
        });
        it('1D float32 dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'float32');
            var b = dl.clone(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysClose(b, [1, 2, 3]);
        });
        it('1D int32 dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'int32');
            var b = dl.clone(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysEqual(b, [1, 2, 3]);
        });
        it('1D bool dtype', function () {
            var a = ndarray_1.Array1D.new([1, 2, 3], 'bool');
            var b = dl.clone(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([3]);
            test_util.expectArraysEqual(b, [1, 1, 1]);
        });
        it('2D default dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4]);
            var b = dl.clone(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysClose(b, [1, 2, 3, 4]);
        });
        it('2D float32 dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'float32');
            var b = dl.clone(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysClose(b, [1, 2, 3, 4]);
        });
        it('2D int32 dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'int32');
            var b = dl.clone(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysEqual(b, [1, 2, 3, 4]);
        });
        it('2D bool dtype', function () {
            var a = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'bool');
            var b = dl.clone(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
        it('3D default dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4]);
            var b = dl.clone(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysClose(b, [1, 2, 3, 4]);
        });
        it('3D float32 dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'float32');
            var b = dl.clone(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysClose(b, [1, 2, 3, 4]);
        });
        it('3D int32 dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'int32');
            var b = dl.clone(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysEqual(b, [1, 2, 3, 4]);
        });
        it('3D bool dtype', function () {
            var a = ndarray_1.Array3D.new([2, 2, 1], [1, 2, 3, 4], 'bool');
            var b = dl.clone(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2, 1]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
        it('4D default dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4]);
            var b = dl.clone(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysClose(b, [1, 2, 3, 4]);
        });
        it('4D float32 dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'float32');
            var b = dl.clone(a);
            expect(b.dtype).toBe('float32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysClose(b, [1, 2, 3, 4]);
        });
        it('4D int32 dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'int32');
            var b = dl.clone(a);
            expect(b.dtype).toBe('int32');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysEqual(b, [1, 2, 3, 4]);
        });
        it('4D bool dtype', function () {
            var a = ndarray_1.Array4D.new([2, 2, 1, 1], [1, 2, 3, 4], 'bool');
            var b = dl.clone(a);
            expect(b.dtype).toBe('bool');
            expect(b.shape).toEqual([2, 2, 1, 1]);
            test_util.expectArraysEqual(b, [1, 1, 1, 1]);
        });
    };
    test_util.describeMathCPU('clone', [tests]);
    test_util.describeMathGPU('clone', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('1D (tile)', function () {
            var t = ndarray_1.Array1D.new([1, 2, 3]);
            var t2 = dl.tile(t, [2]);
            expect(t2.shape).toEqual([6]);
            test_util.expectArraysClose(t2, [1, 2, 3, 1, 2, 3]);
        });
        it('2D (tile)', function () {
            var t = ndarray_1.Array2D.new([2, 2], [1, 11, 2, 22]);
            var t2 = dl.tile(t, [1, 2]);
            expect(t2.shape).toEqual([2, 4]);
            test_util.expectArraysClose(t2, [1, 11, 1, 11, 2, 22, 2, 22]);
            t2 = dl.tile(t, [2, 1]);
            expect(t2.shape).toEqual([4, 2]);
            test_util.expectArraysClose(t2, [1, 11, 2, 22, 1, 11, 2, 22]);
            t2 = dl.tile(t, [2, 2]);
            expect(t2.shape).toEqual([4, 4]);
            test_util.expectArraysClose(t2, [1, 11, 1, 11, 2, 22, 2, 22, 1, 11, 1, 11, 2, 22, 2, 22]);
        });
        it('3D (tile)', function () {
            var t = ndarray_1.Array3D.new([2, 2, 2], [1, 2, 3, 4, 5, 6, 7, 8]);
            var t2 = dl.tile(t, [1, 2, 1]);
            expect(t2.shape).toEqual([2, 4, 2]);
            test_util.expectArraysClose(t2, [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8]);
        });
        it('propagates NaNs', function () {
            var t = ndarray_1.Array1D.new([1, 2, NaN]);
            var t2 = dl.tile(t, [2]);
            expect(t2.shape).toEqual([6]);
            test_util.expectArraysClose(t2, [1, 2, NaN, 1, 2, NaN]);
        });
        it('1D bool (tile)', function () {
            var t = ndarray_1.Array1D.new([true, false, true], 'bool');
            var t2 = dl.tile(t, [2]);
            expect(t2.shape).toEqual([6]);
            expect(t2.dtype).toBe('bool');
            test_util.expectArraysEqual(t2, [1, 0, 1, 1, 0, 1]);
        });
        it('2D bool (tile)', function () {
            var t = ndarray_1.Array2D.new([2, 2], [true, false, true, true], 'bool');
            var t2 = dl.tile(t, [1, 2]);
            expect(t2.shape).toEqual([2, 4]);
            expect(t2.dtype).toBe('bool');
            test_util.expectArraysEqual(t2, [1, 0, 1, 0, 1, 1, 1, 1]);
            t2 = dl.tile(t, [2, 1]);
            expect(t2.shape).toEqual([4, 2]);
            expect(t2.dtype).toBe('bool');
            test_util.expectArraysEqual(t2, [1, 0, 1, 1, 1, 0, 1, 1]);
            t2 = dl.tile(t, [2, 2]);
            expect(t2.shape).toEqual([4, 4]);
            expect(t2.dtype).toBe('bool');
            test_util.expectArraysEqual(t2, [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1]);
        });
        it('3D bool (tile)', function () {
            var t = ndarray_1.Array3D.new([2, 2, 2], [true, false, true, false, true, false, true, false], 'bool');
            var t2 = dl.tile(t, [1, 2, 1]);
            expect(t2.shape).toEqual([2, 4, 2]);
            expect(t2.dtype).toBe('bool');
            test_util.expectArraysEqual(t2, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]);
        });
        it('bool propagates NaNs', function () {
            var t = ndarray_1.Array1D.new([true, false, NaN], 'bool');
            var t2 = dl.tile(t, [2]);
            expect(t2.shape).toEqual([6]);
            expect(t2.dtype).toBe('bool');
            test_util.expectArraysEqual(t2, [1, 0, util.getNaN('bool'), 1, 0, util.getNaN('bool')]);
        });
        it('1D int32 (tile)', function () {
            var t = ndarray_1.Array1D.new([1, 2, 5], 'int32');
            var t2 = dl.tile(t, [2]);
            expect(t2.shape).toEqual([6]);
            expect(t2.dtype).toBe('int32');
            test_util.expectArraysEqual(t2, [1, 2, 5, 1, 2, 5]);
        });
        it('2D int32 (tile)', function () {
            var t = ndarray_1.Array2D.new([2, 2], [1, 2, 3, 4], 'int32');
            var t2 = dl.tile(t, [1, 2]);
            expect(t2.shape).toEqual([2, 4]);
            expect(t2.dtype).toBe('int32');
            test_util.expectArraysEqual(t2, [1, 2, 1, 2, 3, 4, 3, 4]);
            t2 = dl.tile(t, [2, 1]);
            expect(t2.shape).toEqual([4, 2]);
            expect(t2.dtype).toBe('int32');
            test_util.expectArraysEqual(t2, [1, 2, 3, 4, 1, 2, 3, 4]);
            t2 = dl.tile(t, [2, 2]);
            expect(t2.shape).toEqual([4, 4]);
            expect(t2.dtype).toBe('int32');
            test_util.expectArraysEqual(t2, [1, 2, 1, 2, 3, 4, 3, 4, 1, 2, 1, 2, 3, 4, 3, 4]);
        });
        it('3D int32 (tile)', function () {
            var t = ndarray_1.Array3D.new([2, 2, 2], [1, 2, 3, 4, 5, 6, 7, 8], 'int32');
            var t2 = dl.tile(t, [1, 2, 1]);
            expect(t2.shape).toEqual([2, 4, 2]);
            expect(t2.dtype).toBe('int32');
            test_util.expectArraysEqual(t2, [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8]);
        });
        it('int32 propagates NaNs', function () {
            var t = ndarray_1.Array1D.new([1, 3, NaN], 'int32');
            var t2 = dl.tile(t, [2]);
            expect(t2.shape).toEqual([6]);
            expect(t2.dtype).toBe('int32');
            test_util.expectArraysEqual(t2, [1, 3, util.getNaN('int32'), 1, 3, util.getNaN('int32')]);
        });
    };
    test_util.describeMathCPU('tile', [tests]);
    test_util.describeMathGPU('tile', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('1D (gather)', function () {
            var t = ndarray_1.Array1D.new([1, 2, 3]);
            var t2 = dl.gather(t, ndarray_1.Array1D.new([0, 2, 0, 1], 'int32'), 0);
            expect(t2.shape).toEqual([4]);
            test_util.expectArraysClose(t2, [1, 3, 1, 2]);
        });
        it('2D (gather)', function () {
            var t = ndarray_1.Array2D.new([2, 2], [1, 11, 2, 22]);
            var t2 = dl.gather(t, ndarray_1.Array1D.new([1, 0, 0, 1], 'int32'), 0);
            expect(t2.shape).toEqual([4, 2]);
            test_util.expectArraysClose(t2, [2, 22, 1, 11, 1, 11, 2, 22]);
            t2 = dl.gather(t, ndarray_1.Array1D.new([1, 0, 0, 1], 'int32'), 1);
            expect(t2.shape).toEqual([2, 4]);
            test_util.expectArraysClose(t2, [11, 1, 1, 11, 22, 2, 2, 22]);
        });
        it('3D (gather)', function () {
            var t = ndarray_1.Array3D.new([2, 2, 2], [1, 2, 3, 4, 5, 6, 7, 8]);
            var t2 = dl.gather(t, ndarray_1.Array1D.new([1, 0, 0, 1], 'int32'), 2);
            expect(t2.shape).toEqual([2, 2, 4]);
            test_util.expectArraysClose(t2, [2, 1, 1, 2, 4, 3, 3, 4, 6, 5, 5, 6, 8, 7, 7, 8]);
        });
        it('bool (gather)', function () {
            var t = ndarray_1.Array1D.new([true, false, true], 'bool');
            var t2 = dl.gather(t, ndarray_1.Array1D.new([0, 2, 0, 1], 'int32'), 0);
            expect(t2.shape).toEqual([4]);
            expect(t2.dtype).toBe('bool');
            expect(t2.getValues()).toEqual(new Uint8Array([1, 1, 1, 0]));
        });
        it('int32 (gather)', function () {
            var t = ndarray_1.Array1D.new([1, 2, 5], 'int32');
            var t2 = dl.gather(t, ndarray_1.Array1D.new([0, 2, 0, 1], 'int32'), 0);
            expect(t2.shape).toEqual([4]);
            expect(t2.dtype).toBe('int32');
            expect(t2.getValues()).toEqual(new Int32Array([1, 5, 1, 2]));
        });
        it('propagates NaNs', function () {
            var t = ndarray_1.Array1D.new([1, 2, NaN]);
            var t2 = dl.gather(t, ndarray_1.Array1D.new([0, 2, 0, 1], 'int32'), 0);
            expect(t2.shape).toEqual([4]);
            test_util.expectArraysClose(t2, [1, NaN, 1, 2]);
        });
    };
    test_util.describeMathCPU('gather', [tests]);
    test_util.describeMathGPU('gather', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var tests = function (it) {
        it('Depth 1 throws error', function () {
            var indices = ndarray_1.Array1D.new([0, 0, 0]);
            expect(function () { return dl.oneHot(indices, 1); }).toThrowError();
        });
        it('Depth 2, diagonal', function () {
            var indices = ndarray_1.Array1D.new([0, 1]);
            var res = dl.oneHot(indices, 2);
            expect(res.shape).toEqual([2, 2]);
            test_util.expectArraysClose(res, [1, 0, 0, 1]);
        });
        it('Depth 2, transposed diagonal', function () {
            var indices = ndarray_1.Array1D.new([1, 0]);
            var res = dl.oneHot(indices, 2);
            expect(res.shape).toEqual([2, 2]);
            test_util.expectArraysClose(res, [0, 1, 1, 0]);
        });
        it('Depth 3, 4 events', function () {
            var indices = ndarray_1.Array1D.new([2, 1, 2, 0]);
            var res = dl.oneHot(indices, 3);
            expect(res.shape).toEqual([4, 3]);
            test_util.expectArraysClose(res, [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0]);
        });
        it('Depth 2 onValue=3, offValue=-2', function () {
            var indices = ndarray_1.Array1D.new([0, 1]);
            var res = dl.oneHot(indices, 2, 3, -2);
            expect(res.shape).toEqual([2, 2]);
            test_util.expectArraysClose(res, [3, -2, -2, 3]);
        });
    };
    test_util.describeMathCPU('oneHot', [tests]);
    test_util.describeMathGPU('oneHot', [tests], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
{
    var testsRange = function (it) {
        it('start stop', function () {
            var a = dl.range(0, 3);
            test_util.expectArraysEqual(a, [0, 1, 2]);
            expect(a.shape).toEqual([3]);
            var b = dl.range(3, 8);
            test_util.expectArraysEqual(b, [3, 4, 5, 6, 7]);
            expect(b.shape).toEqual([5]);
        });
        it('start stop negative', function () {
            var a = dl.range(-2, 3);
            test_util.expectArraysEqual(a, [-2, -1, 0, 1, 2]);
            expect(a.shape).toEqual([5]);
            var b = dl.range(4, -2);
            test_util.expectArraysEqual(b, [4, 3, 2, 1, 0, -1]);
            expect(b.shape).toEqual([6]);
        });
        it('start stop step', function () {
            var a = dl.range(4, 15, 4);
            test_util.expectArraysEqual(a, [4, 8, 12]);
            expect(a.shape).toEqual([3]);
            var b = dl.range(4, 11, 4);
            test_util.expectArraysEqual(b, [4, 8]);
            expect(b.shape).toEqual([2]);
            var c = dl.range(4, 17, 4);
            test_util.expectArraysEqual(c, [4, 8, 12, 16]);
            expect(c.shape).toEqual([4]);
            var d = dl.range(0, 30, 5);
            test_util.expectArraysEqual(d, [0, 5, 10, 15, 20, 25]);
            expect(d.shape).toEqual([6]);
            var e = dl.range(-3, 9, 2);
            test_util.expectArraysEqual(e, [-3, -1, 1, 3, 5, 7]);
            expect(e.shape).toEqual([6]);
            var f = dl.range(3, 3);
            test_util.expectArraysEqual(f, new Float32Array(0));
            expect(f.shape).toEqual([0]);
            var g = dl.range(3, 3, 1);
            test_util.expectArraysEqual(g, new Float32Array(0));
            expect(g.shape).toEqual([0]);
            var h = dl.range(3, 3, 4);
            test_util.expectArraysEqual(h, new Float32Array(0));
            expect(h.shape).toEqual([0]);
            var i = dl.range(-18, -2, 5);
            test_util.expectArraysEqual(i, [-18, -13, -8, -3]);
            expect(i.shape).toEqual([4]);
        });
        it('start stop large step', function () {
            var a = dl.range(3, 10, 150);
            test_util.expectArraysEqual(a, [3]);
            expect(a.shape).toEqual([1]);
            var b = dl.range(10, 500, 205);
            test_util.expectArraysEqual(b, [10, 215, 420]);
            expect(b.shape).toEqual([3]);
            var c = dl.range(3, -10, -150);
            test_util.expectArraysEqual(c, [3]);
            expect(c.shape).toEqual([1]);
            var d = dl.range(-10, -500, -205);
            test_util.expectArraysEqual(d, [-10, -215, -420]);
            expect(d.shape).toEqual([3]);
        });
        it('start stop negative step', function () {
            var a = dl.range(0, -10, -1);
            test_util.expectArraysEqual(a, [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
            expect(a.shape).toEqual([10]);
            var b = dl.range(0, -10);
            test_util.expectArraysEqual(b, [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
            expect(b.shape).toEqual([10]);
            var c = dl.range(3, -4, -2);
            test_util.expectArraysEqual(c, [3, 1, -1, -3]);
            expect(c.shape).toEqual([4]);
            var d = dl.range(-3, -18, -5);
            test_util.expectArraysEqual(d, [-3, -8, -13]);
            expect(d.shape).toEqual([3]);
        });
        it('start stop incompatible step', function () {
            var a = dl.range(3, 10, -2);
            test_util.expectArraysEqual(a, new Float32Array(0));
            expect(a.shape).toEqual([0]);
            var b = dl.range(40, 3, 2);
            test_util.expectArraysEqual(b, new Float32Array(0));
            expect(b.shape).toEqual([0]);
        });
        it('zero step', function () {
            expect(function () { return dl.range(2, 10, 0); }).toThrow();
        });
        it('should have default dtype', function () {
            var a = dl.range(1, 4);
            test_util.expectArraysEqual(a, [1, 2, 3]);
            expect(a.dtype).toEqual('float32');
            expect(a.shape).toEqual([3]);
        });
        it('should have float32 dtype', function () {
            var a = dl.range(1, 4, undefined, 'float32');
            test_util.expectArraysEqual(a, [1, 2, 3]);
            expect(a.dtype).toEqual('float32');
            expect(a.shape).toEqual([3]);
        });
        it('should have int32 dtype', function () {
            var a = dl.range(1, 4, undefined, 'int32');
            test_util.expectArraysEqual(a, [1, 2, 3]);
            expect(a.dtype).toEqual('int32');
            expect(a.shape).toEqual([3]);
        });
    };
    test_util.describeMathCPU('range', [testsRange]);
    test_util.describeMathGPU('range', [testsRange], [
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 1 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': true, 'WEBGL_VERSION': 2 },
        { 'WEBGL_FLOAT_TEXTURE_ENABLED': false, 'WEBGL_VERSION': 1 }
    ]);
}
//# sourceMappingURL=array_ops_test.js.map