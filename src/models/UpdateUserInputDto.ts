import type { UserName } from './UserName';

export type UpdateUserInputDto = {
  /**
   * @description User Name By Family
   * @type array | undefined
   */
  userName?: UserName[];
  /**
   * @description User First Name
   * @type string | undefined
   */
  firstName?: string;
  /**
   * @description User Last Name
   * @type string | undefined
   */
  lastName?: string;
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
   * @description User Email
   * @type string | undefined
   */
  email?: string;
  /**
   * @description User Password
   * @type string | undefined
   */
  password?: string;
  /**
   * @description User Mobile Token
   * @type string | undefined
   */
  mobileToken?: string;
  /**
   * @description User Families
   * @type array | undefined
   */
  familyIds?: string[];
  /**
   * @description User profile picture id
   * @type string | undefined
   */
  profilePictureId?: string;
};
