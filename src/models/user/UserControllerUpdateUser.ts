import type { UpdateUserInputDto } from '../UpdateUserInputDto';
import type { GetUserModelDto } from '../GetUserModelDto';

export type UserControllerUpdateUserPathParams = {
  /**
   * @type string
   */
  userId: string;
};

/**
 * @description update a user input
 */
export type UserControllerUpdateUserMutationRequest = UpdateUserInputDto;

/**
 * @description update a user
 */
export type UserControllerUpdateUserMutationResponse = GetUserModelDto;
