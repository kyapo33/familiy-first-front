import type { GetFamilyModelDto } from '../GetFamilyModelDto';

export type FamilyControllerRemoveUserFromFamilyPathParams = {
  /**
   * @description ID of the family
   * @type string
   */
  familyId: string;
  /**
   * @description ID of the user
   * @type string
   */
  userId: string;
};

/**
 * @description Remove a user from a family
 */
export type FamilyControllerRemoveUserFromFamilyMutationResponse = GetFamilyModelDto[];
