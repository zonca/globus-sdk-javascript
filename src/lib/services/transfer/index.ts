/**
 * @description A wrapper around the Globus Transfer service.
 * @group Service
 * @see [Globus Transfer API Documentation](https://docs.globus.org/api/transfer/)
 * @module
 */
import * as TRANSFER from "./config.js";

/**
 * @private
 * @internal
 */
export const CONFIG = TRANSFER;

import { endpointSearch } from "./service/endpoint-search.js";
export { endpointSearch };
export * as fileOperations from "./service/file-operations.js";
export * as taskSubmission from "./service/task-submission.js";
export * as endpoint from "./service/endpoint.js";
