using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using FeedbackForm.Services.Responses;

namespace FeedbackForm.Feedbacks.Services
{
    /// <summary>
    /// Service to work with Feedback objects
    /// </summary>
    public class FeedbackService : IFeedbackService
    {
        /// <summary>
        /// Gets all feedbacks.
        /// </summary>
        public async Task<ServiceResponse<IEnumerable>> GetAllFeedbacks()
        {
            // Temporary while did not implemented any logic
            await Task.CompletedTask;

            return new List<object>();
        }

        /// <summary>
        /// Creates the feedback.
        /// </summary>
        public Task<ServiceResponse> CreateFeedback(string json)
        {
            return Task.FromResult(
                ServiceResponse.Ok()
            );
        }
    }
}
