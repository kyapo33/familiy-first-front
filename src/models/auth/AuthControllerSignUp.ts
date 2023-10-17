import type { SignUpInputDto } from '../SignUpInputDto';
import type { AuthModel } from '../AuthModel';

/**
 * @description User creation payload
 */
export type AuthControllerSignUpMutationRequest = SignUpInputDto;

/**
 * @description La liste des utilisateurs a été récupérée avec succès.
 */
export type AuthControllerSignUpMutationResponse = AuthModel;
