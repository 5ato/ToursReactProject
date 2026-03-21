namespace Samaraintour.API.Modules.TourModule;

public class TourService : ITourService
{
    private readonly ITourRepository _tourRepository;
    
    public TourService(ITourRepository tourRepository)
    {
        _tourRepository = tourRepository;
    }

    public async Task CreateAsync(CommandCreateTour command)
    {
        var tour = new Tour()
        {
            OldPrice = command.OldPrice,
            NewPrice = command.NewPrice,
            Discount = command.Discount,
            Rating = command.Rating,
            AdultCount = command.AdultCount,
            ChildrenCount = command.ChildrenCount,
            NightCount = command.NightCount,
            DepartureDate = command.DepartureDate,
            BackDepartureDate = command.BackDepartureDate,
            IsHot = command.IsHot,
            DepartureCityId = command.DepartureCityId,
            HotelId = command.HotelId,
        };

        await _tourRepository.CreateAsync(tour);
    }

    public async Task DeleteAsync(string tourId)
    {
        await _tourRepository.DeleteAsync(tourId);
    }

    public async Task<bool> ExistAsync(string tourId)
    {
        return await _tourRepository.ExistAsync(tourId);
    }

    public async Task<IEnumerable<TourDTO>> GetAll()
    {
        var data = await _tourRepository.GetAllAsync();

        var result = data.Select(c => new TourDTO(
            c.Id,
            c.OldPrice,
            c.NewPrice,
            c.Discount,
            c.Rating,
            c.AdultCount,
            c.ChildrenCount,
            c.NightCount,
            c.DepartureDate,
            c.BackDepartureDate,
            c.IsHot,
            c.DepartureCityId,
            c.HotelId));

        return result;
    }

    public async Task<TourDTO> GetTour(string tourId)
    {
        var data = await _tourRepository.GetByAsync(c => c.Id == tourId);

        var result = new TourDTO(
            data.Id,
            data.OldPrice,
            data.NewPrice,
            data.Discount,
            data.Rating,
            data.AdultCount,
            data.ChildrenCount,
            data.NightCount,
            data.DepartureDate,
            data.BackDepartureDate,
            data.IsHot,
            data.DepartureCityId,
            data.HotelId);

        return result;
    }

    public async Task ReplaceAsync(string tourId, CommandUpdateTour command)
    {
        var tour = new Tour()
        {
            Id = tourId,
            OldPrice = command.OldPrice,
            NewPrice = command.NewPrice,
            Discount = command.Discount,
            Rating = command.Rating,
            AdultCount = command.AdultCount,
            ChildrenCount = command.ChildrenCount,
            NightCount = command.NightCount,
            DepartureDate = command.DepartureDate,
            BackDepartureDate = command.BackDepartureDate,
            IsHot = command.IsHot,
            DepartureCityId = command.DepartureCityId,
            HotelId = command.HotelId,
        };

        await _tourRepository.ReplaceAsync(tourId, tour);
    }
}
