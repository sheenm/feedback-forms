using System;
using System.Diagnostics;

namespace FeedbackForm.Logging
{
    /// <summary>
    /// Logs to debug console
    /// For production we should implement other Logger or use adapter to NLog for example
    /// </summary>
    public class DebugLogger : IAppLogger
    {
        /// <summary>
        /// Logs the error.
        /// </summary>
        /// <param name="ex">Ex.</param>
        /// <param name="message">Message.</param>
        public void LogError(Exception ex, string message)
        {
            Debug.WriteLine(message);
            Debug.WriteLine(ex);
        }
    }
}
