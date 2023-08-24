using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactBookmarksManager.Data;
using ReactBookmarksManager.Web.ViewModels;


namespace ReactBookmarksManager.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    
    public class BookmarkController : ControllerBase
    {
        private readonly string _connectionString;

        public BookmarkController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
       
        [HttpPost]
        [Route("add")]
        public void AddBookmark(Bookmark bookmark)
        {
            var repo = new BookmarkRepository(_connectionString);
            repo.AddBookmark(bookmark);
        }
     
        [HttpGet]
        [Route("getbookmarksforuser")]
        public List<Bookmark> GetBookmarksForUser()
        {
            var userRepo = new UserRepository(_connectionString);
            var user = userRepo.GetByEmail(User.Identity.Name);
            var repo = new BookmarkRepository(_connectionString);
            return repo.GetBookmarksById(user.Id);
                
        }
        [HttpGet]
        [AllowAnonymous]
        [Route("gettop5")]
       
        public List<TopBookmark> GetTop5()
        {
            var repo = new BookmarkRepository(_connectionString);
            return repo.GetTopBookmarkUrls();

         }



        [HttpGet]
        [Route("getbookmarksforcurrentuser")]
        public List<Bookmark> GetForUser()
        {
            var userRepo = new UserRepository(_connectionString);
            var user = userRepo.GetByEmail(User.Identity.Name);
            var bookmarkRepo = new BookmarkRepository(_connectionString);
            return bookmarkRepo.GetForUser(user);
        }
        [HttpPost]
        [Route("delete")]
        public void Delete(Bookmark bookmark)
        {
            var Repo = new BookmarkRepository(_connectionString);
            Repo.DeleteBookmark(bookmark.Id);
        }
        [HttpPost]
        [Route("update")]
        public void Update(Bookmark bookmark)
        {
            var Repo = new BookmarkRepository(_connectionString);
            Repo.UpdateBookmark(bookmark.Id, bookmark.Title);
        }

    }
}
