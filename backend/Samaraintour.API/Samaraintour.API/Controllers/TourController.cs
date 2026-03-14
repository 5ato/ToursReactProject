using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Samaraintour.API.Data;

namespace Samaraintour.API.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class TourController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    public TourController(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllTours()
    {
        return Ok(await DataSeed.GetAllTours(_environment));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTour([FromRoute] int id)
    {
        var data = await DataSeed.GetAllTours(_environment);
        return Ok(data.FirstOrDefault(t => t.Id == id));
    }
}
