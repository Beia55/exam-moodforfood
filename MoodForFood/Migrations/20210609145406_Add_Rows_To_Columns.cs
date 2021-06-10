using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MoodForFood.Migrations
{
    public partial class Add_Rows_To_Columns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Mood",
                columns: new[] { "ID", "Curiosity", "MoodDescription", "PersonalMood" },
                values: new object[,]
                {
                    { 1, "the cheerful man tends to ignore the negative elements more easily", "Someone who is cheerful is happy and shows this in their behaviour", "cheerful" },
                    { 18, "Lights Make a Big Impact on Happiness", "Someone who is happy has feelings of pleasure, usually because something nice has happened or because they feel satisfied with their life", "happy" },
                    { 17, "More than 60% of lonely people are married", "Someone who is lonely is unhappy because they are alone or do not have anyone they can talk to", "lonely" },
                    { 16, "tense people are much more likely to do extreme things", "If you are tense, you are anxious and nervous and cannot relax", "tense" },
                    { 15, "There is a very strong relationship between age and the types of fears that people report in many different cultures", "Fearful people are those who are anxious about something or someone", "fearful" },
                    { 14, "Humor can diffuse anger", "When you are angry, you feel strong dislike or impatience about something", "angry" },
                    { 13, "Optimistic thinkers have lower rates of hypertension, heart disease, and even risk of cancer, as well as lower rates of mortality in general", "If you are hopeful, you are fairly confident that something that you want to happen will happen", "hopeful" },
                    { 12, "someone who is lighthearted can be more focused in everything", "Someone who is lighthearted is cheerful and happy", "lighthearted" },
                    { 11, "a calm man can complete more tasks than a restless one", "A calm person does not show or feel any worry, anger, or excitement", "calm" },
                    { 10, "the ominous people have nerve problems", "an ominous person is a person who has a threatening character", "ominous" },
                    { 9, "in general, mysterious people are very smart", "Someone  which is mysterious is strange and is not known about or understood", "mysterious" },
                    { 8, "a romantic person has a richer imagination", "A person who is romantic is an idealistic, amorous, or soulful person", "romantic" },
                    { 7, "A capricious person easily moves from one emotional state to another", "A whimsical person is unusual, playful, and unpredictable, rather than serious and practical.", "whimsical" },
                    { 6, "insecure people tend to think twice as hard as others", "You are not sure or confident about someoane/something", "uncertain" },
                    { 5, "People with a melancholic temperament love the societal order of friendships", "Melancholy is an intense feeling of sadness which lasts for a long time and which strongly affects your behaviour and attitudes", "melancholy" },
                    { 4, "Supervisors Who Use Humor Are Perceived as Better Leaders", "If someone is humorous,  he/she is amusing, especially in a clever or witty way.", "humorous" },
                    { 3, "it causes depression, dejection, or gloom", "If people are gloomy, they are unhappy and have no hope", "gloomy" },
                    { 2, "reflective people are people who support peace", "If you are reflective, you are thinking deeply about something", "reflective" },
                    { 19, "In general, women are twice as nervous as menIn general, women are twice as nervous as men", "If someone is nervous, they are frightened or worried about something that is happening or might happen, and show this in their behaviour", "nervous" },
                    { 20, "Indifference can be the price of selfishness", "someone who is indifferent has a total lack of interest in something", "indifferent" }
                });

            migrationBuilder.InsertData(
                table: "Food",
                columns: new[] { "ID", "Evening", "FoodForTheMood", "MoodID", "Morning", "Noon" },
                values: new object[,]
                {
                    { new Guid("de31a3ba-f0f4-42e4-9d75-6bce096837ce"), "cinnamon tea", "You need something to keep you in the mood", 1, "milkshake of parsley", "cauliflower salad, broccoli and cabbage" },
                    { new Guid("9e1d42a1-f2c0-4108-ba89-323391e459ab"), "baked asparagus", "You need something pleasant and refined", 12, "broccoli boiled and fried in egg with leurda", "blue potatoes" },
                    { new Guid("fadd7079-40b2-4db9-82a7-ac36e64661c4"), "kefir", "You need something to give you courage / strength", 15, "oatmeal", "lentil and vegetable stew with kale" },
                    { new Guid("f8e4ea64-c634-4d9e-b45c-6cc926a42604"), "walnut-miso noodles", "You need something like you", 11, "strawberries", "chanterelle mushroom sauce with risotto garnish" },
                    { new Guid("74c1bdeb-4e70-4ab7-8ca0-f0cc79a8ae99"), "figs", "You need something to fill you with emotions", 20, "bananas", "red potatoes with fish (salmon)" },
                    { new Guid("85bd7e5b-6c7c-4c3b-8515-8ba4d0b903d4"), "honey", "You need something to sweeten you", 10, "Red bell peppers and cucumbers", "warm quinoa, spinach, and shiitake salad" },
                    { new Guid("0bd50897-bba0-443b-91f6-abaeb82ea69c"), "flaxseed", "You need something to make you shine", 9, "nachos", "chicken and vegetable pie" },
                    { new Guid("51cfdfe1-42b4-4554-8e68-729482bda899"), "pistachios", "You need something to calm you down", 16, "Green Tea", "spinach soup" },
                    { new Guid("2d2bf732-4f7d-48cf-b83c-6abfb4ef1b20"), "sushi", "You need something to keep your feet on the ground", 8, "omelet", "black bean cream soup" },
                    { new Guid("0143381c-ccb3-425f-a8f3-d2754e262827"), "salsa", "You need something nutritious, but easy", 13, "boiled eggs with tomatoes and toast", "brussels sprouts soup" },
                    { new Guid("d50f9c84-0826-4642-893a-e7df2c9aa230"), "spaghetti with red sauce", "You need something to fill you with love, to improve your mood", 17, "cottage cheese", "okra dredged in egg and cornmeal and fried to a golden crisp" },
                    { new Guid("3e98b141-aef8-47c2-964a-24681174b8b2"), "roasted chickpeas", "You need something to soften you", 7, "watermelon", "beef with mushroom sauce" },
                    { new Guid("f999df1c-f373-4f18-9531-8a91bf278c30"), "apricots", "You need something that keeps you on the positive side", 5, "avocado bread and tomatoes", "lasagne" },
                    { new Guid("98227b05-d52b-4d30-b96e-ed1051cb704b"), "curry", "You need something to keep you in the mood", 18, "Spinach - Ricotta Quiche", "grilled chicken with boiled Mexican vegetables" },
                    { new Guid("a35896e6-22ca-4208-93f6-da5b69b1ee26"), "oranges", "You need something to keep your energy going", 4, "raisins", "almonds" },
                    { new Guid("822e39fc-626a-4ae5-b29e-00a3b5f59729"), "chilli con carne", "You need something to enlighten you", 3, "mini pancakes with maple syrup", "oysters" },
                    { new Guid("14beae34-c537-4d63-9d2d-056ebfaf8214"), "frozen berries", "You need something to fill your confidence", 19, "coconut", "greek soup" },
                    { new Guid("6b229864-7cd8-4b43-910a-d36b265f8955"), "raspberries", "You need something to help you focus", 2, "Walnuts", "pea soup" },
                    { new Guid("374c240a-ea7a-4278-ab2c-a4f24b6a9d73"), "chocolate-covered prosecco strawberries", "You need something to give you a boost", 6, "nut butter", "edamame food" },
                    { new Guid("9a60e18e-464b-42fb-ac98-205f814c7f1a"), "avocado", "You need something to relax you, to make you feel good", 14, "chocolate", "sweet potato fries" }
                });

            migrationBuilder.InsertData(
                table: "Quote",
                columns: new[] { "QuoteID", "MoodId", "QuoteText", "Writer" },
                values: new object[,]
                {
                    { new Guid("a35896e6-22ca-8888-93f6-da5b69b1ee26"), 17, "The soul that sees beauty may sometimes walk alone.", "Johann Wolfgange Von Goethe" },
                    { new Guid("a35896e6-22ca-7778-93f6-da5b69b1ee26"), 16, "Yes, well, on stage I'm a different person, very aggressive, very tense. That's not me because I'm humble and polite, unless someone is rude to me.", "Tricky" },
                    { new Guid("a35896e6-22ca-6668-93f6-da5b69b1ee26"), 15, "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.", "H. P. Lovecraft" },
                    { new Guid("a35896e6-22ca-9998-93f6-da5b69b1ee26"), 18, "Happiness is when what you think, what you say, and what you do are in harmony.", "Mahatma Gandhi" },
                    { new Guid("a31196e6-22ca-1108-93f6-da5b69b1ee26"), 19, "Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.", "Deepak Chopra" },
                    { new Guid("a35896e6-22ca-5558-93f6-da5b69b1ee26"), 14, "For every minute you are angry you lose sixty seconds of happiness.", " Ralph Waldo Emerson" },
                    { new Guid("a35896e6-22ca-1118-93f6-da5b69b1ee26"), 10, "A man’s as miserable as he thinks he is.", "Seneca" },
                    { new Guid("a35896e6-22ca-3338-93f6-da5b69b1ee26"), 12, "Writers sometimes ruin a book by adding a lighthearted mood at the wrong moment.", "Gayle Lynds" },
                    { new Guid("a35896e6-22ca-2228-93f6-da5b69b1ee26"), 11, "Smile, breathe, and go slowly.", "Thich Nhat Hanh" },
                    { new Guid("a39996e6-22ca-4208-93f6-da5b69b1ee26"), 9, "I never tell anyone exactly how clever I am. They would be too scared.", "Eoin Colfer" },
                    { new Guid("a38886e6-22ca-4208-93f6-da5b69b1ee26"), 8, "It’s always better when we’re together.", "Jack Johnson" },
                    { new Guid("a37776e6-22ca-4208-93f6-da5b69b1ee26"), 7, "I describe myself as a big kid with an old soul, I'm very playful whimsical, but I definitely have that old soul as well.", "Jidenna" },
                    { new Guid("a35666e6-22ca-4208-93f6-da5b69b1ee26"), 6, "Trust the wait. Embrace the uncertainty. Enjoy the beauty of becoming. When nothing is certain, anything is possible.", "Mandy Hale" },
                    { new Guid("a35555e6-22ca-4208-93f6-da5b69b1ee26"), 5, "The sky has a huge heart open for all clouds even on the gloomiest of days.", "Munia Khan" },
                    { new Guid("a34446e6-22ca-4208-93f6-da5b69b1ee26"), 4, "The difference between stupidity and genius is that genius has its limits.", "Albert Einstein" },
                    { new Guid("a33396e6-22ca-4208-93f6-da5b69b1ee26"), 3, "Better to remain silent and be thought a fool than to speak out and remove all doubt.", "Abraham Lincoln" },
                    { new Guid("a32226e6-22ca-4208-93f6-da5b69b1ee26"), 2, "Whether you choose to move on from your struggles and enjoy life or waddle in your misery, life will continue.", "Germany Kent" },
                    { new Guid("a31116e6-22ca-4208-93f6-da5b69b1ee26"), 1, "Be positive. Stay happy and don’t let the negativity of the world get you down.", "Germany Kent" },
                    { new Guid("a35896e6-22ca-4448-93f6-da5b69b1ee26"), 13, "By being yourself you put something wonderful in the world that was not there before.", "Edwin Elliott" },
                    { new Guid("a35226e6-22ca-4222-93f6-da5b69b1ee26"), 20, "You can love me, you can hate me, but just don't be indifferent. Care about it enough to watch.", "Daniel Cormier" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("0143381c-ccb3-425f-a8f3-d2754e262827"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("0bd50897-bba0-443b-91f6-abaeb82ea69c"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("14beae34-c537-4d63-9d2d-056ebfaf8214"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("2d2bf732-4f7d-48cf-b83c-6abfb4ef1b20"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("374c240a-ea7a-4278-ab2c-a4f24b6a9d73"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("3e98b141-aef8-47c2-964a-24681174b8b2"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("51cfdfe1-42b4-4554-8e68-729482bda899"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("6b229864-7cd8-4b43-910a-d36b265f8955"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("74c1bdeb-4e70-4ab7-8ca0-f0cc79a8ae99"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("822e39fc-626a-4ae5-b29e-00a3b5f59729"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("85bd7e5b-6c7c-4c3b-8515-8ba4d0b903d4"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("98227b05-d52b-4d30-b96e-ed1051cb704b"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("9a60e18e-464b-42fb-ac98-205f814c7f1a"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("9e1d42a1-f2c0-4108-ba89-323391e459ab"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("a35896e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("d50f9c84-0826-4642-893a-e7df2c9aa230"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("de31a3ba-f0f4-42e4-9d75-6bce096837ce"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("f8e4ea64-c634-4d9e-b45c-6cc926a42604"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("f999df1c-f373-4f18-9531-8a91bf278c30"));

            migrationBuilder.DeleteData(
                table: "Food",
                keyColumn: "ID",
                keyValue: new Guid("fadd7079-40b2-4db9-82a7-ac36e64661c4"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a31116e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a31196e6-22ca-1108-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a32226e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a33396e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a34446e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35226e6-22ca-4222-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35555e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35666e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-1118-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-2228-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-3338-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-4448-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-5558-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-6668-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-7778-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-8888-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a35896e6-22ca-9998-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a37776e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a38886e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Quote",
                keyColumn: "QuoteID",
                keyValue: new Guid("a39996e6-22ca-4208-93f6-da5b69b1ee26"));

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Mood",
                keyColumn: "ID",
                keyValue: 20);
        }
    }
}
