using FeedbackForm.Services.Responses;
using Microsoft.AspNetCore.Mvc;

namespace FeedbackForm.AspNet.ServiceResponseMapping
{
    /// <summary>
    /// Service response extensions for mapping to AspNetCore Result
    /// </summary>
    public static class ServiceResponseExtensions
    {
        /// <summary>
        /// Maps Generic ServiceResponse to ASP net core result.
        /// </summary>
        /// <returns>The to ASP net core result.</returns>
        /// <param name="response">Response.</param>
        public static ActionResult MapToAspNetCoreResult(this ServiceResponse response)
        {
            switch (response.Code)
            {
                case ResponseCodes.Ok:
                    return new OkResult();
                case ResponseCodes.BadRequest:
                    return new BadRequestObjectResult(response.Message);
                default:
                    throw new ServiceResponseConvertException();
            }
        }

        /// <summary>
        /// Maps ServiceResponse to ASP net core result.
        /// </summary>
        /// <returns>The to ASP net core result.</returns>
        /// <param name="response">Response.</param>
        /// <typeparam name="T">The 1st type parameter.</typeparam>
        public static ActionResult MapToAspNetCoreResult<T>(this ServiceResponse<T> response)
        {
            switch (response.Code)
            {
                case ResponseCodes.Ok:
                    return new OkObjectResult(response.Data);
                case ResponseCodes.BadRequest:
                    return new BadRequestObjectResult(response.Message);
                default:
                    throw new ServiceResponseConvertException();
            }
        }
    }
}
