using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using FeedbackForm.Feedbacks.Repositories;
using Newtonsoft.Json.Linq;
using Npgsql;

namespace FeedbackForm.PostgreRepository
{
    /// <summary>
    /// Feedback repository implementation for Postgres
    /// </summary>
    public class FeedbackRepository: IFeedbackRepository
    {
        private readonly string _connectionString;

        public FeedbackRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        /// <summary>
        /// Creates the feedback.
        /// </summary>
        /// <returns>The feedback.</returns>
        /// <param name="json">Json.</param>
        public async Task CreateFeedback(string json)
        {
            // Small level of abstraction - If the app will be bigger we should make queries
            // with reusable code.
            using (var connection = new NpgsqlConnection(_connectionString))
            using (var command = connection.CreateCommand())
            {
                command.CommandText =
                     @"INSERT INTO feedbacks
                       VALUES (@Feedback)";

                var parameter = command.CreateParameter();
                parameter.NpgsqlDbType = NpgsqlTypes.NpgsqlDbType.Json;
                parameter.ParameterName = "Feedback";
                parameter.Value = json;

                command.Parameters.Add(parameter);

                await connection.OpenAsync();
                await command.ExecuteNonQueryAsync();
            }
        }

        /// <summary>
        /// Gets all feedbacks.
        /// </summary>
        /// <returns>The all feedbacks.</returns>
        public async Task<IEnumerable> GetAllFeedbacks()
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            using (var command = connection.CreateCommand())
            {
                command.CommandText = "SELECT * FROM feedbacks";

                await connection.OpenAsync();
                var reader = await command.ExecuteReaderAsync();

                var result = new List<JObject>();

                while(reader.Read())
                {
                    var id = reader["id"].ToString();
                    var json = reader["json_data"].ToString();
                    var jObject = JObject.Parse(json);
                    jObject.Add("id", id);

                    result.Add(jObject);
                }

                return result;
            }
        }
    }
}
