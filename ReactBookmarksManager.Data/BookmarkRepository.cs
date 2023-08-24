using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using static ReactBookmarksManager.Data.User;

namespace ReactBookmarksManager.Data
{
    public class BookmarkRepository
    {
        private readonly string _connectionString;

        public BookmarkRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Bookmark> GetBookmarksById(int id)
        {
            using var context = new BookmarksManagerDataContext(_connectionString);
            return context.Bookmarks.Where(b => b.UserId == id).ToList();
        }
        public void AddBookmark(Bookmark bookmark)
        {
            using var context = new BookmarksManagerDataContext(_connectionString);
            context.Bookmarks.Add(bookmark);
            context.SaveChanges();
        }

        public void UpdateBookmark(int id, string title)
        {
            using var context = new BookmarksManagerDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated(
                $"UPDATE Bookmarks SET Title = {title} WHERE Id = {id}");
        }

        public void DeleteBookmark(int bookmarkId)
        {
            using var context = new BookmarksManagerDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM Bookmarks WHERE Id = {bookmarkId}");

        }

        public List<TopBookmark> GetTopBookmarkUrls()
        {

            var context = new BookmarksManagerDataContext(_connectionString);
            return context.Bookmarks.GroupBy(b => b.Url).
                Select(x => new TopBookmark { Url = x.Key, Count = x.Count() })
                .OrderByDescending(bc => bc.Count).Take(5).ToList();

        }


        public List<Bookmark> GetForUser(User user)
        {
            using var context = new BookmarksManagerDataContext(_connectionString);
            return context.Bookmarks.Where(b => b.UserId == user.Id).ToList();
        }
    }
}