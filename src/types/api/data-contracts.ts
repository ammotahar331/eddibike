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

export interface IsTenantAvailableInput {
  tenancyName: string;
}

/**
 * @format int32
 */
export enum TenantAvailabilityState {
  Available = 1,
  InActive = 2,
  NotFound = 3,
}

export interface IsTenantAvailableOutput {
  state?: TenantAvailabilityState;

  /** @format int32 */
  tenantId?: number | null;
  serverRootAddress?: string | null;
}

export interface ResolveTenantIdInput {
  c?: string | null;
}

export interface RegisterInput {
  name: string;
  surname: string;
  userName: string;

  /** @format email */
  emailAddress: string;
  password: string;
  captchaResponse?: string | null;
}

export interface RegisterOutput {
  canLogin?: boolean;
}

export interface SendPasswordResetCodeInput {
  emailAddress: string;
}

export interface ResetPasswordInput {
  /** @format int64 */
  userId?: number;
  resetCode?: string | null;
  password?: string | null;
  returnUrl?: string | null;
  singleSignIn?: string | null;
  c?: string | null;
}

export interface ResetPasswordOutput {
  canLogin?: boolean;
  userName?: string | null;
}

export interface SendEmailActivationLinkInput {
  emailAddress: string;
}

export interface ActivateEmailInput {
  /** @format int64 */
  userId?: number;
  confirmationCode?: string | null;
  c?: string | null;
}

export interface ImpersonateInput {
  /** @format int32 */
  tenantId?: number | null;

  /**
   * @format int64
   * @min 1
   */
  userId?: number;
}

export interface ImpersonateOutput {
  impersonationToken?: string | null;
  tenancyName?: string | null;
}

export interface DelegatedImpersonateInput {
  /** @format int64 */
  userDelegationId?: number;
}

export interface SwitchToLinkedAccountInput {
  /** @format int32 */
  targetTenantId?: number | null;

  /**
   * @format int64
   * @min 1
   */
  targetUserId?: number;
}

export interface SwitchToLinkedAccountOutput {
  switchAccountToken?: string | null;
  tenancyName?: string | null;
}

export interface AttributeDto {
  name?: string | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfAttributeDto {
  /** @format int32 */
  totalCount?: number;
  items?: AttributeDto[] | null;
}

export interface AuditLogListDto {
  /** @format int64 */
  userId?: number | null;
  userName?: string | null;

  /** @format int32 */
  impersonatorTenantId?: number | null;

  /** @format int64 */
  impersonatorUserId?: number | null;
  serviceName?: string | null;
  methodName?: string | null;
  parameters?: string | null;

  /** @format date-time */
  executionTime?: string;

  /** @format int32 */
  executionDuration?: number;
  clientIpAddress?: string | null;
  clientName?: string | null;
  browserInfo?: string | null;
  exception?: string | null;
  customData?: string | null;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfAuditLogListDto {
  /** @format int32 */
  totalCount?: number;
  items?: AuditLogListDto[] | null;
}

export interface FileDto {
  fileName: string;
  fileType?: string | null;
  fileToken: string;
}

export interface NameValueDto {
  name?: string | null;
  value?: string | null;
}

/**
 * @format int32
 */
export enum EntityChangeType {
  Created = 0,
  Updated = 1,
  Deleted = 2,
}

export interface EntityChangeListDto {
  /** @format int64 */
  userId?: number | null;
  userName?: string | null;

  /** @format date-time */
  changeTime?: string;
  entityTypeFullName?: string | null;
  changeType?: EntityChangeType;
  changeTypeName?: string | null;

  /** @format int64 */
  entityChangeSetId?: number;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfEntityChangeListDto {
  /** @format int32 */
  totalCount?: number;
  items?: EntityChangeListDto[] | null;
}

export interface EntityPropertyChangeDto {
  /** @format int64 */
  entityChangeId?: number;
  newValue?: string | null;
  originalValue?: string | null;
  propertyName?: string | null;
  propertyTypeFullName?: string | null;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int64 */
  id?: number;
}

export interface CacheDto {
  name?: string | null;
}

export interface ListResultDtoOfCacheDto {
  items?: CacheDto[] | null;
}

export interface EntityDtoOfString {
  id?: string | null;
}

/**
 * @format int32
 */
export enum FriendshipState {
  Accepted = 1,
  Blocked = 2,
}

export interface FriendDto {
  /** @format int64 */
  friendUserId?: number;

  /** @format int32 */
  friendTenantId?: number | null;
  friendUserName?: string | null;
  friendTenancyName?: string | null;

  /** @format uuid */
  friendProfilePictureId?: string | null;

  /** @format int32 */
  unreadMessageCount?: number;
  isOnline?: boolean;
  state?: FriendshipState;
}

export interface GetUserChatFriendsWithSettingsOutput {
  /** @format date-time */
  serverTime?: string;
  friends?: FriendDto[] | null;
}

/**
 * @format int32
 */
export enum ChatSide {
  Sender = 1,
  Receiver = 2,
}

/**
 * @format int32
 */
export enum ChatMessageReadState {
  Unread = 1,
  Read = 2,
}

export interface ChatMessageDto {
  /** @format int64 */
  userId?: number;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int64 */
  targetUserId?: number;

  /** @format int32 */
  targetTenantId?: number | null;
  side?: ChatSide;
  readState?: ChatMessageReadState;
  receiverReadState?: ChatMessageReadState;
  message?: string | null;

  /** @format date-time */
  creationTime?: string;
  sharedMessageId?: string | null;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfChatMessageDto {
  items?: ChatMessageDto[] | null;
}

export interface MarkAllUnreadMessagesOfUserAsReadInput {
  /** @format int32 */
  tenantId?: number | null;

  /** @format int64 */
  userId?: number;
}

export interface SubscribableEditionComboboxItemDto {
  isFree?: boolean | null;
  value?: string | null;
  displayText?: string | null;
  isSelected?: boolean;
}

export interface ListResultDtoOfSubscribableEditionComboboxItemDto {
  items?: SubscribableEditionComboboxItemDto[] | null;
}

export interface FindUsersInput {
  /** @format int32 */
  tenantId?: number | null;
  excludeCurrentUser?: boolean;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  maxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  filter?: string | null;
}

export interface PagedResultDtoOfNameValueDto {
  /** @format int32 */
  totalCount?: number;
  items?: NameValueDto[] | null;
}

export interface GetDefaultEditionNameOutput {
  name?: string | null;
}

export interface Widget {
  widgetId?: string | null;

  /** @format int32 */
  height?: number;

  /** @format int32 */
  width?: number;

  /** @format int32 */
  positionX?: number;

  /** @format int32 */
  positionY?: number;
}

export interface Page {
  id?: string | null;
  name?: string | null;
  widgets?: Widget[] | null;
}

export interface Dashboard {
  dashboardName?: string | null;
  pages?: Page[] | null;
}

export interface SavePageInput {
  dashboardName?: string | null;
  application?: string | null;
  pages?: Page[] | null;
}

export interface RenamePageInput {
  dashboardName?: string | null;
  id?: string | null;
  name?: string | null;
  application?: string | null;
}

export interface AddNewPageInput {
  dashboardName?: string | null;
  name?: string | null;
  application?: string | null;
}

export interface AddNewPageOutput {
  pageId?: string | null;
}

export interface AddWidgetInput {
  widgetId?: string | null;
  pageId?: string | null;
  dashboardName?: string | null;

  /** @format int32 */
  width?: number;

  /** @format int32 */
  height?: number;
  application?: string | null;
}

export interface WidgetFilterOutput {
  id?: string | null;
  name?: string | null;
}

export interface WidgetOutput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  filters?: WidgetFilterOutput[] | null;
}

export interface DashboardOutput {
  name?: string | null;
  widgets?: WidgetOutput[] | null;
}

export interface DateToStringOutput {
  dateString?: string | null;
}

export interface NameValueOfString {
  name?: string | null;
  value?: string | null;
}

export interface StringOutput {
  output?: string | null;
}

export interface DynamicEntityPropertyDto {
  entityFullName?: string | null;
  dynamicPropertyName?: string | null;

  /** @format int32 */
  dynamicPropertyId?: number;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfDynamicEntityPropertyDto {
  items?: DynamicEntityPropertyDto[] | null;
}

export interface GetAllEntitiesHasDynamicPropertyOutput {
  entityFullName?: string | null;
}

export interface ListResultDtoOfGetAllEntitiesHasDynamicPropertyOutput {
  items?: GetAllEntitiesHasDynamicPropertyOutput[] | null;
}

export interface DynamicEntityPropertyValueDto {
  value?: string | null;
  entityId?: string | null;

  /** @format int32 */
  dynamicEntityPropertyId?: number;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfDynamicEntityPropertyValueDto {
  items?: DynamicEntityPropertyValueDto[] | null;
}

export interface IValueValidator {
  name?: string | null;
  attributes?: Record<string, any>;
}

export interface IInputType {
  name?: string | null;
  attributes?: Record<string, any>;
  validator?: IValueValidator;
}

export interface GetAllDynamicEntityPropertyValuesOutputItem {
  /** @format int32 */
  dynamicEntityPropertyId?: number;
  propertyName?: string | null;
  inputType?: IInputType;
  selectedValues?: string[] | null;
  allValuesInputTypeHas?: string[] | null;
}

export interface GetAllDynamicEntityPropertyValuesOutput {
  items?: GetAllDynamicEntityPropertyValuesOutputItem[] | null;
}

export interface InsertOrUpdateAllValuesInputItem {
  entityId?: string | null;

