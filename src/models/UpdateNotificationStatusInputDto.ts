export enum UpdateNotificationStatusInputDtoStatus {
  'ACCEPTED' = 'ACCEPTED',
  'DENIED' = 'DENIED',
  'WAITING' = 'WAITING'
}
export type UpdateNotificationStatusInputDto = {
  /**
   * @description Notification Status
   * @type string | undefined
   */
  status?: UpdateNotificationStatusInputDtoStatus;
  /**
   * @description Notification Read Status
   * @type boolean | undefined
   */
  read?: boolean;
};
