using System;

namespace FeedbackForm.AspNet.ServiceResponseMapping
{
    /// <summary>
    /// Service response convert exception.
    /// When trying to map ServiceResponse to Asp.Net Core result
    /// This is an unusual (breaking program) exception, so it shouldn't
    /// hurt performance of the app
    /// </summary>
    public class ServiceResponseConvertException : Exception
    {
        public ServiceResponseConvertException() : base("Could not convert ServiceResponse to Asp.Net.Core Result")
        {
        }
    }
}