  /** @format int32 */
  dynamicEntityPropertyId?: number;
  values?: string[] | null;
}

export interface InsertOrUpdateAllValuesInput {
  items?: InsertOrUpdateAllValuesInputItem[] | null;
}

export interface CleanValuesInput {
  /** @format int32 */
  dynamicEntityPropertyId?: number;
  entityId?: string | null;
}

export interface DynamicPropertyDto {
  propertyName?: string | null;
  displayName?: string | null;
  inputType?: string | null;
  permission?: string | null;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfDynamicPropertyDto {
  items?: DynamicPropertyDto[] | null;
}

export interface DynamicPropertyValueDto {
  value?: string | null;

  /** @format int32 */
  tenantId?: number | null;

  /** @format int32 */
  dynamicPropertyId?: number;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfDynamicPropertyValueDto {
  items?: DynamicPropertyValueDto[] | null;
}

export interface EditionListDto {
  name?: string | null;
  displayName?: string | null;

  /** @format double */
  dailyPrice?: number | null;

  /** @format double */
  weeklyPrice?: number | null;

  /** @format double */
  monthlyPrice?: number | null;

  /** @format double */
  annualPrice?: number | null;

  /** @format int32 */
  waitingDayAfterExpire?: number | null;

  /** @format int32 */
  trialDayCount?: number | null;
  expiringEditionDisplayName?: string | null;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfEditionListDto {
  items?: EditionListDto[] | null;
}

export interface EditionEditDto {
  /** @format int32 */
  id?: number | null;
  displayName: string;

  /** @format int32 */
  expiringEditionId?: number | null;
}

export interface LocalizableComboboxItemDto {
  value?: string | null;
  displayText?: string | null;
}

export interface LocalizableComboboxItemSourceDto {
  items?: LocalizableComboboxItemDto[] | null;
}

export interface FeatureInputTypeDto {
  name?: string | null;
  attributes?: Record<string, any>;
  validator?: IValueValidator;
  itemSource?: LocalizableComboboxItemSourceDto;
}

export interface FlatFeatureDto {
  parentName?: string | null;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  defaultValue?: string | null;
  inputType?: FeatureInputTypeDto;
}

export interface GetEditionEditOutput {
  edition?: EditionEditDto;
  featureValues?: NameValueDto[] | null;
  features?: FlatFeatureDto[] | null;
}

export interface EditionCreateDto {
  /** @format int32 */
  id?: number | null;
  displayName: string;

  /** @format double */
  dailyPrice?: number | null;

  /** @format double */
  weeklyPrice?: number | null;

  /** @format double */
  monthlyPrice?: number | null;

  /** @format double */
  annualPrice?: number | null;

  /** @format int32 */
  trialDayCount?: number | null;

  /** @format int32 */
  waitingDayAfterExpire?: number | null;

  /** @format int32 */
  expiringEditionId?: number | null;
}

export interface CreateEditionDto {
  edition: EditionCreateDto;
  featureValues: NameValueDto[];
}

export interface UpdateEditionDto {
  edition: EditionEditDto;
  featureValues: NameValueDto[];
}

export interface MoveTenantsToAnotherEditionDto {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  sourceEditionId?: number;

  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  targetEditionId?: number;
}

export interface CreateFriendshipRequestInput {
  /**
   * @format int64
   * @min 1
   */
  userId?: number;

  /** @format int32 */
  tenantId?: number | null;
}

export interface CreateFriendshipRequestByUserNameInput {
  tenancyName: string;
  userName?: string | null;
}

export interface BlockUserInput {
  /**
   * @format int64
   * @min 1
   */
  userId?: number;

  /** @format int32 */
  tenantId?: number | null;
}

export interface UnblockUserInput {
  /**
   * @format int64
   * @min 1
   */
  userId?: number;

  /** @format int32 */
  tenantId?: number | null;
}

export interface AcceptFriendshipRequestInput {
  /**
   * @format int64
   * @min 1
   */
  userId?: number;

  /** @format int32 */
  tenantId?: number | null;
}

export interface TopStatsData {
  /** @format int32 */
  newTenantsCount?: number;

  /** @format double */
  newSubscriptionAmount?: number;

  /** @format int32 */
  dashboardPlaceholder1?: number;

  /** @format int32 */
  dashboardPlaceholder2?: number;
}

export interface RecentTenant {
  /** @format int32 */
  id?: number;
  name?: string | null;

  /** @format date-time */
  creationTime?: string;
}

export interface GetRecentTenantsOutput {
  /** @format int32 */
  recentTenantsDayCount?: number;

  /** @format int32 */
  maxRecentTenantsShownCount?: number;

  /** @format date-time */
  tenantCreationStartDate?: string;
  recentTenants?: RecentTenant[] | null;
}

export interface ExpiringTenant {
  tenantName?: string | null;

  /** @format int32 */
  remainingDayCount?: number;
}

export interface GetExpiringTenantsOutput {
  expiringTenants?: ExpiringTenant[] | null;

  /** @format int32 */
  subscriptionEndAlertDayCount?: number;

  /** @format int32 */
  maxExpiringTenantsShownCount?: number;

  /** @format date-time */
  subscriptionEndDateStart?: string;

  /** @format date-time */
  subscriptionEndDateEnd?: string;
}

/**
 * @format int32
 */
export enum ChartDateInterval {
  Daily = 1,
  Weekly = 2,
  Monthly = 3,
}

export interface IncomeStastistic {
  label?: string | null;

  /** @format date-time */
  date?: string;

  /** @format double */
  amount?: number;
}

export interface GetIncomeStatisticsDataOutput {
  incomeStatistics?: IncomeStastistic[] | null;
}

export interface TenantEdition {
  label?: string | null;

  /** @format int32 */
  value?: number;
}

export interface GetEditionTenantStatisticsOutput {
  editionStatistics?: TenantEdition[] | null;
}

export interface GeneralSettingsEditDto {
  timezone?: string | null;
  timezoneForComparison?: string | null;
}

export interface SessionTimeOutSettingsEditDto {
  isEnabled?: boolean;

  /**
   * @format int32
   * @min 10
   * @max 2147483647
   */
  timeOutSecond?: number;

  /**
   * @format int32
   * @min 10
   * @max 2147483647
   */
  showTimeOutNotificationSecond?: number;
  showLockScreenWhenTimedOut?: boolean;
}

export interface HostUserManagementSettingsEditDto {
  isEmailConfirmationRequiredForLogin?: boolean;
  smsVerificationEnabled?: boolean;
  isCookieConsentEnabled?: boolean;
  isQuickThemeSelectEnabled?: boolean;
  useCaptchaOnLogin?: boolean;
  allowUsingGravatarProfilePicture?: boolean;
  sessionTimeOutSettings?: SessionTimeOutSettingsEditDto;
}

export interface EmailSettingsEditDto {
  defaultFromAddress?: string | null;
  defaultFromDisplayName?: string | null;
  smtpHost?: string | null;

  /** @format int32 */
  smtpPort?: number;
  smtpUserName?: string | null;
  smtpPassword?: string | null;
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
}

export interface TenantManagementSettingsEditDto {
  allowSelfRegistration?: boolean;
  isNewRegisteredTenantActiveByDefault?: boolean;
  useCaptchaOnRegistration?: boolean;

  /** @format int32 */
  defaultEditionId?: number | null;
}

export interface PasswordComplexitySetting {
  requireDigit?: boolean;
  requireLowercase?: boolean;
  requireNonAlphanumeric?: boolean;
  requireUppercase?: boolean;

  /** @format int32 */
  requiredLength?: number;
}

export interface UserLockOutSettingsEditDto {
  isEnabled?: boolean;

  /** @format int32 */
  maxFailedAccessAttemptsBeforeLockout?: number;

