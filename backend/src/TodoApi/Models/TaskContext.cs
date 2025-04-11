using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options) { }
        public DbSet<TaskItem> Tasks { get; set; }
    }
}
