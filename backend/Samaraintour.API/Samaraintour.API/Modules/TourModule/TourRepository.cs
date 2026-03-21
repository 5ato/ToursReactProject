using MongoDB.Driver;
using Samaraintour.API.Shared;

namespace Samaraintour.API.Modules.TourModule;

public class TourRepository : BaseRepository<Tour>, ITourRepository
{
    public TourRepository(IMongoDatabase database)
        : base(database) { }
}