  /** @format int32 */
  defaultAccountLockoutSeconds?: number;
}

export interface TwoFactorLoginSettingsEditDto {
  isEnabledForApplication?: boolean;
  isEnabled?: boolean;
  isEmailProviderEnabled?: boolean;
  isSmsProviderEnabled?: boolean;
  isRememberBrowserEnabled?: boolean;
  isGoogleAuthenticatorEnabled?: boolean;
}

export interface SecuritySettingsEditDto {
  allowOneConcurrentLoginPerUser?: boolean;
  useDefaultPasswordComplexitySettings?: boolean;
  passwordComplexity?: PasswordComplexitySetting;
  defaultPasswordComplexity?: PasswordComplexitySetting;
  userLockOut?: UserLockOutSettingsEditDto;
  twoFactorLogin?: TwoFactorLoginSettingsEditDto;
}

export interface HostBillingSettingsEditDto {
  legalName?: string | null;
  address?: string | null;
}

export interface OtherSettingsEditDto {
  isQuickThemeSelectEnabled?: boolean;
}

export interface FacebookExternalLoginProviderSettings {
  appId?: string | null;
  appSecret?: string | null;
}

export interface GoogleExternalLoginProviderSettings {
  clientId?: string | null;
  clientSecret?: string | null;
  userInfoEndpoint?: string | null;
}

export interface TwitterExternalLoginProviderSettings {
  consumerKey?: string | null;
  consumerSecret?: string | null;
}

export interface MicrosoftExternalLoginProviderSettings {
  clientId?: string | null;
  clientSecret?: string | null;
}

export interface OpenIdConnectExternalLoginProviderSettings {
  clientId?: string | null;
  clientSecret?: string | null;
  authority?: string | null;
  loginUrl?: string | null;
  validateIssuer?: boolean;
}

export interface JsonClaimMapDto {
  claim?: string | null;
  key?: string | null;
}

export interface WsFederationExternalLoginProviderSettings {
  clientId?: string | null;
  tenant?: string | null;
  metaDataAddress?: string | null;
  wtrealm?: string | null;
  authority?: string | null;
}

export interface ExternalLoginProviderSettingsEditDto {
  facebook_IsDeactivated?: boolean;
  facebook?: FacebookExternalLoginProviderSettings;
  google_IsDeactivated?: boolean;
  google?: GoogleExternalLoginProviderSettings;
  twitter_IsDeactivated?: boolean;
  twitter?: TwitterExternalLoginProviderSettings;
  microsoft_IsDeactivated?: boolean;
  microsoft?: MicrosoftExternalLoginProviderSettings;
  openIdConnect_IsDeactivated?: boolean;
  openIdConnect?: OpenIdConnectExternalLoginProviderSettings;
  openIdConnectClaimsMapping?: JsonClaimMapDto[] | null;
  wsFederation_IsDeactivated?: boolean;
  wsFederation?: WsFederationExternalLoginProviderSettings;
  wsFederationClaimsMapping?: JsonClaimMapDto[] | null;
}

export interface HostSettingsEditDto {
  general: GeneralSettingsEditDto;
  userManagement: HostUserManagementSettingsEditDto;
  email: EmailSettingsEditDto;
  tenantManagement: TenantManagementSettingsEditDto;
  security: SecuritySettingsEditDto;
  billing?: HostBillingSettingsEditDto;
  otherSettings?: OtherSettingsEditDto;
  externalLoginProviderSettings?: ExternalLoginProviderSettingsEditDto;
}

export interface SendTestEmailInput {
  emailAddress: string;
}

export interface ExternalLoginSettingsDto {
  enabledSocialLoginSettings?: string[] | null;
}

export interface InstallDto {
  connectionString: string;
  adminPassword: string;
  webSiteUrl: string;
  serverUrl?: string | null;
  defaultLanguage: string;
  smtpSettings?: EmailSettingsEditDto;
  billInfo?: HostBillingSettingsEditDto;
}

export interface NameValue {
  name?: string | null;
  value?: string | null;
}

export interface AppSettingsJsonDto {
  webSiteUrl?: string | null;
  serverSiteUrl?: string | null;
  languages?: NameValue[] | null;
}

export interface CheckDatabaseOutput {
  isDatabaseExist?: boolean;
}

export interface InvoiceDto {
  /** @format double */
  amount?: number;
  editionDisplayName?: string | null;
  invoiceNo?: string | null;

  /** @format date-time */
  invoiceDate?: string;
  tenantLegalName?: string | null;
  tenantAddress?: string[] | null;
  tenantTaxNo?: string | null;
  hostLegalName?: string | null;
  hostAddress?: string[] | null;
}

export interface CreateInvoiceDto {
  /** @format int64 */
  subscriptionPaymentId?: number;
}

export interface ApplicationLanguageListDto {
  /** @format int32 */
  tenantId?: number | null;
  name?: string | null;
  displayName?: string | null;
  icon?: string | null;
  isDisabled?: boolean;
  isDeleted?: boolean;

  /** @format int64 */
  deleterUserId?: number | null;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format int64 */
  lastModifierUserId?: number | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  creatorUserId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface GetLanguagesOutput {
  defaultLanguageName?: string | null;
  items?: ApplicationLanguageListDto[] | null;
}

export interface ApplicationLanguageEditDto {
  /** @format int32 */
  id?: number | null;
  name: string;
  icon?: string | null;
  isEnabled?: boolean;
}

export interface ComboboxItemDto {
  value?: string | null;
  displayText?: string | null;
  isSelected?: boolean;
}

export interface GetLanguageForEditOutput {
  language?: ApplicationLanguageEditDto;
  languageNames?: ComboboxItemDto[] | null;
  flags?: ComboboxItemDto[] | null;
}

export interface CreateOrUpdateLanguageInput {
  language: ApplicationLanguageEditDto;
}

export interface SetDefaultLanguageInput {
  name: string;
}

export interface LanguageTextListDto {
  key?: string | null;
  baseValue?: string | null;
  targetValue?: string | null;
}

export interface PagedResultDtoOfLanguageTextListDto {
  /** @format int32 */
  totalCount?: number;
  items?: LanguageTextListDto[] | null;
}

export interface UpdateLanguageTextInput {
  languageName: string;
  sourceName: string;
  key: string;
  value: string;
}

/**
 * @format int32
 */
export enum UserNotificationState {
  Unread = 0,
  Read = 1,
}

export interface NotificationData {
  type?: string | null;
  properties?: Record<string, any>;
}

/**
 * @format int32
 */
export enum NotificationSeverity {
  Info = 0,
  Success = 1,
  Warn = 2,
  Error = 3,
  Fatal = 4,
}

export interface TenantNotification {
  /** @format int32 */
  tenantId?: number | null;
  notificationName?: string | null;
  data?: NotificationData;
  entityType?: string | null;
  entityTypeName?: string | null;
  entityId?: any;
  severity?: NotificationSeverity;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  id?: string;
}

export interface UserNotification {
  /** @format int32 */
  tenantId?: number | null;

  /** @format int64 */
  userId?: number;
  state?: UserNotificationState;
  notification?: TenantNotification;

  /** @format uuid */
  id?: string;
}

export interface GetNotificationsOutput {
  /** @format int32 */
  unreadCount?: number;

  /** @format int32 */
  totalCount?: number;
  items?: UserNotification[] | null;
}

export interface EntityDtoOfGuid {
  /** @format uuid */
  id?: string;
}

export interface NotificationSubscriptionWithDisplayNameDto {
  displayName?: string | null;
  description?: string | null;
  name: string;
  isSubscribed?: boolean;
}

export interface GetNotificationSettingsOutput {
  receiveNotifications?: boolean;
  notifications?: NotificationSubscriptionWithDisplayNameDto[] | null;
}

export interface NotificationSubscriptionDto {
  name: string;
  isSubscribed?: boolean;
}

export interface UpdateNotificationSettingsInput {
  receiveNotifications?: boolean;
  notifications?: NotificationSubscriptionDto[] | null;
}

export interface OrganizationUnitDto {
  /** @format int64 */
  parentId?: number | null;
  code?: string | null;
  displayName?: string | null;

  /** @format int32 */
  memberCount?: number;

  /** @format int32 */
  roleCount?: number;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format int64 */
  lastModifierUserId?: number | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  creatorUserId?: number | null;

  /** @format int64 */
  id?: number;
}

export interface ListResultDtoOfOrganizationUnitDto {
  items?: OrganizationUnitDto[] | null;
}

export interface OrganizationUnitUserListDto {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  emailAddress?: string | null;

  /** @format uuid */
  profilePictureId?: string | null;

  /** @format date-time */
  addedTime?: string;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfOrganizationUnitUserListDto {
  /** @format int32 */
  totalCount?: number;
  items?: OrganizationUnitUserListDto[] | null;
}

export interface OrganizationUnitRoleListDto {
  displayName?: string | null;
  name?: string | null;

  /** @format date-time */
  addedTime?: string;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfOrganizationUnitRoleListDto {
  /** @format int32 */
  totalCount?: number;
  items?: OrganizationUnitRoleListDto[] | null;
}

export interface CreateOrganizationUnitInput {
  /** @format int64 */
  parentId?: number | null;
  displayName: string;
}

export interface UpdateOrganizationUnitInput {
  /**
   * @format int64
   * @min 1
   */
  id?: number;
  displayName: string;
}

export interface MoveOrganizationUnitInput {
  /**
   * @format int64
   * @min 1
   */
  id?: number;

  /** @format int64 */
  newParentId?: number | null;
}

export interface UsersToOrganizationUnitInput {
  userIds?: number[] | null;

  /**
   * @format int64
   * @min 1
   */
  organizationUnitId?: number;
}

export interface RolesToOrganizationUnitInput {
  roleIds?: number[] | null;

  /**
   * @format int64
   * @min 1
   */
  organizationUnitId?: number;
}

export interface FindOrganizationUnitUsersInput {
  /** @format int64 */
  organizationUnitId?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  maxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  filter?: string | null;
}

export interface FindOrganizationUnitRolesInput {
  /** @format int64 */
  organizationUnitId?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  maxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  filter?: string | null;
}

export interface EditionSelectDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  displayName?: string | null;

  /** @format int32 */
  expiringEditionId?: number | null;

  /** @format double */
  dailyPrice?: number | null;

  /** @format double */
  weeklyPrice?: number | null;

  /** @format double */
  monthlyPrice?: number | null;

