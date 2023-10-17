import type { UpdateFamilyInputDto } from '../UpdateFamilyInputDto';
import type { GetFamilyModelDto } from '../GetFamilyModelDto';

export type FamilyControllerUpdateFamilyPathParams = {
  /**
   * @type string
   */
  familyId: string;
};

/**
 * @description update a family input
 */
export type FamilyControllerUpdateFamilyMutationRequest = UpdateFamilyInputDto;

/**
 * @description update a family
 */
export type FamilyControllerUpdateFamilyMutationResponse = GetFamilyModelDto;
