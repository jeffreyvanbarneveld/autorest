/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


/**
 * @class
 * Initializes a new instance of the StorageAccountCheckNameAvailabilityParameters class.
 * @constructor
 * @member {string} name
 * 
 * @member {string} [type]  Default value: 'Microsoft.Storage/storageAccounts'
 * .
 * 
 */
export interface StorageAccountCheckNameAvailabilityParameters {
  name: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityResult class.
 * @constructor
 * The CheckNameAvailability operation response.
 *
 * @member {boolean} [nameAvailable] Gets a boolean value that indicates
 * whether the name is available for you to use. If true, the name is
 * available. If false, the name has already been taken or invalid and cannot
 * be used.
 * 
 * @member {string} [reason] Gets the reason that a storage account name could
 * not be used. The Reason element is only returned if NameAvailable is
 * false. Possible values include: 'AccountNameInvalid', 'AlreadyExists'
 * 
 * @member {string} [message] Gets an error message explaining the Reason
 * value in more detail.
 * 
 */
export interface CheckNameAvailabilityResult {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [name] Resource name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {string} location Resource location
 * 
 * @member {object} [tags] Resource tags
 * 
 */
export interface Resource extends BaseResource {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the StorageAccountCreateParameters class.
 * @constructor
 * The parameters to provide for the account.
 *
 * @member {string} [accountType] Gets or sets the account type. Possible
 * values include: 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS',
 * 'Standard_RAGRS', 'Premium_LRS'
 * 
 */
export interface StorageAccountCreateParameters extends Resource {
  accountType?: string;
}

/**
 * @class
 * Initializes a new instance of the Endpoints class.
 * @constructor
 * The URIs that are used to perform a retrieval of a public blob, queue or
 * table object.
 *
 * @member {string} [blob] Gets the blob endpoint.
 * 
 * @member {string} [queue] Gets the queue endpoint.
 * 
 * @member {string} [table] Gets the table endpoint.
 * 
 * @member {object} [dummyEndPoint] Dummy EndPoint
 * 
 * @member {object} [fooPoint] Foo point
 * 
 * @member {object} [fooPoint.barPoint] Bar point
 * 
 * @member {object} [fooPoint.barPoint.recursivePoint] Recursive Endpoints
 * 
 */
export interface Endpoints {
  blob?: string;
  queue?: string;
  table?: string;
  dummyEndPoint?: Endpoints;
  fooPoint?: Foo;
}

/**
 * @class
 * Initializes a new instance of the Foo class.
 * @constructor
 * The URIs that are used to perform a retrieval of a public blob, queue or
 * table object.
 *
 * @member {object} [barPoint] Bar point
 * 
 * @member {object} [barPoint.recursivePoint] Recursive Endpoints
 * 
 * @member {string} [barPoint.recursivePoint.blob] Gets the blob endpoint.
 * 
 * @member {string} [barPoint.recursivePoint.queue] Gets the queue endpoint.
 * 
 * @member {string} [barPoint.recursivePoint.table] Gets the table endpoint.
 * 
 * @member {object} [barPoint.recursivePoint.dummyEndPoint] Dummy EndPoint
 * 
 * @member {object} [barPoint.recursivePoint.fooPoint] Foo point
 * 
 */
export interface Foo {
  barPoint?: Bar;
}

/**
 * @class
 * Initializes a new instance of the Bar class.
 * @constructor
 * The URIs that are used to perform a retrieval of a public blob, queue or
 * table object.
 *
 * @member {object} [recursivePoint] Recursive Endpoints
 * 
 * @member {string} [recursivePoint.blob] Gets the blob endpoint.
 * 
 * @member {string} [recursivePoint.queue] Gets the queue endpoint.
 * 
 * @member {string} [recursivePoint.table] Gets the table endpoint.
 * 
 * @member {object} [recursivePoint.dummyEndPoint] Dummy EndPoint
 * 
 * @member {object} [recursivePoint.fooPoint] Foo point
 * 
 * @member {object} [recursivePoint.fooPoint.barPoint] Bar point
 * 
 */
export interface Bar {
  recursivePoint?: Endpoints;
}

/**
 * @class
 * Initializes a new instance of the CustomDomain class.
 * @constructor
 * The custom domain assigned to this storage account. This can be set via
 * Update.
 *
 * @member {string} [name] Gets or sets the custom domain name. Name is the
 * CNAME source.
 * 
 * @member {boolean} [useSubDomain] Indicates whether indirect CName
 * validation is enabled. Default value is false. This should only be set on
 * updates
 * 
 */
export interface CustomDomain {
  name?: string;
  useSubDomain?: boolean;
}

/**
 * @class
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 * The storage account.
 *
 * @member {string} [provisioningState] Gets the status of the storage account
 * at the time the operation was called. Possible values include: 'Creating',
 * 'ResolvingDNS', 'Succeeded'
 * 
 * @member {string} [accountType] Gets the type of the storage account.
 * Possible values include: 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS',
 * 'Standard_RAGRS', 'Premium_LRS'
 * 
 * @member {object} [primaryEndpoints] Gets the URLs that are used to perform
 * a retrieval of a public blob, queue or table object.Note that StandardZRS
 * and PremiumLRS accounts only return the blob endpoint.
 * 
 * @member {string} [primaryEndpoints.blob] Gets the blob endpoint.
 * 
 * @member {string} [primaryEndpoints.queue] Gets the queue endpoint.
 * 
 * @member {string} [primaryEndpoints.table] Gets the table endpoint.
 * 
 * @member {object} [primaryEndpoints.dummyEndPoint] Dummy EndPoint
 * 
 * @member {object} [primaryEndpoints.fooPoint] Foo point
 * 
 * @member {object} [primaryEndpoints.fooPoint.barPoint] Bar point
 * 
 * @member {object} [primaryEndpoints.fooPoint.barPoint.recursivePoint]
 * Recursive Endpoints
 * 
 * @member {string} [primaryLocation] Gets the location of the primary for the
 * storage account.
 * 
 * @member {string} [statusOfPrimary] Gets the status indicating whether the
 * primary location of the storage account is available or unavailable.
 * Possible values include: 'Available', 'Unavailable'
 * 
 * @member {date} [lastGeoFailoverTime] Gets the timestamp of the most recent
 * instance of a failover to the secondary location. Only the most recent
 * timestamp is retained. This element is not returned if there has never
 * been a failover instance. Only available if the accountType is StandardGRS
 * or StandardRAGRS.
 * 
 * @member {string} [secondaryLocation] Gets the location of the geo
 * replicated secondary for the storage account. Only available if the
 * accountType is StandardGRS or StandardRAGRS.
 * 
 * @member {string} [statusOfSecondary] Gets the status indicating whether the
 * secondary location of the storage account is available or unavailable.
 * Only available if the accountType is StandardGRS or StandardRAGRS.
 * Possible values include: 'Available', 'Unavailable'
 * 
 * @member {date} [creationTime] Gets the creation date and time of the
 * storage account in UTC.
 * 
 * @member {object} [customDomain] Gets the user assigned custom domain
 * assigned to this storage account.
 * 
 * @member {string} [customDomain.name] Gets or sets the custom domain name.
 * Name is the CNAME source.
 * 
 * @member {boolean} [customDomain.useSubDomain] Indicates whether indirect
 * CName validation is enabled. Default value is false. This should only be
 * set on updates
 * 
 * @member {object} [secondaryEndpoints] Gets the URLs that are used to
 * perform a retrieval of a public blob, queue or table object from the
 * secondary location of the storage account. Only available if the
 * accountType is StandardRAGRS.
 * 
 * @member {string} [secondaryEndpoints.blob] Gets the blob endpoint.
 * 
 * @member {string} [secondaryEndpoints.queue] Gets the queue endpoint.
 * 
 * @member {string} [secondaryEndpoints.table] Gets the table endpoint.
 * 
 * @member {object} [secondaryEndpoints.dummyEndPoint] Dummy EndPoint
 * 
 * @member {object} [secondaryEndpoints.fooPoint] Foo point
 * 
 * @member {object} [secondaryEndpoints.fooPoint.barPoint] Bar point
 * 
 * @member {object} [secondaryEndpoints.fooPoint.barPoint.recursivePoint]
 * Recursive Endpoints
 * 
 */
export interface StorageAccount extends Resource {
  provisioningState?: string;
  accountType?: string;
  primaryEndpoints?: Endpoints;
  primaryLocation?: string;
  statusOfPrimary?: string;
  lastGeoFailoverTime?: Date;
  secondaryLocation?: string;
  statusOfSecondary?: string;
  creationTime?: Date;
  customDomain?: CustomDomain;
  secondaryEndpoints?: Endpoints;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountKeys class.
 * @constructor
 * The access keys for the storage account.
 *
 * @member {string} [key1] Gets the value of key 1.
 * 
 * @member {string} [key2] Gets the value of key 2.
 * 
 */
export interface StorageAccountKeys {
  key1?: string;
  key2?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountUpdateParameters class.
 * @constructor
 * The parameters to update on the account.
 *
 * @member {string} [accountType] Gets or sets the account type. Note that
 * StandardZRS and PremiumLRS accounts cannot be changed to other account
 * types, and other account types cannot be changed to StandardZRS or
 * PremiumLRS. Possible values include: 'Standard_LRS', 'Standard_ZRS',
 * 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS'
 * 
 * @member {object} [customDomain] User domain assigned to the storage
 * account. Name is the CNAME source. Only one custom domain is supported per
 * storage account at this time. To clear the existing custom domain, use an
 * empty string for the custom domain name property.
 * 
 * @member {string} [customDomain.name] Gets or sets the custom domain name.
 * Name is the CNAME source.
 * 
 * @member {boolean} [customDomain.useSubDomain] Indicates whether indirect
 * CName validation is enabled. Default value is false. This should only be
 * set on updates
 * 
 */
export interface StorageAccountUpdateParameters extends Resource {
  accountType?: string;
  customDomain?: CustomDomain;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountRegenerateKeyParameters class.
 * @constructor
 * @member {string} [keyName] Possible values include: 'key1', 'key2'
 * 
 */
export interface StorageAccountRegenerateKeyParameters {
  keyName?: string;
}

/**
 * @class
 * Initializes a new instance of the UsageName class.
 * @constructor
 * The Usage Names.
 *
 * @member {string} [value] Gets a string describing the resource name.
 * 
 * @member {string} [localizedValue] Gets a localized string describing the
 * resource name.
 * 
 */
export interface UsageName {
  value?: string;
  localizedValue?: string;
}

/**
 * @class
 * Initializes a new instance of the Usage class.
 * @constructor
 * Describes Storage Resource Usage.
 *
 * @member {string} [unit] Gets the unit of measurement. Possible values
 * include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond',
 * 'BytesPerSecond'
 * 
 * @member {number} [currentValue] Gets the current count of the allocated
 * resources in the subscription.
 * 
 * @member {number} [limit] Gets the maximum count of the resources that can
 * be allocated in the subscription.
 * 
 * @member {object} [name] Gets the name of the type of usage.
 * 
 * @member {string} [name.value] Gets a string describing the resource name.
 * 
 * @member {string} [name.localizedValue] Gets a localized string describing
 * the resource name.
 * 
 */
export interface Usage {
  unit?: string;
  currentValue?: number;
  limit?: number;
  name?: UsageName;
}

/**
 * @class
 * Initializes a new instance of the UsageListResult class.
 * @constructor
 * The List Usages operation response.
 *
 * @member {array} [value] Gets or sets the list Storage Resource Usages.
 * 
 */
export interface UsageListResult {
  value?: Usage[];
}

/**
 * @class
 * Initializes a new instance of the SubResource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 */
export interface SubResource extends BaseResource {
  id?: string;
}


/**
 * @class
 * Initializes a new instance of the StorageAccountListResult class.
 * @constructor
 * The list storage accounts operation response.
 *
 * @member {string} [nextLink] Gets the link to the next set of results.
 * Currently this will always be empty as the API does not support pagination.
 * 
 */
export interface StorageAccountListResult extends Array<StorageAccount> {
  nextLink?: string;
}