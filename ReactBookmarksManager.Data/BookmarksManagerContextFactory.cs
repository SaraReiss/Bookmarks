using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ReactBookmarksManager.Data
{
    public class BookmarksManagerContextFactory : IDesignTimeDbContextFactory<BookmarksManagerDataContext>
    {
        public BookmarksManagerDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactBookmarksManager.Web"))
               .AddJsonFile("appsettings.json")
               .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new BookmarksManagerDataContext(config.GetConnectionString("ConStr"));
        }
    }
}