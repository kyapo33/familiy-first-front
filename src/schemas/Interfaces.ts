/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SignUpInputDto {
  /** User Email */
  email: string;
  /** User Password */
  password: string;
  /** User Password */
  mobileToken?: string;
  /** User First Name */
  firstName: string;
  /** User Last Name */
  lastName: string;
  /** User Phone Number */
  phoneNumber?: string;
  /**
   * User Birthdate
   * @format date-time
   */
  birthdate?: string;
}

export interface AuthModel {
  token: string;
}

export interface LoginInputDto {
  /** User Email */
  email: string;
  /** User Password */
  password: string;
}

export interface UserName {
  /** UserName value */
  value: string;
  /** Family ID */
  familyId: object;
}

export interface GetUserModelDto {
  /** User id */
  id: string;
  /** User Name By Family */
  userName?: UserName[];
  /** User First Name */
  firstName: string;
  /** User Last Name */
  lastName: string;
  /** User Phone Number */
  phoneNumber?: string;
  /**
   * User Birthdate
   * @format date-time
   */
  birthdate?: string;
  /** User Age */
  age?: number;
  /** User Email */
  email: string;
  /** User Serial Number */
  serialNumber: string;
  /** User profile picture url */
  profilePictureUrl?: string;
}

export interface UpdateUserInputDto {
  /** User Name By Family */
  userName?: UserName[];
  /** User First Name */
  firstName?: string;
  /** User Last Name */
  lastName?: string;
  /** User Phone Number */
  phoneNumber?: string;
  /**
   * User Birthdate
   * @format date-time
   */
  birthdate?: string;
  /** User Email */
  email?: string;
  /** User Password */
  password?: string;
  /** User Mobile Token */
  mobileToken?: string;
  /** User Families */
  familyIds?: string[];
  /** User profile picture id */
  profilePictureId?: string;
}

export interface GetUserProfileByFamilyDto {
  /** User id */
  id: string;
  /** User Name By Family */
  userName?: string;
  /** User First Name */
  firstName: string;
  /** User Last Name */
  lastName: string;
  /** User Phone Number */
  phoneNumber?: string;
  /**
   * User Birthdate
   * @format date-time
   */
  birthdate?: string;
  /** User Age */
  age?: number;
  /** User Email */
  email: string;
  /** User Serial Number */
  serialNumber: string;
  /** User profile picture url */
  profilePictureUrl?: string;
}

export type Buffer = object;

export interface CloudinaryUploadResponse {
  /** Asset ID */
  asset_id: string;
  /** Public ID */
  public_id: string;
  /** Version */
  version: number;
  /** Version ID */
  version_id: string;
  /** Signature */
  signature: string;
  /** Width */
  width: number;
  /** Height */
  height: number;
  /** Format */
  format: string;
  /** Resource type */
  resource_type: string;
  /** Creation date */
  created_at: string;
  /** Tags */
  tags: string[];
  /** Size in bytes */
  bytes: number;
  /** Type */
  type: string;
  /** Etag */
  etag: string;
  /** Placeholder */
  placeholder: boolean;
  /** URL */
  url: string;
  /** Secure URL */
  secure_url: string;
  /** Folder */
  folder: string;
  /** Original filename */
  original_filename: string;
  /** API Key */
  api_key: string;
}

export interface GetFamilyModelDto {
  /** Family id */
  id: string;
  /** Family Name */
  name: string;
}

export interface CreateFamilyInputDto {
  /** Family Name */
  name: string;
}

export interface UpdateFamilyInputDto {
  /** Family Name */
  name?: string;
}

export interface SuccesResponseType {
  /** Success */
  success: boolean;
  /** message */
  message?: string;
}

export interface UpdateNotificationStatusInputDto {
  /** Notification Status */
  status?: 'ACCEPTED' | 'DENIED' | 'WAITING';
  /** Notification Read Status */
  read?: boolean;
}