  /** @format double */
  annualPrice?: number | null;

  /** @format int32 */
  trialDayCount?: number | null;

  /** @format int32 */
  waitingDayAfterExpire?: number | null;
  isFree?: boolean;
  additionalData?: { Paypal?: Record<string, string>; Stripe?: Record<string, string> };
}

export interface PaymentInfoDto {
  edition?: EditionSelectDto;

  /** @format double */
  additionalPrice?: number;
}

/**
 * @format int32
 */
export enum EditionPaymentType {
  NewRegistration = 0,
  BuyNow = 1,
  Upgrade = 2,
  Extend = 3,
}

/**
 * @format int32
 */
export enum PaymentPeriodType {
  Daily = 1,
  Weekly = 7,
  Monthly = 30,
  Annual = 365,
}

/**
 * @format int32
 */
export enum SubscriptionPaymentGatewayType {
  Paypal = 1,
  Stripe = 2,
}

export interface CreatePaymentDto {
  /** @format int32 */
  editionId?: number;
  editionPaymentType?: EditionPaymentType;
  paymentPeriodType?: PaymentPeriodType;
  subscriptionPaymentGatewayType?: SubscriptionPaymentGatewayType;
  recurringPaymentEnabled?: boolean;
  successUrl?: string | null;
  errorUrl?: string | null;
}

export interface CancelPaymentDto {
  paymentId?: string | null;
  gateway?: SubscriptionPaymentGatewayType;
}

export interface SubscriptionPaymentListDto {
  gateway?: string | null;

  /** @format double */
  amount?: number;

  /** @format int32 */
  editionId?: number;

  /** @format int32 */
  dayCount?: number;
  paymentPeriodType?: string | null;
  externalPaymentId?: string | null;
  payerId?: string | null;
  status?: string | null;
  editionDisplayName?: string | null;

  /** @format int32 */
  tenantId?: number;
  invoiceNo?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format int64 */
  lastModifierUserId?: number | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  creatorUserId?: number | null;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfSubscriptionPaymentListDto {
  /** @format int32 */
  totalCount?: number;
  items?: SubscriptionPaymentListDto[] | null;
}

export interface PaymentGatewayModel {
  gatewayType?: SubscriptionPaymentGatewayType;
  supportsRecurringPayments?: boolean;
}

/**
 * @format int32
 */
export enum SubscriptionPaymentStatus {
  NotPaid = 1,
  Paid = 2,
  Failed = 3,
  Cancelled = 4,
  Completed = 5,
}

export interface SubscriptionPaymentDto {
  description?: string | null;
  gateway?: SubscriptionPaymentGatewayType;

  /** @format double */
  amount?: number;

  /** @format int32 */
  editionId?: number;

  /** @format int32 */
  tenantId?: number;

  /** @format int32 */
  dayCount?: number;
  paymentPeriodType?: PaymentPeriodType;
  paymentId?: string | null;
  payerId?: string | null;
  editionDisplayName?: string | null;

  /** @format int64 */
  invoiceNo?: number;
  status?: SubscriptionPaymentStatus;
  isRecurring?: boolean;
  externalPaymentId?: string | null;
  successUrl?: string | null;
  errorUrl?: string | null;
  editionPaymentType?: EditionPaymentType;

  /** @format int64 */
  id?: number;
}

export interface PayPalConfigurationDto {
  clientId?: string | null;
  demoUsername?: string | null;
  demoPassword?: string | null;
}

export interface FlatPermissionWithLevelDto {
  /** @format int32 */
  level?: number;
  parentName?: string | null;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  isGrantedByDefault?: boolean;
}

export interface ListResultDtoOfFlatPermissionWithLevelDto {
  items?: FlatPermissionWithLevelDto[] | null;
}

export interface PlanEditDto {
  /** @format int32 */
  id?: number | null;
  title: string;
  description?: string | null;

  /** @format date-span */
  duration?: string;

  /** @format double */
  price?: number;
}

export interface CreateOrUpdatePlanInput {
  plan: PlanEditDto;
}

export interface GetPlanForEditOutput {
  plan?: PlanEditDto;
}

export interface PlanListDto {
  title?: string | null;

  /** @format date-span */
  duration?: string;

  /** @format double */
  price?: number;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfPlanListDto {
  /** @format int32 */
  totalCount?: number;
  items?: PlanListDto[] | null;
}

/**
 * @format int32
 */
export enum ProductOrderType {
  Subscribable = 0,
  NonSubscribable = 1,
}

/**
 * @format int32
 */
export enum ProductGroup {
  Other = 0,
  Bike = 10,
}

/**
 * @format int32
 */
export enum ProductState {
  UnPublished = 0,
  Published = 10,
}

export interface ProductEditDto {
  /** @format int32 */
  id?: number | null;
  title: string;

  /** @format date-span */
  deliveryTime?: string;
  orderType?: ProductOrderType;
  group?: ProductGroup;
  state?: ProductState;
}

export interface CreateOrUpdateProductInput {
  product: ProductEditDto;
}

export interface AssignPlanToProductInput {
  /** @format int32 */
  productId?: number;

  /** @format int32 */
  planId?: number;
}

export interface ProductImageDto {
  /** @format int32 */
  productId?: number;
  imageSrc?: string | null;

  /** @format int32 */
  postition?: number;

  /** @format int32 */
  id?: number;
}

export interface ProductAttributeDto {
  /** @format int32 */
  productId?: number;
  attribute?: AttributeDto;

  /** @format int32 */
  attributeId?: number;
  value?: string | null;
}

export interface GetProductForEditOutput {
  product?: ProductEditDto;
}

export interface EntityDto {
  /** @format int32 */
  id?: number;
}

export interface ProductListDto {
  title?: string | null;

  /** @format date-span */
  deliveryTime?: string;
  orderType?: ProductOrderType;
  group?: ProductGroup;
  state?: ProductState;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfProductListDto {
  /** @format int32 */
  totalCount?: number;
  items?: ProductListDto[] | null;
}

export interface PagedResultDtoOfProductImageDto {
  /** @format int32 */
  totalCount?: number;
  items?: ProductImageDto[] | null;
}

export interface PagedResultDtoOfProductAttributeDto {
  /** @format int32 */
  totalCount?: number;
  items?: ProductAttributeDto[] | null;
}

export interface CurrentUserProfileEditDto {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  phoneNumber?: string | null;
  isPhoneNumberConfirmed?: boolean;
  timezone?: string | null;
  qrCodeSetupImageUrl?: string | null;
  isGoogleAuthenticatorEnabled?: boolean;
}

export interface UpdateGoogleAuthenticatorKeyOutput {
  qrCodeSetupImageUrl?: string | null;
}

export interface SendVerificationSmsInputDto {
  phoneNumber?: string | null;
}

export interface VerifySmsCodeInputDto {
  code?: string | null;
  phoneNumber?: string | null;
}

export interface ChangePasswordInput {
  currentPassword: string;
  newPassword: string;
}

export interface UpdateProfilePictureInput {
  fileToken?: string | null;

  /** @format int32 */
  x?: number;

  /** @format int32 */
  y?: number;

  /** @format int32 */
  width?: number;

  /** @format int32 */
  height?: number;
  useGravatarProfilePicture?: boolean;
}

export interface GetPasswordComplexitySettingOutput {
  setting?: PasswordComplexitySetting;
}

export interface GetProfilePictureOutput {
  profilePicture?: string | null;
}

export interface ChangeUserLanguageDto {
  languageName: string;
}

export interface GetRolesInput {
  permissions?: string[] | null;
}

export interface RoleListDto {
  name?: string | null;
  displayName?: string | null;
  isStatic?: boolean;
  isDefault?: boolean;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  id?: number;
}

export interface ListResultDtoOfRoleListDto {
  items?: RoleListDto[] | null;
}

export interface RoleEditDto {
  /** @format int32 */
  id?: number | null;
  displayName: string;
  isDefault?: boolean;
}

export interface FlatPermissionDto {
  parentName?: string | null;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  isGrantedByDefault?: boolean;
}

export interface GetRoleForEditOutput {
  role?: RoleEditDto;
  permissions?: FlatPermissionDto[] | null;
  grantedPermissionNames?: string[] | null;
}

export interface CreateOrUpdateRoleInput {
  role: RoleEditDto;
  grantedPermissionNames: string[];
}

export interface UserLoginInfoDto {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  emailAddress?: string | null;
  profilePictureId?: string | null;

  /** @format int64 */
  id?: number;
}

/**
 * @format int32
 */
export enum SubscriptionPaymentType {
  Manual = 0,
  RecurringAutomatic = 1,
  RecurringManual = 2,
}

export interface EditionInfoDto {
  displayName?: string | null;

  /** @format int32 */
  trialDayCount?: number | null;

  /** @format double */
  monthlyPrice?: number | null;

  /** @format double */
  annualPrice?: number | null;
  isHighestEdition?: boolean;
  isFree?: boolean;

  /** @format int32 */
  id?: number;
}

export interface TenantLoginInfoDto {
  tenancyName?: string | null;
  name?: string | null;

  /** @format uuid */
  logoId?: string | null;
  logoFileType?: string | null;

  /** @format uuid */
  customCssId?: string | null;

