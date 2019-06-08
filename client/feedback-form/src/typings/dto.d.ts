declare module 'app/dto' {
  /**
   * Feedback Response
   */
  interface IFeedbacksResponse extends Omit<IFeedbackRequest, 'email' | 'isWantsReceiveNewsletter'> {
    id: string
  }

  /**
   * Request interface to send new feedback
   */
  interface IFeedbackRequest {
    nickname: string
    eventDate: Date
    email: string
    isWantsReceiveNewsletter: boolean
    whatLikesMore: number
    overallSatisfaction: number
  }

  /**
   * Provides Dictionary Item Response (server side enums)
   */
  interface IDictionaryItemResponse {
    key: number | string
    value: string
  }
}
