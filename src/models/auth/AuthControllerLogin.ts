import type { LoginInputDto } from '../LoginInputDto';
import type { AuthModel } from '../AuthModel';

/**
 * @description User login
 */
export type AuthControllerLoginMutationRequest = LoginInputDto;

export type AuthControllerLoginMutationResponse = AuthModel;
