import { createStorage } from "../../../core/storage";
import { endpoint } from "..";

import type { MirroredRequest } from "../../../../../mocks/handlers";

const GCS_HOST = "https://fa5e.bd7c.data.globus.org";

describe("gcs – endpoint", () => {
  createStorage("memory");
  test("get", async () => {
    const result = await endpoint.get({
      host: GCS_HOST,
      endpoint_id: "ac9cb54b-fc48-4824-b801-1388baf0a909",
    });
    const {
      req: { url, method, headers },
    } = (await result.json()) as unknown as MirroredRequest;
    expect({
      url,
      method,
      headers,
    }).toMatchInlineSnapshot(`
      {
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip,deflate",
          "connection": "close",
          "host": "fa5e.bd7c.data.globus.org",
          "user-agent": "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)",
        },
        "method": "GET",
        "url": "https://fa5e.bd7c.data.globus.org/api/endpoint",
      }
    `);
  });

  test("update", async () => {
    const result = await endpoint.update(
      {
        host: GCS_HOST,
        endpoint_id: "ac9cb54b-fc48-4824-b801-1388baf0a909",
      },
      {
        payload: {
          DATA_TYPE: "endpoint#1.0.0",
          display_name: "My First Endpoint",
        },
      }
    );
    const {
      req: { url, method, headers, json },
    } = (await result.json()) as unknown as MirroredRequest;
    expect({
      url,
      method,
      headers,
      json,
    }).toMatchInlineSnapshot(`
      {
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip,deflate",
          "connection": "close",
          "content-length": "65",
          "content-type": "application/json",
          "host": "fa5e.bd7c.data.globus.org",
          "user-agent": "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)",
        },
        "json": {
          "DATA_TYPE": "endpoint#1.0.0",
          "display_name": "My First Endpoint",
        },
        "method": "PUT",
        "url": "https://fa5e.bd7c.data.globus.org/api/endpoint",
      }
    `);
  });

  test("patch", async () => {
    const result = await endpoint.patch(
      {
        host: GCS_HOST,
        endpoint_id: "ac9cb54b-fc48-4824-b801-1388baf0a909",
      },
      {
        payload: {
          public: true,
        },
      }
    );
    const {
      req: { url, method, headers, json },
    } = (await result.json()) as unknown as MirroredRequest;
    expect({
      url,
      method,
      headers,
      json,
    }).toMatchInlineSnapshot(`
      {
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip,deflate",
          "connection": "close",
          "content-length": "15",
          "content-type": "application/json",
          "host": "fa5e.bd7c.data.globus.org",
          "user-agent": "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)",
        },
        "json": {
          "public": true,
        },
        "method": "PATCH",
        "url": "https://fa5e.bd7c.data.globus.org/api/endpoint",
      }
    `);
  });
});
