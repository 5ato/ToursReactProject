using MongoDB.Driver;
using Samaraintour.API.Shared;

namespace Samaraintour.API.Modules.CountryModule;

public class CountryRepository : BaseRepository<Country>, ICountryRepository
{
    public CountryRepository(IMongoDatabase database)
        : base(database) { }
}
