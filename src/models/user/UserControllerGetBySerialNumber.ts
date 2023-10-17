import type { GetUserModelDto } from '../GetUserModelDto';

export type UserControllerGetBySerialNumberPathParams = {
  /**
   * @type string
   */
  serialNumber: string;
};

/**
 * @description retrieve user by serial number
 */
export type UserControllerGetBySerialNumberQueryResponse = GetUserModelDto;
