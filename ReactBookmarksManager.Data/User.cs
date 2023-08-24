using System.Text.Json.Serialization;

namespace ReactBookmarksManager.Data
{
    public partial class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public List<Bookmark> Bookmarks { get; set; }

        [JsonIgnore]
        public string PasswordHash { get; set; }

    }
}