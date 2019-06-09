using System.Collections;
using System.Threading.Tasks;
using FeedbackForm.AspNet.ServiceResponseMapping;
using FeedbackForm.Feedbacks.Services;
using Microsoft.AspNetCore.Mvc;

namespace FeedbackForm.Web.Controllers
{
    [Route("api/[controller]")]
    public class FeedbacksController : Controller
    {
        private readonly IFeedbackService _feedbackService;

        public FeedbacksController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable>> GetAllFeedbacks() =>
             (await _feedbackService.GetAllFeedbacks())
                .MapToAspNetCoreResult();

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]object json) =>
             (await _feedbackService.CreateFeedback(json))
                .MapToAspNetCoreResult();
    }
}
