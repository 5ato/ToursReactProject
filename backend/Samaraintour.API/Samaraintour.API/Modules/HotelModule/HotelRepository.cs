using MongoDB.Driver;
using Samaraintour.API.Shared;

namespace Samaraintour.API.Modules.HotelModule;

public class HotelRepository : BaseRepository<Hotel>, IHotelRepository
{
    public HotelRepository(IMongoDatabase database) 
        : base(database) { }
}
