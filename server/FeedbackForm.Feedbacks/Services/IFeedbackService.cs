using System.Collections;
using System.Threading.Tasks;
using FeedbackForm.Services.Responses;

namespace FeedbackForm.Feedbacks.Services
{
	/// <summary>
	/// Service to work with feedback objects
	/// </summary>
	public interface IFeedbackService
    {
		/// <summary>
		/// Creates the feedback.
		/// </summary>
		/// <param name="json">Why json as object? because that was the task that
		/// 	the structure  of the object aren't handled by server and may change by client
		/// </param>
		/// <returns>The feedback.</returns>
		Task<ServiceResponse> CreateFeedback(object json);

        /// <summary>
        /// Gets all feedbacks.
        /// </summary>
        /// <returns>The all feedbacks.</returns>
        Task<ServiceResponse<IEnumerable>> GetAllFeedbacks();
    }
}