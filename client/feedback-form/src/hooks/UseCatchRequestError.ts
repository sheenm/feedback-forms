import { NotificationContext } from 'components/providers/NotificationProvider';
import React from 'react';

/**
 * React hook which catches Request errors like 404 and returns result and error indicator
 * Its optimized and changes only when dependencies change
 */
export function useCatchRequestError<T, TArgs extends T[], TReturn>(method: (...parameters: TArgs) => Promise<TReturn>,
  dependencies?: unknown[]) {

  const { showError } = React.useContext(NotificationContext);

  return React.useMemo(() =>
    (...p: TArgs) => method(...p)
      .catch(async (response: Response | Error) => {
        if (response instanceof Error) {
          showError(response.message);
          throw response.message;
        }

        if (!response || !response.status) {
          throw new Error('You should not use this hook for non-request operations');
        }

        const notFoundStatusCode = 404;

        switch (response.status) {
          case notFoundStatusCode:
            showError('API Endpoint is not found');
            throw new Error('API Endpont is not found');
          default:
            const text = await response.text();
            showError(text);
            throw text;
        }
      })
    // Other deps doesn't matter
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , dependencies && [...dependencies]);
}
