using Microsoft.EntityFrameworkCore.Migrations;

namespace MoodForFood.Migrations
{
    public partial class NameCorrections : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "mostLovedQuote",
                table: "Quote",
                newName: "MostLovedQuote");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MostLovedQuote",
                table: "Quote",
                newName: "mostLovedQuote");
        }
    }
}
