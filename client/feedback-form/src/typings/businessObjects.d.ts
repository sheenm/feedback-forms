declare module 'app/businessObjects' {

  /**
   * Feedback object
   */
  interface IFeedback {
    id: string
    nickname: string
    firstDateSaw: string
    whatLikesMore: string
    overallSatisfaction: string
  }

  /**
   * Provides Dictionary Item
   */
  interface IDictionaryItem {
    key: number | string
    value: string
  }
}
