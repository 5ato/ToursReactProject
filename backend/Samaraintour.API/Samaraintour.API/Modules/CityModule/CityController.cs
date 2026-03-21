using Microsoft.AspNetCore.Mvc;

namespace Samaraintour.API.Modules.CityModule;

[ApiController]
[Route("api/v1/[controller]")]
public class CityController : ControllerBase
{
    private readonly ICityService _cityService;

    public CityController(ICityService cityService)
    {
        _cityService = cityService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _cityService.GetAll());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] string id)
    {
        return Ok(await _cityService.GetCity(id));
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CommandCreateCity commandCreateCity)
    {
        await _cityService.CreateAsync(commandCreateCity);

        return Created();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUpdate([FromRoute] string id, [FromBody] CommandUpdateCity commandUpdateCity)
    {
        await _cityService.ReplaceAsync(id, commandUpdateCity);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] string id)
    { 
        await _cityService.DeleteAsync(id);

        return NoContent();
    }
}
