import type { CreateFamilyInputDto } from '../CreateFamilyInputDto';
import type { GetFamilyModelDto } from '../GetFamilyModelDto';

/**
 * @description create a family input
 */
export type FamilyControllerCreateFamilyMutationRequest = CreateFamilyInputDto;

/**
 * @description create a family
 */
export type FamilyControllerCreateFamilyMutationResponse = GetFamilyModelDto;
