import type { UpdateNotificationStatusInputDto } from '../UpdateNotificationStatusInputDto';
import type { NotificationModel } from '../NotificationModel';

export type NotificationControllerUpdateNotificationStatusPathParams = {
  /**
   * @type string
   */
  notificationId: string;
};

/**
 * @description update notification status input
 */
export type NotificationControllerUpdateNotificationStatusMutationRequest = UpdateNotificationStatusInputDto;

/**
 * @description update notification status
 */
export type NotificationControllerUpdateNotificationStatusMutationResponse = NotificationModel;