  /** @format date-time */
  subscriptionEndDateUtc?: string | null;
  isInTrialPeriod?: boolean;
  subscriptionPaymentType?: SubscriptionPaymentType;
  edition?: EditionInfoDto;

  /** @format date-time */
  creationTime?: string;
  paymentPeriodType?: PaymentPeriodType;
  subscriptionDateString?: string | null;
  creationTimeString?: string | null;

  /** @format int32 */
  id?: number;
}

export interface ApplicationInfoDto {
  version?: string | null;

  /** @format date-time */
  releaseDate?: string;
  currency?: string | null;
  currencySign?: string | null;
  allowTenantsToChangeEmailSettings?: boolean;
  userDelegationIsEnabled?: boolean;
  features?: Record<string, boolean>;
}

export interface ThemeLayoutSettingsDto {
  layoutType?: string | null;
}

export interface ThemeHeaderSettingsDto {
  desktopFixedHeader?: boolean;
  mobileFixedHeader?: boolean;
  headerSkin?: string | null;
  minimizeDesktopHeaderType?: string | null;
}

export interface ThemeSubHeaderSettingsDto {
  fixedSubHeader?: boolean;
  subheaderStyle?: string | null;

  /** @format int32 */
  subheaderSize?: number;
  titleStlye?: string | null;
  containerStyle?: string | null;
}

export interface ThemeMenuSettingsDto {
  position?: string | null;
  asideSkin?: string | null;
  fixedAside?: boolean;
  allowAsideMinimizing?: boolean;
  defaultMinimizedAside?: boolean;
  submenuToggle?: string | null;
  searchActive?: boolean;
  enableSecondary?: boolean;
  hoverableAside?: boolean;
}

export interface ThemeFooterSettingsDto {
  fixedFooter?: boolean;
}

export interface ThemeSettingsDto {
  theme?: string | null;
  layout?: ThemeLayoutSettingsDto;
  header?: ThemeHeaderSettingsDto;
  subHeader?: ThemeSubHeaderSettingsDto;
  menu?: ThemeMenuSettingsDto;
  footer?: ThemeFooterSettingsDto;
}

export interface UiCustomizationSettingsDto {
  baseSettings?: ThemeSettingsDto;
  isLeftMenuUsed?: boolean;
  isTopMenuUsed?: boolean;
  isTabMenuUsed?: boolean;
  allowMenuScroll?: boolean;
}

export interface GetCurrentLoginInformationsOutput {
  user?: UserLoginInfoDto;
  impersonatorUser?: UserLoginInfoDto;
  tenant?: TenantLoginInfoDto;
  impersonatorTenant?: TenantLoginInfoDto;
  application?: ApplicationInfoDto;
  theme?: UiCustomizationSettingsDto;
}

export interface UpdateUserSignInTokenOutput {
  signInToken?: string | null;
  encodedUserId?: string | null;
  encodedTenantId?: string | null;
}

export interface StripeConfigurationDto {
  publishableKey?: string | null;
}

export interface StripeCreatePaymentSessionInput {
  /** @format int64 */
  paymentId?: number;
  successUrl?: string | null;
  cancelUrl?: string | null;
}

export interface StripePaymentResultOutput {
  paymentDone?: boolean;
}

export interface TenantListDto {
  tenancyName?: string | null;
  name?: string | null;
  editionDisplayName?: string | null;
  connectionString?: string | null;
  isActive?: boolean;

  /** @format date-time */
  creationTime?: string;

  /** @format date-time */
  subscriptionEndDateUtc?: string | null;

  /** @format int32 */
  editionId?: number | null;
  isInTrialPeriod?: boolean;

  /** @format int32 */
  id?: number;
}

export interface PagedResultDtoOfTenantListDto {
  /** @format int32 */
  totalCount?: number;
  items?: TenantListDto[] | null;
}

export interface CreateTenantInput {
  /** @pattern ^[a-zA-Z][a-zA-Z0-9_-]{1,}$ */
  tenancyName: string;
  name: string;

  /** @format email */
  adminEmailAddress: string;
  adminPassword?: string | null;
  connectionString?: string | null;
  shouldChangePasswordOnNextLogin?: boolean;
  sendActivationEmail?: boolean;

  /** @format int32 */
  editionId?: number | null;
  isActive?: boolean;

  /** @format date-time */
  subscriptionEndDateUtc?: string | null;
  isInTrialPeriod?: boolean;
}

export interface TenantEditDto {
  tenancyName: string;
  name: string;
  connectionString?: string | null;

  /** @format int32 */
  editionId?: number | null;
  isActive?: boolean;

  /** @format date-time */
  subscriptionEndDateUtc?: string | null;
  isInTrialPeriod?: boolean;

  /** @format int32 */
  id?: number;
}

export interface GetTenantFeaturesEditOutput {
  featureValues?: NameValueDto[] | null;
  features?: FlatFeatureDto[] | null;
}

export interface UpdateTenantFeaturesInput {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id?: number;
  featureValues: NameValueDto[];
}

export interface MemberActivity {
  name?: string | null;
  earnings?: string | null;

  /** @format int32 */
  cases?: number;

  /** @format int32 */
  closed?: number;
  rate?: string | null;
}

export interface GetMemberActivityOutput {
  memberActivities?: MemberActivity[] | null;
}

/**
 * @format int32
 */
export enum SalesSummaryDatePeriod {
  Daily = 1,
  Weekly = 2,
  Monthly = 3,
}

export interface SalesSummaryData {
  period?: string | null;

  /** @format int32 */
  sales?: number;

  /** @format int32 */
  profit?: number;
}

export interface GetDashboardDataOutput {
  /** @format int32 */
  totalProfit?: number;

  /** @format int32 */
  newFeedbacks?: number;

  /** @format int32 */
  newOrders?: number;

  /** @format int32 */
  newUsers?: number;
  salesSummary?: SalesSummaryData[] | null;

  /** @format int32 */
  totalSales?: number;

  /** @format int32 */
  revenue?: number;

  /** @format int32 */
  expenses?: number;

  /** @format int32 */
  growth?: number;

  /** @format int32 */
  transactionPercent?: number;

  /** @format int32 */
  newVisitPercent?: number;

  /** @format int32 */
  bouncePercent?: number;
  dailySales?: number[] | null;
  profitShares?: number[] | null;
}

export interface GetTopStatsOutput {
  /** @format int32 */
  totalProfit?: number;

  /** @format int32 */
  newFeedbacks?: number;

  /** @format int32 */
  newOrders?: number;

  /** @format int32 */
  newUsers?: number;
}

export interface GetProfitShareOutput {
  profitShares?: number[] | null;
}

export interface GetDailySalesOutput {
  dailySales?: number[] | null;
}

export interface GetSalesSummaryOutput {
  /** @format int32 */
  totalSales?: number;

  /** @format int32 */
  revenue?: number;

  /** @format int32 */
  expenses?: number;

  /** @format int32 */
  growth?: number;
  salesSummary?: SalesSummaryData[] | null;
}

export interface RegionalStatCountry {
  countryName?: string | null;

  /** @format double */
  sales?: number;
  change?: number[] | null;

  /** @format double */
  averagePrice?: number;

  /** @format double */
  totalPrice?: number;
}

export interface GetRegionalStatsOutput {
  stats?: RegionalStatCountry[] | null;
}

export interface GetGeneralStatsOutput {
  /** @format int32 */
  transactionPercent?: number;

  /** @format int32 */
  newVisitPercent?: number;

  /** @format int32 */
  bouncePercent?: number;
}

/**
 * @format int32
 */
export enum SubscriptionStartType {
  Free = 1,
  Trial = 2,
  Paid = 3,
}

export interface RegisterTenantInput {
  tenancyName: string;
  name: string;

  /** @format email */
  adminEmailAddress: string;
  adminPassword?: string | null;
  captchaResponse?: string | null;
  subscriptionStartType?: SubscriptionStartType;

  /** @format int32 */
  editionId?: number | null;
}

export interface RegisterTenantOutput {
  /** @format int32 */
  tenantId?: number;
  tenancyName?: string | null;
  name?: string | null;
  userName?: string | null;
  emailAddress?: string | null;
  isTenantActive?: boolean;
  isActive?: boolean;
  isEmailConfirmationRequired?: boolean;
}

export interface FlatFeatureSelectDto {
  parentName?: string | null;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  defaultValue?: string | null;
  inputType?: IInputType;
  textHtmlColor?: string | null;
}

export interface EditionWithFeaturesDto {
  edition?: EditionSelectDto;
  featureValues?: NameValueDto[] | null;
}

export interface EditionsSelectOutput {
  allFeatures?: FlatFeatureSelectDto[] | null;
  editionsWithFeatures?: EditionWithFeaturesDto[] | null;
}

export interface TenantUserManagementSettingsEditDto {
  allowSelfRegistration?: boolean;
  isNewRegisteredUserActiveByDefault?: boolean;
  isEmailConfirmationRequiredForLogin?: boolean;
  useCaptchaOnRegistration?: boolean;
  useCaptchaOnLogin?: boolean;
  isCookieConsentEnabled?: boolean;
  isQuickThemeSelectEnabled?: boolean;
  allowUsingGravatarProfilePicture?: boolean;
  sessionTimeOutSettings?: SessionTimeOutSettingsEditDto;
}

export interface TenantEmailSettingsEditDto {
  useHostDefaultEmailSettings?: boolean;
  defaultFromAddress?: string | null;
  defaultFromDisplayName?: string | null;
  smtpHost?: string | null;

