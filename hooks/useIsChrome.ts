import { useSyncExternalStore } from 'react';
import { browserName } from 'react-device-detect';

// The browser never changes while the page is open, so there is nothing to subscribe to.
const subscribe = () => () => {};

/**
 * Returns `true` when the visitor is using Google Chrome.
 *
 * While the page is pre-rendered on the server we can't know the browser,
 * so it returns `true` there and the real value once the page runs in the browser.
 */
export function useIsChrome(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => browserName === 'Chrome', // value in the browser
    () => true, // value during server pre-rendering
  );
}
