import { stringifyParameters } from '../core/url.js';
import { ENVIRONMENTS } from '../core/global.js';

import type { FetchOverrides } from '../core/fetch.js';

export interface JSONFetchResponse<Res> extends Response {
  json(): Promise<Res>;
}

export type SDKOptions = {
  environment?: (typeof ENVIRONMENTS)[keyof typeof ENVIRONMENTS];
  fetch?: {
    options: FetchOverrides;
  };
};

/**
 * This isn't used yet, but might be one day.
 * @private
 * @experimental
 */
export type ServiceMethodResponse = {
  /**
   * The raw response from the upstream service.
   */
  _raw: Record<string, Record<string, unknown>>;
  /**
   * Information we deem worthwhile to augment responses with.
   * - Timing information, debug information, etc.
   */
  _metadata: Record<string, unknown>;
  data: Record<string, unknown>;
};

/**
 * Our `stringifyParameters` function defines what types of query parameters
 * can actually be serialized as part of the URL.
 */
type UnknownQueryParameters = Parameters<typeof stringifyParameters>[0];

export type Headers = Record<string, string>;

export type BaseServiceMethodOptions = {
  /**
   * Query parmeters to send with the request.
   */
  query?: UnknownQueryParameters;
  /**
   * The body of the request.
   */
  payload?: Record<string, unknown>;
  /**
   * The headers to send with the request.
   */
  headers?: Headers;
};

/**
 * Our standard options type for service methods.
 */
export type ServiceMethodOptions = BaseServiceMethodOptions | undefined | never;

export type Segment = string | Record<string, string>;

export type ServiceMethod<O extends ServiceMethodOptions, R extends Response = Response> = (
  methodOptions?: O & {
    query?: BaseServiceMethodOptions['query'];
    headers?: BaseServiceMethodOptions['headers'];
  },
  sdkOptions?: SDKOptions,
) => Promise<R>;

export type ServiceMethodDynamicSegments<
  S extends Segment,
  O extends ServiceMethodOptions,
  R extends Response = Response,
> = (
  segments: S,
  methodOptions?: O & {
    query?: BaseServiceMethodOptions['query'];
    headers?: BaseServiceMethodOptions['headers'];
  },
  sdkOptions?: SDKOptions,
) => Promise<R>;
