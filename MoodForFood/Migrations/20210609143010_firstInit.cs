using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MoodForFood.Migrations
{
    public partial class firstInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Mood",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PersonalMood = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MoodDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Curiosity = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mood", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PersonalMood",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MoodName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrentDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MoodReason = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalMood", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Food",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MoodID = table.Column<int>(type: "int", nullable: false),
                    FoodForTheMood = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Morning = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Noon = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Evening = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Food_Mood_MoodID",
                        column: x => x.MoodID,
                        principalTable: "Mood",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Quote",
                columns: table => new
                {
                    QuoteID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MoodId = table.Column<int>(type: "int", nullable: false),
                    QuoteText = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Writer = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quote", x => x.QuoteID);
                    table.ForeignKey(
                        name: "FK_Quote_Mood_MoodId",
                        column: x => x.MoodId,
                        principalTable: "Mood",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Food_MoodID",
                table: "Food",
                column: "MoodID");

            migrationBuilder.CreateIndex(
                name: "IX_Quote_MoodId",
                table: "Quote",
                column: "MoodId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Food");

            migrationBuilder.DropTable(
                name: "PersonalMood");

            migrationBuilder.DropTable(
                name: "Quote");

            migrationBuilder.DropTable(
                name: "Mood");
        }
    }
}
