using System;
using System.Collections;
using System.Threading.Tasks;
using FeedbackForm.Feedbacks.Repositories;
using FeedbackForm.Logging;
using FeedbackForm.Services.Responses;

namespace FeedbackForm.Feedbacks.Services
{
    /// <summary>
    /// Service to work with Feedback objects
    /// </summary>
    public class FeedbackService
    {
        private readonly IFeedbackRepository _feedbackRepository;
        private readonly IAppLogger _logger;

        public FeedbackService(IFeedbackRepository feedbackRepository, IAppLogger logger)
        {
            _feedbackRepository = feedbackRepository;
            _logger = logger;
        }

        /// <summary>
        /// Gets all feedbacks.
        /// </summary>
        public async Task<ServiceResponse<IEnumerable>> GetAllFeedbacks()
        {
            // Note that in a real life application we should catch at the same level, where
            // Possible exception can be thrown. So we should implement a class which will
            // give you Success/Failure indicator and data/message instead of catching
            // all exceptions here
            try
            {
                var feedbacks = await _feedbackRepository.GetAllFeedbacks();
                return ServiceResponse.Ok(feedbacks);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Caught an error when tried to get all feedbacks");
                return ServiceResponse.ServerError<IEnumerable>();
            }

        }

        /// <summary>
        /// Creates the feedback.
        /// </summary>
        public async Task<ServiceResponse> CreateFeedback(string json)
        {
            // Note that I didn't care about idempotency but in a real life applicaton we should!
            try
            {
                await _feedbackRepository.CreateFeedback(json);
                return ServiceResponse.Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Caught an error when tried to create feedback");
                return ServiceResponse.ServerError();
            }

        }
    }
}
