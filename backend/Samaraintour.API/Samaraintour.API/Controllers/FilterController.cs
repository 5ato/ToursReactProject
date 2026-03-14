using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Samaraintour.API.Data;

namespace Samaraintour.API.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class FilterController : ControllerBase
{
    [HttpGet]
    public IActionResult GetFilters()
    {
        return Ok(DataSeed.GetFilters());
    }
}
