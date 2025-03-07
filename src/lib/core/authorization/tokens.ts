import { getStorage } from '../storage/index.js';

import type { Token } from '../../services/auth/types.js';

function isValidToken(check: unknown): check is Token {
  const maybe = check as Token;
  return Boolean(maybe.token_type && maybe.access_token);
}

/**
 * Obtain the token string for the given scope.
 * @param scope The scope string that will be used to look up the token.
 * @returns The token string for the given scope or null if no token is found.
 * @deprecated Use an `AuthorizationManager` instance to manage tokens.
 */
export function getTokenForScope(scope: string) {
  const storageValue = getStorage().get(scope);
  const token = storageValue ? JSON.parse(storageValue) : null;
  if (!token || !isValidToken(token)) {
    return null;
  }
  return `${token.token_type} ${token.access_token}`;
}
