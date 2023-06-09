namespace backend_dotnet.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Link { get; set; }
        public string? UserId { get; set; }
        public DateTime DateAdded { get; set; }
    }
}