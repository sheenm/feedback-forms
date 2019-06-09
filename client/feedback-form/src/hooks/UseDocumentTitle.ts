import { useEffect } from 'react';

/**
 * Sets document.title on initial mount
 * @param title title in browser
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
