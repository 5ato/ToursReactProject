using MongoDB.Driver;
using System.Linq.Expressions;

namespace Samaraintour.API.Shared;

public interface IRepository<T>
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetByAsync(Expression<Func<T, bool>> expression);
    Task CreateAsync(T entity);
    Task ReplaceAsync(string id, T entity);
    Task DeleteAsync(string id);
    Task<bool> ExistAsync(string id);
}