  /** @format int32 */
  smtpPort?: number;
  smtpUserName?: string | null;
  smtpPassword?: string | null;
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
}

export interface LdapSettingsEditDto {
  isModuleEnabled?: boolean;
  isEnabled?: boolean;
  domain?: string | null;
  userName?: string | null;
  password?: string | null;
}

export interface TenantBillingSettingsEditDto {
  legalName?: string | null;
  address?: string | null;
  taxVatNo?: string | null;
}

export interface TenantOtherSettingsEditDto {
  isQuickThemeSelectEnabled?: boolean;
}

export interface TenantSettingsEditDto {
  general?: GeneralSettingsEditDto;
  userManagement: TenantUserManagementSettingsEditDto;
  email?: TenantEmailSettingsEditDto;
  ldap?: LdapSettingsEditDto;
  security: SecuritySettingsEditDto;
  billing?: TenantBillingSettingsEditDto;
  otherSettings?: TenantOtherSettingsEditDto;
  externalLoginProviderSettings?: ExternalLoginProviderSettingsEditDto;
}

/**
 * @format int32
 */
export enum SettingScopes {
  Application = 1,
  Tenant = 2,
  User = 4,
  All = 7,
}

export interface ListResultDtoOfNameValueDto {
  items?: NameValueDto[] | null;
}

export interface AuthenticateModel {
  userNameOrEmailAddress: string;
  password: string;
  twoFactorVerificationCode?: string | null;
  rememberClient?: boolean;
  twoFactorRememberClientToken?: string | null;
  singleSignIn?: boolean | null;
  returnUrl?: string | null;
  captchaResponse?: string | null;
}

export interface AuthenticateResultModel {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
  shouldResetPassword?: boolean;
  passwordResetCode?: string | null;

  /** @format int64 */
  userId?: number;
  requiresTwoFactorVerification?: boolean;
  twoFactorAuthProviders?: string[] | null;
  twoFactorRememberClientToken?: string | null;
  returnUrl?: string | null;
  refreshToken?: string | null;

  /** @format int32 */
  refreshTokenExpireInSeconds?: number;
}

export interface RefreshTokenResult {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
}

export interface SendTwoFactorAuthCodeModel {
  /**
   * @format int64
   * @min 1
   */
  userId?: number;
  provider: string;
}

export interface ImpersonatedAuthenticateResultModel {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
}

export interface SwitchedAccountAuthenticateResultModel {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
}

export interface ExternalLoginProviderInfoModel {
  name?: string | null;
  clientId?: string | null;
  additionalParams?: Record<string, string>;
}

export interface ExternalAuthenticateModel {
  authProvider: string;
  providerKey: string;
  providerAccessCode: string;
  returnUrl?: string | null;
  singleSignIn?: boolean | null;
}

export interface ExternalAuthenticateResultModel {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;

  /** @format int32 */
  expireInSeconds?: number;
  waitingForActivation?: boolean;
  returnUrl?: string | null;
  refreshToken?: string | null;

  /** @format int32 */
  refreshTokenExpireInSeconds?: number;
}

export interface TwitterGetRequestTokenResponse {
  token?: string | null;
  secret?: string | null;
  confirmed?: boolean;
  redirectUrl?: string | null;
}

export interface TwitterGetAccessTokenResponse {
  accessToken?: string | null;
  accessTokenSecret?: string | null;
  userId?: string | null;
  userName?: string | null;
}

export interface GetUsersInput {
  filter?: string | null;
  permissions?: string[] | null;

  /** @format int32 */
  role?: number | null;
  onlyLockedUsers?: boolean;
  sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  maxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
}

export interface UserListRoleDto {
  /** @format int32 */
  roleId?: number;
  roleName?: string | null;
}

export interface UserListDto {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;

  /** @format uuid */
  profilePictureId?: string | null;
  isEmailConfirmed?: boolean;
  roles?: UserListRoleDto[] | null;
  isActive?: boolean;

  /** @format date-time */
  creationTime?: string;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfUserListDto {
  /** @format int32 */
  totalCount?: number;
  items?: UserListDto[] | null;
}

export type TypeDefinitionsString = string;

export interface UserEditDto {
  /** @format int64 */
  id?: number | null;
  name: string;
  surname: string;
  userName: string;

  /** @format email */
  emailAddress: string;
  phoneNumber?: string | null;
  password?: string | null;
  isActive?: boolean;
  shouldChangePasswordOnNextLogin?: boolean;
  isTwoFactorEnabled?: boolean;
  isLockoutEnabled?: boolean;
}

export interface UserRoleDto {
  /** @format int32 */
  roleId?: number;
  roleName?: string | null;
  roleDisplayName?: string | null;
  isAssigned?: boolean;
  inheritedFromOrganizationUnit?: boolean;
}

export interface GetUserForEditOutput {
  /** @format uuid */
  profilePictureId?: string | null;
  user?: UserEditDto;
  roles?: UserRoleDto[] | null;
  allOrganizationUnits?: OrganizationUnitDto[] | null;
  memberedOrganizationUnits?: string[] | null;
}

export interface GetUserPermissionsForEditOutput {
  permissions?: FlatPermissionDto[] | null;
  grantedPermissionNames?: string[] | null;
}

export interface EntityDtoOfInt64 {
  /** @format int64 */
  id?: number;
}

export interface UpdateUserPermissionsInput {
  /**
   * @format int64
   * @min 1
   * @max 2147483647
   */
  id?: number;
  grantedPermissionNames: string[];
}

export interface CreateOrUpdateUserInput {
  user: UserEditDto;
  assignedRoleNames: string[];
  sendActivationEmail?: boolean;
  setRandomPassword?: boolean;
  organizationUnits?: number[] | null;
}

export interface UserDelegationDto {
  username?: string | null;

  /** @format date-time */
  startTime?: string;

  /** @format date-time */
  endTime?: string;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfUserDelegationDto {
  /** @format int32 */
  totalCount?: number;
  items?: UserDelegationDto[] | null;
}

export interface CreateUserDelegationDto {
  /**
   * @format int64
   * @min 1
   */
  targetUserId: number;

  /** @format date-time */
  startTime: string;

  /** @format date-time */
  endTime: string;
}

export interface LinkToUserInput {
  tenancyName?: string | null;
  usernameOrEmailAddress: string;
  password: string;
}

export interface LinkedUserDto {
  /** @format int32 */
  tenantId?: number | null;
  tenancyName?: string | null;
  username?: string | null;

  /** @format int64 */
  id?: number;
}

export interface PagedResultDtoOfLinkedUserDto {
  /** @format int32 */
  totalCount?: number;
  items?: LinkedUserDto[] | null;
}

export interface ListResultDtoOfLinkedUserDto {
  items?: LinkedUserDto[] | null;
}

export interface UnlinkUserInput {
  /** @format int32 */
  tenantId?: number | null;

  /** @format int64 */
  userId?: number;
}

export interface UserLoginAttemptDto {
  tenancyName?: string | null;
  userNameOrEmail?: string | null;
  clientIpAddress?: string | null;
  clientName?: string | null;
  browserInfo?: string | null;
  result?: string | null;

  /** @format date-time */
  creationTime?: string;
}

export interface ListResultDtoOfUserLoginAttemptDto {
  items?: UserLoginAttemptDto[] | null;
}

export interface WebhookEvent {
  webhookName: string;
  data?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format int32 */
  tenantId?: number | null;
  isDeleted?: boolean;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format uuid */
  id?: string;
}

/**
 * @format int32
 */
export enum HttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,
  MultipleChoices = 300,
  Ambiguous = 301,
  MovedPermanently = 302,
  Moved = 303,
  Found = 304,
  Redirect = 305,
  SeeOther = 306,
  RedirectMethod = 307,
  NotModified = 308,
  UseProxy = 400,
  Unused = 401,
  TemporaryRedirect = 402,
  RedirectKeepVerb = 403,
  PermanentRedirect = 404,
  BadRequest = 405,
  Unauthorized = 406,
  PaymentRequired = 407,
  Forbidden = 408,
  NotFound = 409,
  MethodNotAllowed = 410,
  NotAcceptable = 411,
  ProxyAuthenticationRequired = 412,
  RequestTimeout = 413,
  Conflict = 414,
  Gone = 415,
  LengthRequired = 416,
  PreconditionFailed = 417,
  RequestEntityTooLarge = 421,
  RequestUriTooLong = 422,
  UnsupportedMediaType = 423,
  RequestedRangeNotSatisfiable = 424,
  ExpectationFailed = 426,
  MisdirectedRequest = 428,
  UnprocessableEntity = 429,
  Locked = 431,
  FailedDependency = 451,
  UpgradeRequired = 500,
  PreconditionRequired = 501,
  TooManyRequests = 502,
  RequestHeaderFieldsTooLarge = 503,
  UnavailableForLegalReasons = 504,
  InternalServerError = 505,
  NotImplemented = 506,
  BadGateway = 507,
  ServiceUnavailable = 508,
  GatewayTimeout = 510,
  HttpVersionNotSupported = 511,
  VariantAlsoNegotiates = "VariantAlsoNegotiates",
  InsufficientStorage = "InsufficientStorage",
  LoopDetected = "LoopDetected",
  NotExtended = "NotExtended",
  NetworkAuthenticationRequired = "NetworkAuthenticationRequired",
}

export interface GetAllSendAttemptsOutput {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  webhookEventId?: string;
  webhookName?: string | null;
  data?: string | null;
  response?: string | null;
  responseStatusCode?: HttpStatusCode;

