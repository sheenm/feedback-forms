namespace FeedbackForm.Services.Responses
{
    /// <summary>
    /// Response codes used by services
    /// </summary>
    public enum ResponseCodes
    {
        /// <summary>
        /// When response is unknown
        /// </summary>
        Unknown = 0,
        /// <summary>
        /// Request handled correctly
        /// </summary>
        Ok = 200,
        /// <summary>
        /// When request parameters were wrong
        /// </summary>
        BadRequest = 400,
        /// <summary>
        /// The server error.
        /// </summary>
        ServerError = 500,
    }
}
