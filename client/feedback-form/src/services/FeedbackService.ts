import { IFeedback } from "app/businessObjects";
import { IFeedbackRequest } from "app/dto";

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
    return Promise.resolve([
      {
        id: '1',
        nickname: 'Mike',
        eventDate: new Date().toISOString(),
        whatLikesMore: 1,
        overallSatisfaction: 5
      },
      {
        id: '2',
        nickname: 'Adam',
        eventDate: new Date().toISOString(),
        whatLikesMore: 2,
        overallSatisfaction: 4
      }
    ]);
  }

  /**
   * Saves a feedback to the server
   * @param request feedback info
   */
  public createFeedback(request: IFeedbackRequest): Promise<void> {
    return Promise.resolve();
  }
}
