export type SignUpInputDto = {
  /**
   * @description User Email
   * @type string
   */
  email: string;
  /**
   * @description User Password
   * @type string
   */
  password: string;
  /**
   * @description User Password
   * @type string | undefined
   */
  mobileToken?: string;
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
};
