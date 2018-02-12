import { WebGL1DisjointQueryTimerExtension, WebGL2DisjointQueryTimerExtension, WebGLLoseContextExtension, WebGLQuery } from './webgl_types';
export declare class GPGPUContext {
    gl: WebGLRenderingContext;
    textureFloatExtension: {};
    colorBufferFloatExtension: {};
    getBufferSubDataAsyncExtension: {};
    loseContextExtension: WebGLLoseContextExtension;
    disjointQueryTimerExtension: WebGL2DisjointQueryTimerExtension | WebGL1DisjointQueryTimerExtension;
    vertexBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    framebuffer: WebGLFramebuffer;
    outputTexture: WebGLTexture | null;
    program: WebGLProgram | null;
    private disposed;
    private autoDebugValidate;
    constructor(gl?: WebGLRenderingContext);
    dispose(): void;
    enableAutomaticDebugValidation(enabled: boolean): void;
    createMatrixTexture(rows: number, columns: number): WebGLTexture;
    uploadPixelDataToTexture(texture: WebGLTexture, pixels: ImageData | HTMLImageElement | HTMLCanvasElement): void;
    createPackedMatrixTexture(rows: number, columns: number): WebGLTexture;
    deleteMatrixTexture(texture: WebGLTexture): void;
    uploadMatrixToTexture(texture: WebGLTexture, rows: number, columns: number, matrix: Float32Array): void;
    uploadMatrixToPackedTexture(texture: WebGLTexture, rows: number, columns: number, matrix: Float32Array): void;
    downloadMatrixFromTexture(texture: WebGLTexture, rows: number, columns: number): Float32Array;
    downloadMatrixFromTextureAsync(texture: WebGLTexture, rows: number, columns: number): Promise<Float32Array>;
    downloadMatrixFromRGBAColorTexture(texture: WebGLTexture, rows: number, columns: number, channels: number): Float32Array;
    downloadMatrixFromPackedTexture(texture: WebGLTexture, rows: number, columns: number): Float32Array;
    createProgram(fragmentShaderSource: string): WebGLProgram;
    deleteProgram(program: WebGLProgram): void;
    setProgram(program: WebGLProgram | null): void;
    getUniformLocation(program: WebGLProgram, uniformName: string, shouldThrow?: boolean): WebGLUniformLocation;
    getAttributeLocation(program: WebGLProgram, attribute: string): number;
    getUniformLocationNoThrow(program: WebGLProgram, uniformName: string): WebGLUniformLocation;
    setInputMatrixTexture(inputMatrixTexture: WebGLTexture, uniformLocation: WebGLUniformLocation, textureUnit: number): void;
    setOutputMatrixTexture(outputMatrixTexture: WebGLTexture, rows: number, columns: number): void;
    setOutputPackedMatrixTexture(outputPackedMatrixTexture: WebGLTexture, rows: number, columns: number): void;
    setOutputMatrixWriteRegion(startRow: number, numRows: number, startColumn: number, numColumns: number): void;
    setOutputPackedMatrixWriteRegion(startRow: number, numRows: number, startColumn: number, numColumns: number): void;
    debugValidate(): void;
    executeProgram(attribLocations?: {
        [name: string]: number;
    }): void;
    blockUntilAllProgramsCompleted(): void;
    private getQueryTimerExtension();
    private getQueryTimerExtensionWebGL2();
    private getQueryTimerExtensionWebGL1();
    runQuery(queryFn: () => void): Promise<number>;
    beginQuery(): WebGLQuery;
    endQuery(): void;
    private isQueryAvailable(query, queryTimerVersion);
    pollQueryTime(query: WebGLQuery): Promise<number>;
    private getQueryTime(query, queryTimerVersion);
    private downloadMatrixDriverSetup(texture);
    private downloadMatrixDriverTeardown();
    private downloadMatrixDriver(texture, downloadAndDecode);
    private downloadMatrixDriverAsync(texture, downloadAndDecode);
    private setOutputMatrixTextureDriver(outputMatrixTextureMaybePacked, width, height);
    private setOutputMatrixWriteRegionDriver(x, y, width, height);
    private throwIfDisposed();
    private throwIfNoProgram();
}
