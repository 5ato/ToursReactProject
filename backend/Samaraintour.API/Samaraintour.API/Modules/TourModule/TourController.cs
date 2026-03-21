using Microsoft.AspNetCore.Mvc;

namespace Samaraintour.API.Modules.TourModule;

[Route("api/v1/[controller]")]
[ApiController]
public class TourController : ControllerBase
{
    private readonly ITourService _tourService;
    public TourController(ITourService tourService)
    {
        _tourService = tourService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _tourService.GetAll());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] string id)
    {
        return Ok(await _tourService.GetTour(id));
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CommandCreateTour commandCreateTour)
    {
        await _tourService.CreateAsync(commandCreateTour);

        return Created();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUpdate([FromRoute] string id, [FromBody] CommandUpdateTour commandUpdateTour)
    {
        await _tourService.ReplaceAsync(id, commandUpdateTour);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] string id)
    {
        await _tourService.DeleteAsync(id);

        return NoContent();
    }
}
