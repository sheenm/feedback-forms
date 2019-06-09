import { Intent, Toaster } from '@blueprintjs/core';
import React, { useRef } from 'react';

export const NotificationContext = React.createContext({
  showError: (message: string): void => {
    throw new Error('Notification Context is not connected. Please connect it via <NotificationProvider>');
  },
  showInformation: (message: string): void => {
    throw new Error('Notification Context is not connected. Please connect it via <NotificationProvider>');
  },
  showSuccess: (message: string): void => {
    throw new Error('Notification Context is not connected. Please connect it via <NotificationProvider>');
  }
});

/**
 * Provides ability to Notify user via toasts
 */
export const NotificationProvider: React.FC = ({ children }) => {

  // tslint:disable-next-line: no-null-keyword React api-like null
  const toasterRef = useRef<Toaster>(null);

  const showError = (message: string) => {
    if (!toasterRef.current)
      return;

    toasterRef.current.show({
      message,
      intent: Intent.DANGER
    });
  };

  const showInformation = (message: string) => {
    if (!toasterRef.current)
      return;

    toasterRef.current.show({
      message,
      intent: Intent.PRIMARY
    });
  };

  const showSuccess = (message: string) => {
    if (!toasterRef.current)
      return;

    toasterRef.current.show({
      message,
      intent: Intent.SUCCESS
    });
  };

  return <NotificationContext.Provider value={{ showError, showInformation, showSuccess }}>
    <Toaster ref={toasterRef} />
    {children}
  </NotificationContext.Provider>;
};
