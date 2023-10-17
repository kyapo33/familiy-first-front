import type { Buffer } from '../Buffer';
import type { CloudinaryUploadResponse } from '../CloudinaryUploadResponse';

/**
 * @description File to upload
 */
export type CloudinaryControllerUploadImageMutationRequest = Buffer;

/**
 * @description uploaded image
 */
export type CloudinaryControllerUploadImageMutationResponse = CloudinaryUploadResponse;
