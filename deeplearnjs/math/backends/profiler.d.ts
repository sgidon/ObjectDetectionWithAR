import { NDArray } from '../ndarray';
import { TypedArray } from '../types';
import { BackendTimer } from './backend';
import { Kernel } from './kernel_registry';
export declare class Profiler {
    private backendTimer;
    private logger;
    constructor(backendTimer: BackendTimer, logger?: Logger);
    profileKernel<T extends NDArray>(kernelName: Kernel, f: () => T): T;
}
export declare class Logger {
    logKernelProfile(kernelName: Kernel, result: NDArray, vals: TypedArray, timeMs: number): void;
}
