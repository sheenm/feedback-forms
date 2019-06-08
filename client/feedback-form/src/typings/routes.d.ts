declare module 'app/routes' {
  /**
   * Represents static route object - everytime url is the same
   */
  interface IStaticRoute {
    /** template for Router */
    template: string
    /** url to redirect user. May be the same as template but not always! */
    url: string
  }

  /**
   * Represents dynamic route which url will differ based on props
   * @template T type of props which passed
   */
  interface IDynamicRoute<T extends Record<string | number, string | number>> {
    template: string
    getUrl: (props: T) => string
  }
}
