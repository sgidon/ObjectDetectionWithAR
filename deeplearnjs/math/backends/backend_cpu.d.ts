import { Conv2DInfo } from '../conv_util';
import { NDArrayMath } from '../math';
import { Array1D, Array2D, Array3D, Array4D, NDArray } from '../ndarray';
import * as types from '../types';
import { DataType, Rank, TypedArray } from '../types';
import { MathBackend } from './backend';
import { MatrixOrientation } from './types/matmul';
export declare class MathBackendCPU implements MathBackend {
    private data;
    private canvas;
    constructor();
    register(dataId: number, shape: number[], dtype: DataType): void;
    write(dataId: number, values: TypedArray): void;
    fromPixels(pixels: ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, numChannels: number): Array3D;
    read(dataId: number): Promise<TypedArray>;
    readSync(dataId: number): TypedArray;
    disposeData(dataId: number): void;
    time(f: () => void): Promise<number>;
    private throwIfNoData(dataId);
    slice1D(x: Array1D, begin: number, size: number): Array1D;
    slice2D(x: Array2D, begin: [number, number], size: [number, number]): Array2D;
    slice3D(x: Array3D, begin: [number, number, number], size: [number, number, number]): Array3D;
    slice4D(x: Array4D, begin: [number, number, number, number], size: [number, number, number, number]): Array4D;
    reverse4D(x: Array4D, axis: number[]): Array4D;
    concat(a: Array2D, b: Array2D): Array2D;
    neg<T extends NDArray>(x: T): T;
    add(a: NDArray, b: NDArray): NDArray;
    subtract(a: NDArray, b: NDArray): NDArray;
    pow<T extends NDArray>(a: T, b: NDArray): T;
    matMul(a: Array2D, b: Array2D, aOrientation?: MatrixOrientation, bOrientation?: MatrixOrientation): Array2D;
    multiply(a: NDArray, b: NDArray): NDArray;
    divide(a: NDArray, b: NDArray): NDArray;
    sum(x: NDArray, axes: number[]): NDArray;
    argMin(x: NDArray, axes: number[]): NDArray;
    argMax(x: NDArray, axes: number[]): NDArray;
    equal(a: NDArray, b: NDArray): NDArray;
    notEqual(a: NDArray, b: NDArray): NDArray;
    less(a: NDArray, b: NDArray): NDArray;
    lessEqual(a: NDArray, b: NDArray): NDArray;
    greater(a: NDArray, b: NDArray): NDArray;
    greaterEqual(a: NDArray, b: NDArray): NDArray;
    logicalAnd(a: NDArray, b: NDArray): NDArray;
    logicalOr(a: NDArray, b: NDArray): NDArray;
    where(condition: NDArray, a: NDArray, b: NDArray, dtype: DataType): NDArray;
    topKValues<T extends NDArray>(x: T, k: number): Array1D;
    topKIndices(x: NDArray, k: number): Array1D;
    private topK<T>(x, k);
    min(x: NDArray, axes: number[]): NDArray;
    minimum(a: NDArray, b: NDArray): NDArray;
    max(x: NDArray, axes: number[]): NDArray;
    maximum(a: NDArray, b: NDArray): NDArray;
    ceil<T extends NDArray>(x: T): T;
    floor<T extends NDArray>(x: T): T;
    exp<T extends NDArray>(x: T): T;
    log<T extends NDArray>(x: T): T;
    sqrt<T extends NDArray>(x: T): T;
    square<T extends NDArray>(x: T): T;
    relu<T extends NDArray>(x: T): T;
    elu<T extends NDArray>(x: T): T;
    eluDer<T extends NDArray>(x: T): T;
    selu<T extends NDArray>(x: T): T;
    leakyRelu<T extends NDArray>(x: T, alpha: number): T;
    prelu<T extends NDArray>(x: T, alpha: T): T;
    preluDer<T extends NDArray>(x: T, alpha: T): T;
    clip<T extends NDArray>(x: T, min: number, max: number): T;
    abs<T extends NDArray>(x: T): T;
    int<R extends Rank>(x: NDArray<R>): NDArray<R>;
    sigmoid<T extends NDArray>(x: T): T;
    sin<T extends NDArray>(x: T): T;
    cos<T extends NDArray>(x: T): T;
    tan<T extends NDArray>(x: T): T;
    asin<T extends NDArray>(x: T): T;
    acos<T extends NDArray>(x: T): T;
    atan<T extends NDArray>(x: T): T;
    sinh<T extends NDArray>(x: T): T;
    cosh<T extends NDArray>(x: T): T;
    tanh<T extends NDArray>(x: T): T;
    step<T extends NDArray>(x: T, alpha?: number): T;
    conv2d(x: Array4D, filter: Array4D, bias: Array1D | null, convInfo: Conv2DInfo): Array4D;
    conv2dDerInput(dy: Array4D, filter: Array4D, convInfo: Conv2DInfo): Array4D;
    conv2dDerFilter(x: Array4D, dy: Array4D, convInfo: Conv2DInfo): Array4D;
    conv2dDerBias(dy: Array4D): Array1D;
    depthwiseConv2D(x: Array4D, filter: Array4D, convInfo: Conv2DInfo): Array4D;
    tile<T extends NDArray>(x: T, reps: number[]): T;
    pad1D(x: Array1D, paddings: [number, number], constantValue: number): Array1D;
    pad2D(x: Array2D, paddings: [[number, number], [number, number]], constantValue: number): Array2D;
    transpose<T extends NDArray>(x: T, perm: number[]): T;
    gather<T extends NDArray>(x: T, indices: Array1D, axis: number): T;
    private pool(x, convInfo, poolType);
    maxPool(x: Array4D, convInfo: Conv2DInfo): Array4D;
    maxPoolPositions(x: Array4D, convInfo: Conv2DInfo): NDArray<types.Rank.R4>;
    maxPoolBackprop(dy: Array4D, x: Array4D, convInfo: Conv2DInfo): Array4D;
    avgPoolBackprop(dy: Array4D, x: Array4D, convInfo: Conv2DInfo): Array4D;
    minPool(x: Array4D, convInfo: Conv2DInfo): Array4D;
    avgPool(x: Array4D, convInfo: Conv2DInfo): Array4D;
    resizeBilinear(x: Array4D, newHeight: number, newWidth: number, alignCorners: boolean): Array4D;
    batchNormalization2D(x: Array2D, mean: Array2D | Array1D, variance: Array2D | Array1D, varianceEpsilon: number, scale?: Array2D | Array1D, offset?: Array2D | Array1D): Array2D;
    batchNormalization3D(x: Array3D, mean: Array3D | Array1D, variance: Array3D | Array1D, varianceEpsilon: number, scale?: Array3D | Array1D, offset?: Array3D | Array1D): Array3D;
    batchNormalization4D(x: Array4D, mean: Array4D | Array1D, variance: Array4D | Array1D, varianceEpsilon: number, scale?: Array4D | Array1D, offset?: Array4D | Array1D): Array4D;
    localResponseNormalization4D(x: Array4D, radius: number, bias: number, alpha: number, beta: number, normRegion: 'acrossChannels' | 'withinChannel'): Array4D;
    multinomial(probabilities: Array2D, numSamples: number, seed: number): Array2D;
    oneHot(indices: Array1D, depth: number, onValue: number, offValue: number): Array2D;
    private broadcastedBinaryOp(a, b, dtype, op);
    dispose(): void;
}
export declare class NDArrayMathCPU extends NDArrayMath {
    constructor(safeMode?: boolean);
}