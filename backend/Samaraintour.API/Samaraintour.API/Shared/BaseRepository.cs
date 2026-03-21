using MongoDB.Driver;
using System.Linq.Expressions;

namespace Samaraintour.API.Shared;

public abstract class BaseRepository<T> : IRepository<T> where T : BaseEntity
{
    protected readonly IMongoCollection<T> _collection;

    public BaseRepository(IMongoDatabase collectionFactory)
    {
        _collection = collectionFactory.GetCollection<T>(typeof(T).Name);
    }

    public async Task CreateAsync(T entity)
    {
        await _collection.InsertOneAsync(entity);
    }

    public async Task DeleteAsync(string id)
    {
        await _collection.DeleteOneAsync(c => c.Id == id);
    }

    public async Task<bool> ExistAsync(string id)
    {
        return await _collection.Find(Builders<T>.Filter.Eq(c => c.Id, id)).AnyAsync();
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _collection.Find(Builders<T>.Filter.Empty).ToListAsync();
    }

    public async Task<T> GetByAsync(Expression<Func<T, bool>> expression)
    {
        return await _collection.Find(expression).FirstOrDefaultAsync();
    }

    public async Task ReplaceAsync(string id, T entity)
    {
        var filter = Builders<T>.Filter.Eq(c => c.Id, id);
        await _collection.ReplaceOneAsync(filter, entity);
    }
}
