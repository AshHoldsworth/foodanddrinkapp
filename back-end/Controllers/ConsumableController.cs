using Microsoft.AspNetCore.Mvc;

namespace foodanddrinkapp_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsumablesController : Controller
    { 
        [HttpGet]
        public string[] Index()
        {
            return new string[] { "Hello", "World" };
        }
    }
}
