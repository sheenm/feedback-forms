import React from 'react';
import { DictionaryService } from 'services/DictionaryService';
import { FeedbackService } from 'services/FeedbackService';

/**
 * React context which contains Services to use in React
 * For now default implementation uses real services but
 * if you want to override it in tests fill free to provide
 * ServiceContext.Provider
 */
export const ServiceContext = React.createContext({
  dictionaryService: new DictionaryService(),
  feedbackService: new FeedbackService()
});
