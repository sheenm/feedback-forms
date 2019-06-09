import { IFeedback } from 'app/businessObjects';
import { IFeedbackRequest, IFeedbacksResponse } from 'app/dto';
import { apiEndpoints } from 'config.json';
import { overallSatisfactionDictionary } from 'dictionaries/OverallSatisfactionDictionary';
import { whatLikesMoreDictionary } from 'dictionaries/WhatLikesMoreDictionary';
import { sendGetRequest, sendPostRequest } from './Network';

/**
 * Service which gives you ability to make requests to API
 * This service is responsible for Feedbacks
 */
export class FeedbackService {

  /**
   * Returns All Feedbacks which users left
   * TODO: lazy loading, we don't have to load all at the same time!
   */
  public getAllFeedbacks(): Promise<IFeedback[]> {
    return sendGetRequest<IFeedbacksResponse[]>(apiEndpoints.feedbacks)
      .then(this.mapToBusinessObject);
  }

  /**
   * Saves a feedback to the server
   * @param request feedback info
   */
  public createFeedback(request: IFeedbackRequest): Promise<void> {
    return sendPostRequest(apiEndpoints.feedbacks, request);
  }

  private mapToBusinessObject(response: IFeedbacksResponse[] | undefined): IFeedback[] {
    if (response === undefined)
      return [];

    return response.map(x => ({
      ...x,
      whatLikesMore: whatLikesMoreDictionary.get(x.whatLikesMore) || '',
      overallSatisfaction: overallSatisfactionDictionary.get(x.overallSatisfaction) || ''
    }));
  }
}
