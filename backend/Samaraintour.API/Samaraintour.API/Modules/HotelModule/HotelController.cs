using Microsoft.AspNetCore.Mvc;
using Samaraintour.API.Enums;

namespace Samaraintour.API.Modules.HotelModule;

[Route("api/[controller]")]
[ApiController]
public class HotelController : ControllerBase
{
    private readonly IHotelService _hotelService;

    public HotelController(IHotelService hotelService)
    {
        _hotelService = hotelService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _hotelService.GetAll());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] string id)
    {
        return Ok(await _hotelService.GetHotel(id));
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CommandCreateHotel commandCreateHotel)
    {
        await _hotelService.CreateAsync(commandCreateHotel);

        return Created();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUpdate([FromRoute] string id, [FromBody] CommandUpdateHotel commandUpdateHotel)
    {
        await _hotelService.ReplaceAsync(id, commandUpdateHotel);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] string id)
    {
        await _hotelService.DeleteAsync(id);

        return NoContent();
    }
}
