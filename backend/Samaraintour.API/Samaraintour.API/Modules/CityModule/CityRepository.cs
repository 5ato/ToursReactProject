using MongoDB.Driver;
using Samaraintour.API.Shared;

namespace Samaraintour.API.Modules.CityModule;

public class CityRepository : BaseRepository<City>, ICityRepository
{

    public CityRepository(IMongoDatabase database)
        : base(database) { }
}
