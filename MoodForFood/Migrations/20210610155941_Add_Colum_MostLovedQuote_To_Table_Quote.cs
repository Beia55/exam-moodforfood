using Microsoft.EntityFrameworkCore.Migrations;

namespace MoodForFood.Migrations
{
    public partial class Add_Colum_MostLovedQuote_To_Table_Quote : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "mostLovedQuote",
                table: "Quote",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "mostLovedQuote",
                table: "Quote");
        }
    }
}
