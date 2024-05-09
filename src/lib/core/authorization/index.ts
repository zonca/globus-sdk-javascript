import {
  AuthorizationManager,
  type AuthorizationManagerConfiguration,
} from './AuthorizationManager.js';

/**
 * Create an instance of the AuthorizationManager.
 * @experimental
 */
export function create(configuration: AuthorizationManagerConfiguration) {
  return new AuthorizationManager(configuration);
}
