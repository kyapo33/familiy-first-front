import type { GetUserProfileByFamilyDto } from '../GetUserProfileByFamilyDto';

export type UserControllerGetProfileByFamilyPathParams = {
  /**
   * @type string
   */
  userId: string;
  /**
   * @type string
   */
  familyId: string;
};

/**
 * @description retrieve family profile
 */
export type UserControllerGetProfileByFamilyQueryResponse = GetUserProfileByFamilyDto;
