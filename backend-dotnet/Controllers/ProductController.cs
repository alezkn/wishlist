using Microsoft.AspNetCore.Mvc;
using backend_dotnet.Data;
using backend_dotnet.Models;

namespace YourProject.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private readonly WishlistDbContext _dbContext;

        public ProductController(WishlistDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Product> GetProducts(string userId, string filterBy, string? search = "")
        {
            var productsQuery = _dbContext.Products!.Where(p => p.UserId == userId);

            if (!string.IsNullOrEmpty(search))
            {
                productsQuery = productsQuery.Where(p => p.Name!.ToLower().Contains(search.ToLower()));
            }

            if (filterBy == "new")
            {
                productsQuery = productsQuery.OrderByDescending(p => p.DateAdded);
            }
            else if (filterBy == "old")
            {
                productsQuery = productsQuery.OrderBy(p => p.DateAdded);
            }

            return productsQuery.ToList();
        }
    }
}
