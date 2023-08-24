using Microsoft.EntityFrameworkCore;

namespace ReactBookmarksManager.Data
{
    public class BookmarksManagerDataContext : DbContext
    {
        private string _connectionString;

        public BookmarksManagerDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Bookmark> Bookmarks { get; set; }
        public DbSet<User> Users { get; set; }
    }
}