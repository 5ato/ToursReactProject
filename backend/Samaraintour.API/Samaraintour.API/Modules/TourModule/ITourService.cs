namespace Samaraintour.API.Modules.TourModule;

public interface ITourService
{
    Task<IEnumerable<TourDTO>> GetAll();
    Task<TourDTO> GetTour(string tourId);
    Task CreateAsync(CommandCreateTour command);
    Task ReplaceAsync(string tourId, CommandUpdateTour command);
    Task DeleteAsync(string tourId);
    Task<bool> ExistAsync(string tourId);
}
