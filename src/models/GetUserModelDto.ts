import type { UserName } from './UserName';

export type GetUserModelDto = {
  /**
   * @description User id
   * @type string
   */
  id: string;
  /**
   * @description User Name By Family
   * @type array | undefined
   */
  userName?: UserName[];
  /**
   * @description User First Name
   * @type string
   */
  firstName: string;
  /**
   * @description User Last Name
   * @type string
   */
  lastName: string;
  /**
   * @description User Phone Number
   * @type string | undefined
   */
  phoneNumber?: string;
  /**
   * @description User Birthdate
   * @type string | undefined date-time
   */
  birthdate?: Date;
  /**
   * @description User Age
   * @type number | undefined
   */
  age?: number;
  /**
   * @description User Email
   * @type string
   */
  email: string;
  /**
   * @description User Serial Number
   * @type string
   */
  serialNumber: string;
  /**
   * @description User profile picture url
   * @type string | undefined
   */
  profilePictureUrl?: string;
};