  /** @format date-time */
  creationTime?: string;
}

export interface PagedResultDtoOfGetAllSendAttemptsOutput {
  /** @format int32 */
  totalCount?: number;
  items?: GetAllSendAttemptsOutput[] | null;
}

export interface GetAllSendAttemptsOfWebhookEventOutput {
  /** @format uuid */
  id?: string;
  webhookUri?: string | null;

  /** @format uuid */
  webhookSubscriptionId?: string;
  response?: string | null;
  responseStatusCode?: HttpStatusCode;

  /** @format date-time */
  creationTime?: string;

  /** @format date-time */
  lastModificationTime?: string | null;
}

export interface ListResultDtoOfGetAllSendAttemptsOfWebhookEventOutput {
  items?: GetAllSendAttemptsOfWebhookEventOutput[] | null;
}

export interface GetAllSubscriptionsOutput {
  webhookUri?: string | null;
  isActive?: boolean;
  webhooks?: string[] | null;

  /** @format uuid */
  id?: string;
}

export interface ListResultDtoOfGetAllSubscriptionsOutput {
  items?: GetAllSubscriptionsOutput[] | null;
}

export interface WebhookSubscription {
  /** @format int32 */
  tenantId?: number | null;
  webhookUri?: string | null;
  secret?: string | null;
  isActive?: boolean;
  webhooks?: string[] | null;
  headers?: Record<string, string>;

