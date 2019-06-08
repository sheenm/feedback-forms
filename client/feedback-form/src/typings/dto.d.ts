declare module 'app/dto' {

  /**
   * text, drop-down, date, radio, check box.
   */
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
    eventDate: string
    email: string
    isWantsReceiveNewsletter: boolean
    whatLikesMore: number
    overallSatisfaction: number
  }
}
