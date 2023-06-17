using Microsoft.AspNetCore.Mvc;
using FoodAndDrink.Api.Models;

namespace FoodAndDrink.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsumableController : Controller
    {
        [HttpGet]
        public string[] Index()
        {
            return new string[] { "Hello", "World" };
        }
    }
}
