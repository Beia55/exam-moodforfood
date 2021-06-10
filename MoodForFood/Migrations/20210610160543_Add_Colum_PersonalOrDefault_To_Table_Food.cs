using Microsoft.EntityFrameworkCore.Migrations;

namespace MoodForFood.Migrations
{
    public partial class Add_Colum_PersonalOrDefault_To_Table_Food : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PersonalOrDefault",
                table: "Food",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PersonalOrDefault",
                table: "Food");
        }
    }
}
