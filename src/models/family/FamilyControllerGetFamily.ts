import type { GetFamilyModelDto } from '../GetFamilyModelDto';

export type FamilyControllerGetFamilyPathParams = {
  /**
   * @type string
   */
  familyId: string;
};

/**
 * @description get family by id
 */
export type FamilyControllerGetFamilyQueryResponse = GetFamilyModelDto;
