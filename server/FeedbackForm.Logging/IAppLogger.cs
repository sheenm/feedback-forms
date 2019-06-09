using System;
namespace FeedbackForm.Logging
{
    /// <summary>
    /// App logger.
    /// Does not yet give you contract to all the methods (e.g. LogDebug) because 
    /// I did not need it yet for the app
    /// </summary>
    public interface IAppLogger
    {
        void LogError(Exception ex, string message);
    }
}
