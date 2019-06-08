declare module 'app/businessObjects' {

  /**
   * Feedback object
   */
  interface IFeedback {
    id: string
    nickname: string
    eventDate: string
    whatLikesMore: number
    overallSatisfaction: number
  }

  /**
   * Provides Dictionary Item
   */
  interface IDictionaryItem {
    key: number | string
    value: string
  }
}
