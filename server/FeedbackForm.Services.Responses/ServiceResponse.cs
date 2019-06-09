namespace FeedbackForm.Services.Responses
{
    /// <summary>
    /// Non-Generic Service Response
    /// </summary>
    public class ServiceResponse
    {
        /// <summary>
        /// Gets the code.
        /// </summary>
        /// <value>The code.</value>
        public ResponseCodes Code { get; }

        /// <summary>
        /// Gets the message.
        /// </summary>
        /// <value>The message.</value>
        public string Message { get; }

        private ServiceResponse(ResponseCodes code, string message)
        {
            Code = code;
            Message = message;
        }

        /// <summary>
        /// Returns Ok with Data
        /// </summary>
        /// <returns>The ok.</returns>
        /// <param name="data">Data.</param>
        public static ServiceResponse<T> Ok<T>(T data)
        {
            return new ServiceResponse<T>(
                ResponseCodes.Ok,
                "",
                data
            );
        }

        /// <summary>
        /// Returns Ok
        /// </summary>
        /// <returns>The ok.</returns>
        public static ServiceResponse Ok ()
        {
            return new ServiceResponse(
                ResponseCodes.Ok,
                ""
            );
        }

        /// <summary>
        /// Returns Bad Request with message
        /// </summary>
        /// <returns>The request.</returns>
        /// <param name="message">Message.</param>
        public static ServiceResponse<T> BadRequest<T>(string message)
        {
            return new ServiceResponse<T>(
                ResponseCodes.BadRequest,
                message,
                default
            );
        }

        /// <summary>
        /// Returns Bad Request
        /// </summary>
        /// <returns>The request.</returns>
        /// <param name="message">Message.</param>
        public static ServiceResponse BadRequest(string message)
        {
            return new ServiceResponse(
                ResponseCodes.BadRequest,
                message
            );
        }

        /// <summary>
        /// Converts string message to BadRequest
        /// </summary>
        /// <returns>The implicit.</returns>
        /// <param name="message">Message.</param>
        public static implicit operator ServiceResponse(string message)
        {
            return BadRequest(message);
        }
    }
}
