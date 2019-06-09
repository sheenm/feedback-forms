using System.Collections;
using System.Threading.Tasks;

namespace FeedbackForm.Feedbacks.Repositories
{
    /// <summary>
    /// Grants Access to the repo for feedpacks
    /// </summary>
    public interface IFeedbackRepository
    {
        /// <summary>
        /// Gets all feedbacks from a repo
        /// </summary>
        /// <returns>The all feedbacks.</returns>
        Task<IEnumerable> GetAllFeedbacks();

        /// <summary>
        /// Creates the feedback in a repo
        /// </summary>
        /// <returns>The feedback.</returns>
        /// <param name="json">Json.</param>
        Task CreateFeedback(string json);
    }
}
