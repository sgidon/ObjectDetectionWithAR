"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environment");
var ndarray_1 = require("../../math/ndarray");
var graph_1 = require("../graph");
var tensor_array_map_1 = require("../tensor_array_map");
var linear_combination_1 = require("./linear_combination");
describe('Linear combination', function () {
    var math = environment_1.ENV.math;
    var x1Tensor;
    var x2Tensor;
    var c1Tensor;
    var c2Tensor;
    var yTensor;
    var activations;
    var gradients;
    beforeEach(function () {
        activations = new tensor_array_map_1.TensorArrayMap();
        gradients = new tensor_array_map_1.SummedTensorArrayMap(math);
    });
    afterEach(function () {
        activations.disposeArray(x1Tensor);
        activations.disposeArray(x2Tensor);
        activations.disposeArray(c1Tensor);
        activations.disposeArray(c2Tensor);
        activations.disposeArray(yTensor);
        gradients.disposeArray(x1Tensor);
        gradients.disposeArray(x2Tensor);
        gradients.disposeArray(c1Tensor);
        gradients.disposeArray(c2Tensor);
        gradients.disposeArray(yTensor);
    });
    it('Simple linear combination', function () {
        var x1 = ndarray_1.Array1D.new([1, 2, 3]);
        var x2 = ndarray_1.Array1D.new([10, 20, 30]);
        var c1 = ndarray_1.Scalar.new(3);
        var c2 = ndarray_1.Scalar.new(2);
        x1Tensor = new graph_1.Tensor(x1.shape);
        x2Tensor = new graph_1.Tensor(x2.shape);
        c1Tensor = new graph_1.Tensor(c1.shape);
        c2Tensor = new graph_1.Tensor(c2.shape);
        yTensor = new graph_1.Tensor([]);
        activations.set(x1Tensor, x1);
        activations.set(x2Tensor, x2);
        activations.set(c1Tensor, c1);
        activations.set(c2Tensor, c2);
        var op = new linear_combination_1.LinearCombination(x1Tensor, x2Tensor, c1Tensor, c2Tensor, yTensor);
        op.feedForward(math, activations);
        var y = activations.get(yTensor);
        expect(y.get(0)).toBe(x1.get(0) * c1.get() + x2.get(0) * c2.get());
        expect(y.get(1)).toBe(x1.get(1) * c1.get() + x2.get(1) * c2.get());
        expect(y.get(2)).toBe(x1.get(2) * c1.get() + x2.get(2) * c2.get());
        var dy = ndarray_1.Array1D.new([2, 4, 6]);
        gradients.add(yTensor, dy);
        op.backProp(math, activations, gradients);
        var dx1 = gradients.get(x1Tensor);
        expect(dx1.get(0)).toBe(c1.get() * dy.get(0));
        expect(dx1.get(1)).toBe(c1.get() * dy.get(1));
        expect(dx1.get(2)).toBe(c1.get() * dy.get(2));
        var dx2 = gradients.get(x2Tensor);
        expect(dx2.get(0)).toBe(c2.get() * dy.get(0));
        expect(dx2.get(1)).toBe(c2.get() * dy.get(1));
        expect(dx2.get(2)).toBe(c2.get() * dy.get(2));
        var dc1 = gradients.get(c1Tensor);
        expect(dc1.get()).toBe(x1.get(0) * dy.get(0) + x1.get(1) * dy.get(1) + x1.get(2) * dy.get(2));
        var dc2 = gradients.get(c2Tensor);
        expect(dc2.get()).toBe(x2.get(0) * dy.get(0) + x2.get(1) * dy.get(1) + x2.get(2) * dy.get(2));
    });
});
//# sourceMappingURL=linear_combination_test.js.map