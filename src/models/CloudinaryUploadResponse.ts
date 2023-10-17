export type CloudinaryUploadResponse = {
  /**
   * @description Asset ID
   * @type string
   */
  asset_id: string;
  /**
   * @description Public ID
   * @type string
   */
  public_id: string;
  /**
   * @description Version
   * @type number
   */
  version: number;
  /**
   * @description Version ID
   * @type string
   */
  version_id: string;
  /**
   * @description Signature
   * @type string
   */
  signature: string;
  /**
   * @description Width
   * @type number
   */
  width: number;
  /**
   * @description Height
   * @type number
   */
  height: number;
  /**
   * @description Format
   * @type string
   */
  format: string;
  /**
   * @description Resource type
   * @type string
   */
  resource_type: string;
  /**
   * @description Creation date
   * @type string
   */
  created_at: string;
  /**
   * @description Tags
   * @type array
   */
  tags: string[];
  /**
   * @description Size in bytes
   * @type number
   */
  bytes: number;
  /**
   * @description Type
   * @type string
   */
  type: string;
  /**
   * @description Etag
   * @type string
   */
  etag: string;
  /**
   * @description Placeholder
   * @type boolean
   */
  placeholder: boolean;
  /**
   * @description URL
   * @type string
   */
  url: string;
  /**
   * @description Secure URL
   * @type string
   */
  secure_url: string;
  /**
   * @description Folder
   * @type string
   */
  folder: string;
  /**
   * @description Original filename
   * @type string
   */
  original_filename: string;
  /**
   * @description API Key
   * @type string
   */
  api_key: string;
};
