declare module 'app/businessObjects' {

  /**
   * Feedback object
   */
  interface IFeedback {
    nickname: string
    eventDate: string
    whatLikesMore: number
    overallSatisfaction: number
  }
}
