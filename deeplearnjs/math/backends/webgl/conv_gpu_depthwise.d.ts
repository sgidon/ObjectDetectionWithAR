import { Conv2DInfo } from '../../conv_util';
import { GPGPUProgram } from './gpgpu_math';
export declare class DepthwiseConv2DProgram implements GPGPUProgram {
    variableNames: string[];
    outputShape: number[];
    userCode: string;
    constructor(convInfo: Conv2DInfo);
}
