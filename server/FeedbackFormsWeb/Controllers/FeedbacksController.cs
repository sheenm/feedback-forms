using System.Collections;
using System.Threading.Tasks;
using FeedbackForm.AspNet.ServiceResponseMapping;
using FeedbackForm.Feedbacks.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace FeedbackForm.Web.Controllers
{
    [Route("api/[controller]")]
    public class FeedbacksController : Controller
    {
        private readonly FeedbackService _feedbackService;

        public FeedbacksController(FeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable>> GetAllFeedbacks() =>
             (await _feedbackService.GetAllFeedbacks())
                .MapToAspNetCoreResult();

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]JObject json) =>
             (await _feedbackService.CreateFeedback(json.ToString(Formatting.None)))
                .MapToAspNetCoreResult();
    }
}
