import type { NotificationModel } from '../NotificationModel';

export type NotificationControllerGetFamilyNotificationsPathParams = {
  /**
   * @type string
   */
  familyId: string;
};

/**
 * @description get family Notifications
 */
export type NotificationControllerGetFamilyNotificationsQueryResponse = NotificationModel;
