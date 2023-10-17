import type { SuccesResponseType } from '../SuccesResponseType';

export type FamilyControllerCreateFamilyRequestPathParams = {
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
 * @description create a request to invite a user to the family
 */
export type FamilyControllerCreateFamilyRequestMutationResponse = SuccesResponseType[];