  /** @format uuid */
  id?: string;
}

export interface ActivateWebhookSubscriptionInput {
  /** @format uuid */
  subscriptionId?: string;
  isActive?: boolean;
}

export interface GetAllAvailableWebhooksOutput {
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
}

export interface ListResultDtoOfGetAllAvailableWebhooksOutput {
  items?: GetAllAvailableWebhooksOutput[] | null;
}

export interface GetLatestWebLogsOutput {
  latestWebLogLines?: string[] | null;
}

export interface ApiServicesAppAttributeGetattributesforselectionGetParams {
  /** @format int32 */
  ProductId?: number;
  SearchTerm?: string | null;
}

export interface ApiServicesAppAttributeGetGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppAttributeGetallGetParams {
  Filter?: string | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppAttributeDeleteDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppAuditlogGetauditlogsGetParams {
  /** @format date-time */
  StartDate?: string;

  /** @format date-time */
  EndDate?: string;
  UserName?: string | null;
  ServiceName?: string | null;
  MethodName?: string | null;
  BrowserInfo?: string | null;
  HasException?: boolean | null;

  /** @format int32 */
  MinExecutionDuration?: number | null;

  /** @format int32 */
  MaxExecutionDuration?: number | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppAuditlogGetauditlogstoexcelGetParams {
  /** @format date-time */
  StartDate?: string;

  /** @format date-time */
  EndDate?: string;
  UserName?: string | null;
  ServiceName?: string | null;
  MethodName?: string | null;
  BrowserInfo?: string | null;
  HasException?: boolean | null;

  /** @format int32 */
  MinExecutionDuration?: number | null;

  /** @format int32 */
  MaxExecutionDuration?: number | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppAuditlogGetentitychangesGetParams {
  /** @format date-time */
  StartDate?: string;

  /** @format date-time */
  EndDate?: string;
  UserName?: string | null;
  EntityTypeFullName?: string | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppAuditlogGetentitytypechangesGetParams {
  EntityTypeFullName?: string | null;
  EntityId?: string | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppAuditlogGetentitychangestoexcelGetParams {
  /** @format date-time */
  StartDate?: string;

  /** @format date-time */
  EndDate?: string;
  UserName?: string | null;
  EntityTypeFullName?: string | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppAuditlogGetentitypropertychangesGetParams {
  /** @format int64 */
  entityChangeId?: number;
}

export interface ApiServicesAppChatGetuserchatmessagesGetParams {
  /** @format int32 */
  TenantId?: number | null;

  /**
   * @format int64
   * @min 1
   */
  UserId?: number;

  /** @format int64 */
  MinMessageId?: number | null;
}

export interface ApiServicesAppCommonlookupGeteditionsforcomboboxGetParams {
  onlyFreeItems?: boolean;
}

export interface ApiServicesAppDashboardcustomizationGetuserdashboardGetParams {
  DashboardName?: string | null;
  Application?: string | null;
}

export interface ApiServicesAppDashboardcustomizationDeletepageDeleteParams {
  Id?: string | null;
  DashboardName?: string | null;
  Application?: string | null;
}

export interface ApiServicesAppDashboardcustomizationGetdashboarddefinitionGetParams {
  DashboardName?: string | null;
  Application?: string | null;
}

export interface ApiServicesAppDashboardcustomizationGetallwidgetdefinitionsGetParams {
  DashboardName?: string | null;
  Application?: string | null;
}

export interface ApiServicesAppDashboardcustomizationGetsettingnameGetParams {
  application?: string | null;
}

export interface ApiServicesAppDemouicomponentsSendandgetdatePostParams {
  /** @format date-time */
  date?: string | null;
}

export interface ApiServicesAppDemouicomponentsSendandgetdatetimePostParams {
  /** @format date-time */
  date?: string | null;
}

export interface ApiServicesAppDemouicomponentsSendandgetdaterangePostParams {
  /** @format date-time */
  startDate?: string | null;

  /** @format date-time */
  endDate?: string | null;
}

export interface ApiServicesAppDemouicomponentsGetcountriesGetParams {
  searchTerm?: string | null;
}

export interface ApiServicesAppDemouicomponentsSendandgetvaluePostParams {
  input?: string | null;
}

export interface ApiServicesAppDynamicentitypropertyGetGetParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppDynamicentitypropertyGetallpropertiesofanentityGetParams {
  EntityFullName?: string | null;
}

export interface ApiServicesAppDynamicentitypropertyDeleteDeleteParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppDynamicentitypropertyvalueGetGetParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppDynamicentitypropertyvalueGetallGetParams {
  EntityId?: string | null;

  /** @format int32 */
  PropertyId?: number;
}

export interface ApiServicesAppDynamicentitypropertyvalueDeleteDeleteParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppDynamicentitypropertyvalueGetalldynamicentitypropertyvaluesGetParams {
  EntityFullName: string;
  EntityId: string;
}

export interface ApiServicesAppDynamicpropertyGetGetParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppDynamicpropertyDeleteDeleteParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppDynamicpropertyFindallowedinputtypePostParams {
  name?: string | null;
}

export interface ApiServicesAppDynamicpropertyvalueGetGetParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppDynamicpropertyvalueGetallvaluesofdynamicpropertyGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppDynamicpropertyvalueDeleteDeleteParams {
  /** @format int32 */
  id?: number;
}

export interface ApiServicesAppEditionGeteditionforeditGetParams {
  /** @format int32 */
  Id?: number | null;
}

export interface ApiServicesAppEditionDeleteeditionDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppEditionGeteditioncomboboxitemsGetParams {
  /** @format int32 */
  selectedEditionId?: number | null;
  addAllItem?: boolean;
  onlyFreeItems?: boolean;
}

export interface ApiServicesAppEditionGettenantcountGetParams {
  /** @format int32 */
  editionId?: number;
}

export interface ApiServicesAppHostdashboardGettopstatsdataGetParams {
  /** @format date-time */
  StartDate?: string;

  /** @format date-time */
  EndDate?: string;
}

export interface ApiServicesAppHostdashboardGetincomestatisticsGetParams {
  IncomeStatisticsDateInterval: ChartDateInterval;

  /** @format date-time */
  StartDate?: string;

  /** @format date-time */
  EndDate?: string;
}

export interface ApiServicesAppHostdashboardGeteditiontenantstatisticsGetParams {
  /** @format date-time */
  StartDate?: string;

  /** @format date-time */
  EndDate?: string;
}

export interface ApiServicesAppInvoiceGetinvoiceinfoGetParams {
  /** @format int64 */
  Id?: number;
}

export interface ApiServicesAppLanguageGetlanguageforeditGetParams {
  /** @format int32 */
  Id?: number | null;
}

export interface ApiServicesAppLanguageDeletelanguageDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppLanguageGetlanguagetextsGetParams {
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  Sorting?: string | null;
  SourceName: string;
  BaseLanguageName?: string | null;
  TargetLanguageName: string;
  TargetValueFilter?: string | null;
  FilterText?: string | null;
}

export interface ApiServicesAppNotificationGetusernotificationsGetParams {
  State?: UserNotificationState;

  /** @format date-time */
  StartDate?: string | null;

  /** @format date-time */
  EndDate?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppNotificationDeletenotificationDeleteParams {
  /** @format uuid */
  Id?: string;
}

export interface ApiServicesAppNotificationDeleteallusernotificationsDeleteParams {
  State?: UserNotificationState;

  /** @format date-time */
  StartDate?: string | null;

  /** @format date-time */
  EndDate?: string | null;
}

export interface ApiServicesAppOrganizationunitGetorganizationunitusersGetParams {
  /**
   * @format int64
   * @min 1
   */
  Id?: number;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppOrganizationunitGetorganizationunitrolesGetParams {
  /**
   * @format int64
   * @min 1
   */
  Id?: number;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppOrganizationunitDeleteorganizationunitDeleteParams {
  /** @format int64 */
  Id?: number;
}

export interface ApiServicesAppOrganizationunitRemoveuserfromorganizationunitDeleteParams {
  /**
   * @format int64
   * @min 1
   */
  UserId?: number;

  /**
   * @format int64
   * @min 1
   */
  OrganizationUnitId?: number;
}

export interface ApiServicesAppOrganizationunitRemoverolefromorganizationunitDeleteParams {
  /**
   * @format int32
   * @min 1
   */
  RoleId?: number;

  /**
   * @format int64
   * @min 1
   */
  OrganizationUnitId?: number;
}

export interface ApiServicesAppPaymentGetpaymentinfoGetParams {
  /** @format int32 */
  UpgradeEditionId?: number | null;
}

export interface ApiServicesAppPaymentGetpaymenthistoryGetParams {
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppPaymentGetactivegatewaysGetParams {
  RecurringPaymentsEnabled?: boolean | null;
}

export interface ApiServicesAppPaymentGetpaymentGetParams {
  /** @format int64 */
  paymentId?: number;
}

export interface ApiServicesAppPaymentBuynowsucceedPostParams {
  /** @format int64 */
  paymentId?: number;
}

export interface ApiServicesAppPaymentNewregistrationsucceedPostParams {
  /** @format int64 */
  paymentId?: number;
}

export interface ApiServicesAppPaymentUpgradesucceedPostParams {
  /** @format int64 */
  paymentId?: number;
}

export interface ApiServicesAppPaymentExtendsucceedPostParams {
  /** @format int64 */
  paymentId?: number;
}

export interface ApiServicesAppPaymentPaymentfailedPostParams {
  /** @format int64 */
  paymentId?: number;
}

export interface ApiServicesAppPaymentSwitchbetweenfreeeditionsPostParams {
  /** @format int32 */
  upgradeEditionId?: number;
}

export interface ApiServicesAppPaymentUpgradesubscriptioncostslessthenminamountPostParams {
  /** @format int32 */
  editionId?: number;
}

export interface ApiServicesAppPaypalpaymentConfirmpaymentPostParams {
  /** @format int64 */
  paymentId?: number;
  paypalOrderId?: string | null;
}

export interface ApiServicesAppPlanDeleteplanDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppPlanGetplanforeditGetParams {
  /** @format int32 */
  Id?: number | null;
}

export interface ApiServicesAppPlanGetplansGetParams {
  Filter?: string | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppProductDeleteproductDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppProductDeleteproductplanDeleteParams {
  /** @format int32 */
  ProductId?: number;

  /** @format int32 */
  PlanId?: number;
}

export interface ApiServicesAppProductDeleteproductimageDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppProductDeleteproductattributeDeleteParams {
  /** @format int32 */
  ProductId?: number;

  /** @format int32 */
  AttributeId?: number;
}

export interface ApiServicesAppProductGetproductforeditGetParams {
  /** @format int32 */
  Id?: number | null;
}

export interface ApiServicesAppProductGetproductGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppProductGetproductsGetParams {
  Filter?: string | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppProductGetproductplansGetParams {
  /** @format int32 */
  ProductId?: number;
  Filter?: string | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppProductGetproductimagesGetParams {
  /** @format int32 */
  ProductId?: number;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppProductGetproductattributesGetParams {
  /** @format int32 */
  ProductId?: number;
  Filter?: string | null;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppProductGetproductattributeforeditGetParams {
  /** @format int32 */
  ProductId?: number;

  /** @format int32 */
  AttributeId?: number | null;
}

export interface ApiServicesAppProfileGetprofilepicturebyusernameGetParams {
  username?: string | null;
}

export interface ApiServicesAppProfileGetfriendprofilepictureGetParams {
  /** @format int64 */
  UserId?: number;

  /** @format int32 */
  TenantId?: number | null;
}

export interface ApiServicesAppProfileGetprofilepicturebyuserGetParams {
  /** @format int64 */
  userId?: number;
}

export interface ApiServicesAppRoleGetroleforeditGetParams {
  /** @format int32 */
  Id?: number | null;
}

export interface ApiServicesAppRoleDeleteroleDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppStripepaymentGetpaymentGetParams {
  StripeSessionId?: string | null;
}

export interface ApiServicesAppStripepaymentGetpaymentresultGetParams {
  /** @format int64 */
  PaymentId?: number;
}

export interface ApiServicesAppTenantGettenantsGetParams {
  Filter?: string | null;

  /** @format date-time */
  SubscriptionEndDateStart?: string | null;

  /** @format date-time */
  SubscriptionEndDateEnd?: string | null;

  /** @format date-time */
  CreationDateStart?: string | null;

  /** @format date-time */
  CreationDateEnd?: string | null;

  /** @format int32 */
  EditionId?: number | null;
  EditionIdSpecified?: boolean;
  Sorting?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppTenantGettenantforeditGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppTenantDeletetenantDeleteParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppTenantGettenantfeaturesforeditGetParams {
  /** @format int32 */
  Id?: number;
}

export interface ApiServicesAppTenantdashboardGetdashboarddataGetParams {
  SalesSummaryDatePeriod: SalesSummaryDatePeriod;
}

export interface ApiServicesAppTenantdashboardGetsalessummaryGetParams {
  SalesSummaryDatePeriod: SalesSummaryDatePeriod;
}

export interface ApiServicesAppTenantregistrationGeteditionGetParams {
  /** @format int32 */
  editionId?: number;
}

export interface ApiServicesAppTimingGettimezonesGetParams {
  DefaultTimezoneScope: SettingScopes;
}

export interface ApiServicesAppTimingGettimezonecomboboxitemsGetParams {
  SelectedTimezoneId?: string | null;
}

export interface ApiTokenauthRefreshtokenPostParams {
  refreshToken?: string | null;
}

export interface ApiTokenauthImpersonatedauthenticatePostParams {
  impersonationToken?: string | null;
}

export interface ApiTokenauthDelegatedimpersonatedauthenticatePostParams {
  /** @format int64 */
  userDelegationId?: number;
  impersonationToken?: string | null;
}

export interface ApiTokenauthLinkedaccountauthenticatePostParams {
  switchAccountToken?: string | null;
}

export interface ApiTokenauthTestnotificationGetParams {
  message?: string | null;
  severity?: string | null;
}

export interface ApiTwitterGetaccesstokenPostParams {
  token?: string | null;
  verifier?: string | null;
}

export interface ApiServicesAppUicustomizationsettingsChangethemewithdefaultvaluesPostParams {
  themeName?: string | null;
}

export interface ApiServicesAppUserGetuserstoexcelGetParams {
  Filter?: string | null;
  Permissions?: string[] | null;

  /** @format int32 */
  Role?: number | null;
  OnlyLockedUsers?: boolean;
  Sorting?: string | null;
}

export interface ApiServicesAppUserGetuserforeditGetParams {
  /** @format int64 */
  Id?: number | null;
}

export interface ApiServicesAppUserGetuserpermissionsforeditGetParams {
  /** @format int64 */
  Id?: number;
}

export interface ApiServicesAppUserDeleteuserDeleteParams {
  /** @format int64 */
  Id?: number;
}

export interface ApiServicesAppUserdelegationGetdelegatedusersGetParams {
  /** @format int32 */
  MaxResultCount?: number;

  /** @format int32 */
  SkipCount?: number;
  Sorting?: string | null;
}

export interface ApiServicesAppUserdelegationRemovedelegationDeleteParams {
  /** @format int64 */
  Id?: number;
}

export interface ApiServicesAppUserlinkGetlinkedusersGetParams {
  /** @format int32 */
  MaxResultCount?: number;

  /** @format int32 */
  SkipCount?: number;
  Sorting?: string | null;
}

export interface ApiServicesAppWebhookeventGetGetParams {
  id?: string | null;
}

export interface ApiServicesAppWebhooksendattemptGetallsendattemptsGetParams {
  SubscriptionId?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 1000
   */
  MaxResultCount?: number;

  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
}

export interface ApiServicesAppWebhooksendattemptGetallsendattemptsofwebhookeventGetParams {
  Id?: string | null;
}

export interface ApiServicesAppWebhooksendattemptResendPostParams {
  sendAttemptId?: string | null;
}

export interface ApiServicesAppWebhooksubscriptionGetsubscriptionGetParams {
  subscriptionId?: string | null;
}

export interface ApiServicesAppWebhooksubscriptionIssubscribedPostParams {
  webhookName?: string | null;
}

export interface ApiServicesAppWebhooksubscriptionGetallsubscriptionsiffeaturesgrantedGetParams {
  webhookName?: string | null;
}
