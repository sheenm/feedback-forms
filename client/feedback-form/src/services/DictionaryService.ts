import { IDictionaryItem } from "app/businessObjects";

/**
 * Service which gives you ability to make requests to API
 * This service provides values of Dictionaries
 */
export class DictionaryService {

  /**
   * Returns dictionary "What likes More"
   */
  public getWhatLikesMoreDictionary(): Promise<IDictionaryItem[]> {
    return Promise.resolve([
      {
        key: 1,
        value: 'Backend'
      },
      {
        key: 2,
        value: 'Frontend'
      }
    ]);
  }

  /**
   * Returns dictionary "Overall Satisfiement"
   */
  public getOverallSatisfiementDictionary(): Promise<IDictionaryItem[]> {
    return Promise.resolve([
      {
        key: 1,
        value: 'Bad'
      },
      {
        key: 2,
        value: 'Normal'
      },
      {
        key: 3,
        value: 'Good'
      }
    ]);
  }
}
