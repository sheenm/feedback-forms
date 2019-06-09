namespace FeedbackForm.Services.Responses
{
    /// <summary>
    /// Generic service response
    /// </summary>
    public class ServiceResponse<T>
    {
        public ResponseCodes Code { get;}

        public string Message { get; }

        public T Data { get; }

        internal ServiceResponse(ResponseCodes code, string message, T data)
        {
            Code = code;
            Message = message;
            Data = data;
        }

        public static implicit operator ServiceResponse<T>(T data)
        {
            return ServiceResponse.Ok(data);
        }

        public static implicit operator ServiceResponse<T>(string message)
        {
            return ServiceResponse.BadRequest<T>(message);
        }
    }
}
