export enum NotificationModelType {
  'FAMILY_REQUEST' = 'FAMILY_REQUEST'
}
export enum NotificationModelStatus {
  'ACCEPTED' = 'ACCEPTED',
  'DENIED' = 'DENIED',
  'WAITING' = 'WAITING'
}
export type NotificationModel = {
  /**
   * @description notification id
   * @type string
   */
  id: string;
  /**
   * @description Notification Type
   * @type string
   */
  type: NotificationModelType;
  /**
   * @description Created By User ID
   * @type string | undefined
   */
  createdBy?: string;
  /**
   * @description Created By User ID
   * @type string | undefined
   */
  createdFor?: string;
  /**
   * @description Associated Family ID
   * @type string
   */
  familyId: string;
  /**
   * @description Notification Status
   * @type string | undefined
   */
  status?: NotificationModelStatus;
  /**
   * @description Notification Read Status
   * @type boolean
   */
  read: boolean;
};