export interface NotificationModel {
  /** notification id */
  id: string;
  /** Notification Type */
  type: 'FAMILY_REQUEST';
  /** Created By User ID */
  createdBy?: string;
  /** Created By User ID */
  createdFor?: string;
  /** Associated Family ID */
  familyId: string;
  /** Notification Status */
  status?: 'ACCEPTED' | 'DENIED' | 'WAITING';
  /** Notification Read Status */
  read: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Mon API
 * @version 1.0
 * @contact
 *
 * La description de mon API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSignUp
     * @request POST:/auth/signup
     */
    authControllerSignUp: (data: SignUpInputDto, params: RequestParams = {}) =>
      this.request<AuthModel, any>({
        path: `/auth/signup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLogin
     * @request POST:/auth/login
     */
    authControllerLogin: (data: LoginInputDto, params: RequestParams = {}) =>
      this.request<AuthModel, any>({
        path: `/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      })
  };
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserControllerGetUserProfile
     * @request GET:/user/profile
     */
    userControllerGetUserProfile: (params: RequestParams = {}) =>
      this.request<GetUserModelDto, any>({
        path: `/user/profile`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerUpdateUser
     * @request PATCH:/user/update/{userId}
     */
    userControllerUpdateUser: (userId: string, data: UpdateUserInputDto, params: RequestParams = {}) =>
      this.request<GetUserModelDto, any>({
        path: `/user/update/${userId}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerGetFamilyUsers
     * @request GET:/user/family/{familyId}
     */
    userControllerGetFamilyUsers: (familyId: string, params: RequestParams = {}) =>
      this.request<GetUserProfileByFamilyDto[], any>({
        path: `/user/family/${familyId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerGetProfileByFamily
     * @request GET:/user/profile/{userId}/family/{familyId}
     */
    userControllerGetProfileByFamily: (userId: string, familyId: string, params: RequestParams = {}) =>
      this.request<GetUserProfileByFamilyDto, any>({
        path: `/user/profile/${userId}/family/${familyId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerGetBySerialNumber
     * @request GET:/user/serial/{serialNumber}
     */
    userControllerGetBySerialNumber: (serialNumber: string, params: RequestParams = {}) =>
      this.request<GetUserModelDto, any>({
        path: `/user/serial/${serialNumber}`,
        method: 'GET',
        format: 'json',
        ...params
      })
  };
  files = {
    /**
     * No description
     *
     * @tags files
     * @name CloudinaryControllerUploadImage
     * @request POST:/files/upload
     */
    cloudinaryControllerUploadImage: (data: Buffer, params: RequestParams = {}) =>
      this.request<CloudinaryUploadResponse, any>({
        path: `/files/upload`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      })
  };
  family = {
    /**
     * No description
     *
     * @tags family
     * @name FamilyControllerGetFamily
     * @request GET:/family/{familyId}
     */
    familyControllerGetFamily: (familyId: string, params: RequestParams = {}) =>
      this.request<GetFamilyModelDto, any>({
        path: `/family/${familyId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags family
     * @name FamilyControllerCreateFamily
     * @request POST:/family/create
     */
    familyControllerCreateFamily: (data: CreateFamilyInputDto, params: RequestParams = {}) =>
      this.request<GetFamilyModelDto, any>({
        path: `/family/create`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags family
     * @name FamilyControllerUpdateFamily
     * @request PATCH:/family/update/{familyId}
     */
    familyControllerUpdateFamily: (familyId: string, data: UpdateFamilyInputDto, params: RequestParams = {}) =>
      this.request<GetFamilyModelDto, any>({
        path: `/family/update/${familyId}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags family
     * @name FamilyControllerDeleteFamily
     * @request DELETE:/family/delete/{familyId}
     */
    familyControllerDeleteFamily: (familyId: string, params: RequestParams = {}) =>
      this.request<SuccesResponseType, any>({
        path: `/family/delete/${familyId}`,
        method: 'DELETE',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags family
     * @name FamilyControllerGetUserFamilies
     * @request GET:/family/user/families
     */
    familyControllerGetUserFamilies: (params: RequestParams = {}) =>
      this.request<GetFamilyModelDto[], any>({
        path: `/family/user/families`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags family
     * @name FamilyControllerRemoveUserFromFamily
     * @request DELETE:/family/{familyId}/user/{userId}
     */
    familyControllerRemoveUserFromFamily: (familyId: string, userId: string, params: RequestParams = {}) =>
      this.request<GetFamilyModelDto[], any>({
        path: `/family/${familyId}/user/${userId}`,
        method: 'DELETE',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags family
     * @name FamilyControllerCreateFamilyRequest
     * @request POST:/family/request/{familyId}/user/{userId}
     */
    familyControllerCreateFamilyRequest: (familyId: string, userId: string, params: RequestParams = {}) =>
      this.request<SuccesResponseType[], any>({
        path: `/family/request/${familyId}/user/${userId}`,
        method: 'POST',
        format: 'json',
        ...params
      })
  };
  notification = {
    /**
     * No description
     *
     * @tags notification
     * @name NotificationControllerUpdateNotificationStatus
     * @request PATCH:/notification/update/{notificationId}
     */
    notificationControllerUpdateNotificationStatus: (
      notificationId: string,
      data: UpdateNotificationStatusInputDto,
      params: RequestParams = {}
    ) =>
      this.request<NotificationModel, any>({
        path: `/notification/update/${notificationId}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotificationControllerGetFamilyNotifications
     * @request GET:/notification/family/{familyId}
     */
    notificationControllerGetFamilyNotifications: (familyId: string, params: RequestParams = {}) =>
      this.request<NotificationModel, any>({
        path: `/notification/family/${familyId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotificationControllerGetUserNotifications
     * @request GET:/notification/user
     */
    notificationControllerGetUserNotifications: (params: RequestParams = {}) =>
      this.request<NotificationModel, any>({
        path: `/notification/user`,
        method: 'GET',
        format: 'json',
        ...params
      })
  };
}
