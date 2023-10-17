import type { GetUserProfileByFamilyDto } from '../GetUserProfileByFamilyDto';

export type UserControllerGetFamilyUsersPathParams = {
  /**
   * @type string
   */
  familyId: string;
};

/**
 * @description retrieve user families
 */
export type UserControllerGetFamilyUsersQueryResponse = GetUserProfileByFamilyDto[];
