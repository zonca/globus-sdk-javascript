import { createStorage } from '../../../core/storage';
import { mirror } from '../../../../__mocks__/handlers';
import { oauth2 } from '../index';

describe('oauth2', () => {
  beforeEach(() => {
    createStorage('memory');
  });

  test('introspect', async () => {
    expect(() => {
      // @ts-expect-error This intentionally does not have a payload to test the error case.
      oauth2.token.introspect();
    }).toThrow();

    const {
      req: { url, method, headers, formData },
    } = await mirror(
      await oauth2.token.introspect({
        payload: {
          token: 'abc-def-ghi',
          include: 'session_info,identity_set',
        },
      }),
    );
    expect({
      url,
      method,
      headers,
      formData,
    }).toMatchSnapshot();
  });

  test('revoke', async () => {
    expect(() => {
      // @ts-expect-error This intentionally does not have a payload to test the error case.
      oauth2.token.revoke();
    }).toThrow();

    const {
      req: { url, method, headers, formData },
    } = await mirror(
      await oauth2.token.revoke({
        payload: {
          token: 'abc-def-ghi',
        },
      }),
    );
    expect({
      url,
      method,
      headers,
      formData,
    }).toMatchSnapshot();
  });

  test('validate', async () => {
    expect(() => {
      // @ts-expect-error This intentionally does not have a payload to test the error case.
      oauth2.token.validate();
    }).toThrow();

    const {
      req: { url, method, headers, formData },
    } = await mirror(
      await oauth2.token.validate({
        payload: {
          token: 'abc-def-ghi',
          client_id: 'my-client-id',
        },
      }),
    );
    expect({
      url,
      method,
      headers,
      formData,
    }).toMatchSnapshot();
  });
});
