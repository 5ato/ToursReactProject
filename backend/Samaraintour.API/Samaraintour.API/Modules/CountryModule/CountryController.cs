using Microsoft.AspNetCore.Mvc;

namespace Samaraintour.API.Modules.CountryModule;

[ApiController]
[Route("api/v1/[controller]")]
public class CountryController : ControllerBase
{
    private readonly ICountryService _countryService;

    public CountryController(ICountryService countryService)
    {
        _countryService = countryService; 
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _countryService.GetAll());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] string id)
    {
        return Ok(await _countryService.GetCountry(id));
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CommandCreateCountry commandCreateCountry)
    {
        await _countryService.CreateAsync(commandCreateCountry);

        return Created();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUpdate([FromRoute] string id, [FromBody] CommandUpdateCountry commandUpdateCountry)
    {
        await _countryService.ReplaceAsync(id, commandUpdateCountry);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] string id)
    {
        await _countryService.DeleteAsync(id);

        return NoContent();
    }
}
