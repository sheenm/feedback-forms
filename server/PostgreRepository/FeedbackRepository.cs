using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using FeedbackForm.Feedbacks.Repositories;

namespace PostgreRepository
{
    public class FeedbackRepository: IFeedbackRepository
    {
        private readonly string _connectionString;

        public FeedbackRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public Task CreateFeedback(string json)
        {
            return Task.CompletedTask;
        }

        public async Task<IEnumerable> GetAllFeedbacks()
        {
            await Task.CompletedTask;

            return new List<int>();
        }
    }
}
