import { getRequiredScopes } from "../index";
import { serviceRequest } from "../../../services/shared";

import type { GCSServiceMethod } from "../index";
import type { JSONFetchResponse } from "../../types";

import type { operations } from "@globus/types/gcs-manager/api";

/**
 *
 * @see https://docs.globus.org/globus-connect-server/v5.4/api/openapi_Versioning/#getInfo
 */
export const info = function (
  configuration,
  options?,
  sdkOptions?
): Promise<
  JSONFetchResponse<
    operations["getInfo"]["responses"]["200"]["content"]["application/json"]
  >
> {
  return serviceRequest(
    {
      service: configuration,
      scope: getRequiredScopes(configuration),
      path: `/api/info`,
    },
    options,
    sdkOptions
  );
} satisfies GCSServiceMethod<{
  query?: never;
  payload?: never;
}>;
