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

        [HttpGet("food")]
        public string[] Food()
        {
            return new string[] { "Food", "List" };
        }

        [HttpGet("drink")]
        public string[] Drink()
        {
            return new string[] { "Drink", "List" };
        }
    }
}
