﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MoodForFood.Data;

namespace MoodForFood.Migrations
{
    [DbContext(typeof(MoodForFoodContext))]
    [Migration("20210609145406_Add_Rows_To_Columns")]
    partial class Add_Rows_To_Columns
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MoodForFood.Models.Food", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Evening")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FoodForTheMood")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MoodID")
                        .HasColumnType("int");

                    b.Property<string>("Morning")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Noon")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("MoodID");

                    b.ToTable("Food");

                    b.HasData(
                        new
                        {
                            ID = new Guid("de31a3ba-f0f4-42e4-9d75-6bce096837ce"),
                            Evening = "cinnamon tea",
                            FoodForTheMood = "You need something to keep you in the mood",
                            MoodID = 1,
                            Morning = "milkshake of parsley",
                            Noon = "cauliflower salad, broccoli and cabbage"
                        },
                        new
                        {
                            ID = new Guid("6b229864-7cd8-4b43-910a-d36b265f8955"),
                            Evening = "raspberries",
                            FoodForTheMood = "You need something to help you focus",
                            MoodID = 2,
                            Morning = "Walnuts",
                            Noon = "pea soup"
                        },
                        new
                        {
                            ID = new Guid("822e39fc-626a-4ae5-b29e-00a3b5f59729"),
                            Evening = "chilli con carne",
                            FoodForTheMood = "You need something to enlighten you",
                            MoodID = 3,
                            Morning = "mini pancakes with maple syrup",
                            Noon = "oysters"
                        },
                        new
                        {
                            ID = new Guid("a35896e6-22ca-4208-93f6-da5b69b1ee26"),
                            Evening = "oranges",
                            FoodForTheMood = "You need something to keep your energy going",
                            MoodID = 4,
                            Morning = "raisins",
                            Noon = "almonds"
                        },
                        new
                        {
                            ID = new Guid("f999df1c-f373-4f18-9531-8a91bf278c30"),
                            Evening = "apricots",
                            FoodForTheMood = "You need something that keeps you on the positive side",
                            MoodID = 5,
                            Morning = "avocado bread and tomatoes",
                            Noon = "lasagne"
                        },
                        new
                        {
                            ID = new Guid("374c240a-ea7a-4278-ab2c-a4f24b6a9d73"),
                            Evening = "chocolate-covered prosecco strawberries",
                            FoodForTheMood = "You need something to give you a boost",
                            MoodID = 6,
                            Morning = "nut butter",
                            Noon = "edamame food"
                        },
                        new
                        {
                            ID = new Guid("3e98b141-aef8-47c2-964a-24681174b8b2"),
                            Evening = "roasted chickpeas",
                            FoodForTheMood = "You need something to soften you",
                            MoodID = 7,
                            Morning = "watermelon",
                            Noon = "beef with mushroom sauce"
                        },
                        new
                        {
                            ID = new Guid("2d2bf732-4f7d-48cf-b83c-6abfb4ef1b20"),
                            Evening = "sushi",
                            FoodForTheMood = "You need something to keep your feet on the ground",
                            MoodID = 8,
                            Morning = "omelet",
                            Noon = "black bean cream soup"
                        },
                        new
                        {
                            ID = new Guid("0bd50897-bba0-443b-91f6-abaeb82ea69c"),
                            Evening = "flaxseed",
                            FoodForTheMood = "You need something to make you shine",
                            MoodID = 9,
                            Morning = "nachos",
                            Noon = "chicken and vegetable pie"
                        },
                        new
                        {
                            ID = new Guid("85bd7e5b-6c7c-4c3b-8515-8ba4d0b903d4"),
                            Evening = "honey",
                            FoodForTheMood = "You need something to sweeten you",
                            MoodID = 10,
                            Morning = "Red bell peppers and cucumbers",
                            Noon = "warm quinoa, spinach, and shiitake salad"
                        },
                        new
                        {
                            ID = new Guid("f8e4ea64-c634-4d9e-b45c-6cc926a42604"),
                            Evening = "walnut-miso noodles",
                            FoodForTheMood = "You need something like you",
                            MoodID = 11,
                            Morning = "strawberries",
                            Noon = "chanterelle mushroom sauce with risotto garnish"
                        },
                        new
                        {
                            ID = new Guid("9e1d42a1-f2c0-4108-ba89-323391e459ab"),
                            Evening = "baked asparagus",
                            FoodForTheMood = "You need something pleasant and refined",
                            MoodID = 12,
                            Morning = "broccoli boiled and fried in egg with leurda",
                            Noon = "blue potatoes"
                        },
                        new
                        {
                            ID = new Guid("0143381c-ccb3-425f-a8f3-d2754e262827"),
                            Evening = "salsa",
                            FoodForTheMood = "You need something nutritious, but easy",
                            MoodID = 13,
                            Morning = "boiled eggs with tomatoes and toast",
                            Noon = "brussels sprouts soup"
                        },
                        new
                        {
                            ID = new Guid("9a60e18e-464b-42fb-ac98-205f814c7f1a"),
                            Evening = "avocado",
                            FoodForTheMood = "You need something to relax you, to make you feel good",
                            MoodID = 14,
                            Morning = "chocolate",
                            Noon = "sweet potato fries"
                        },
                        new
                        {
                            ID = new Guid("fadd7079-40b2-4db9-82a7-ac36e64661c4"),
                            Evening = "kefir",
                            FoodForTheMood = "You need something to give you courage / strength",
                            MoodID = 15,
                            Morning = "oatmeal",
                            Noon = "lentil and vegetable stew with kale"
                        },
                        new
                        {
                            ID = new Guid("51cfdfe1-42b4-4554-8e68-729482bda899"),
                            Evening = "pistachios",
                            FoodForTheMood = "You need something to calm you down",
                            MoodID = 16,
                            Morning = "Green Tea",
                            Noon = "spinach soup"
                        },
                        new
                        {
                            ID = new Guid("d50f9c84-0826-4642-893a-e7df2c9aa230"),
                            Evening = "spaghetti with red sauce",
                            FoodForTheMood = "You need something to fill you with love, to improve your mood",
                            MoodID = 17,
                            Morning = "cottage cheese",
                            Noon = "okra dredged in egg and cornmeal and fried to a golden crisp"
                        },
                        new
                        {
                            ID = new Guid("98227b05-d52b-4d30-b96e-ed1051cb704b"),
                            Evening = "curry",
                            FoodForTheMood = "You need something to keep you in the mood",
                            MoodID = 18,
                            Morning = "Spinach - Ricotta Quiche",
                            Noon = "grilled chicken with boiled Mexican vegetables"
                        },
                        new
                        {
                            ID = new Guid("14beae34-c537-4d63-9d2d-056ebfaf8214"),
                            Evening = "frozen berries",
                            FoodForTheMood = "You need something to fill your confidence",
                            MoodID = 19,
                            Morning = "coconut",
                            Noon = "greek soup"
                        },
                        new
                        {
                            ID = new Guid("74c1bdeb-4e70-4ab7-8ca0-f0cc79a8ae99"),
                            Evening = "figs",
                            FoodForTheMood = "You need something to fill you with emotions",
                            MoodID = 20,
                            Morning = "bananas",
                            Noon = "red potatoes with fish (salmon)"
                        });
                });

            modelBuilder.Entity("MoodForFood.Models.Mood", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Curiosity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MoodDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PersonalMood")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Mood");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            Curiosity = "the cheerful man tends to ignore the negative elements more easily",
                            MoodDescription = "Someone who is cheerful is happy and shows this in their behaviour",
                            PersonalMood = "cheerful"
                        },
                        new
                        {
                            ID = 2,
                            Curiosity = "reflective people are people who support peace",
                            MoodDescription = "If you are reflective, you are thinking deeply about something",
                            PersonalMood = "reflective"
                        },
                        new
                        {
                            ID = 3,
                            Curiosity = "it causes depression, dejection, or gloom",
                            MoodDescription = "If people are gloomy, they are unhappy and have no hope",
                            PersonalMood = "gloomy"
                        },
                        new
                        {
                            ID = 4,
                            Curiosity = "Supervisors Who Use Humor Are Perceived as Better Leaders",
                            MoodDescription = "If someone is humorous,  he/she is amusing, especially in a clever or witty way.",
                            PersonalMood = "humorous"
                        },
                        new
                        {
                            ID = 5,
                            Curiosity = "People with a melancholic temperament love the societal order of friendships",
                            MoodDescription = "Melancholy is an intense feeling of sadness which lasts for a long time and which strongly affects your behaviour and attitudes",
                            PersonalMood = "melancholy"
                        },
                        new
                        {
                            ID = 6,
                            Curiosity = "insecure people tend to think twice as hard as others",
                            MoodDescription = "You are not sure or confident about someoane/something",
                            PersonalMood = "uncertain"
                        },
                        new
                        {
                            ID = 7,
                            Curiosity = "A capricious person easily moves from one emotional state to another",
                            MoodDescription = "A whimsical person is unusual, playful, and unpredictable, rather than serious and practical.",
                            PersonalMood = "whimsical"
                        },
                        new
                        {
                            ID = 8,
                            Curiosity = "a romantic person has a richer imagination",
                            MoodDescription = "A person who is romantic is an idealistic, amorous, or soulful person",
                            PersonalMood = "romantic"
                        },
                        new
                        {
                            ID = 9,
                            Curiosity = "in general, mysterious people are very smart",
                            MoodDescription = "Someone  which is mysterious is strange and is not known about or understood",
                            PersonalMood = "mysterious"
                        },
                        new
                        {
                            ID = 10,
                            Curiosity = "the ominous people have nerve problems",
                            MoodDescription = "an ominous person is a person who has a threatening character",
                            PersonalMood = "ominous"
                        },
                        new
                        {
                            ID = 11,
                            Curiosity = "a calm man can complete more tasks than a restless one",
                            MoodDescription = "A calm person does not show or feel any worry, anger, or excitement",
                            PersonalMood = "calm"
                        },
                        new
                        {
                            ID = 12,
                            Curiosity = "someone who is lighthearted can be more focused in everything",
                            MoodDescription = "Someone who is lighthearted is cheerful and happy",
                            PersonalMood = "lighthearted"
                        },
                        new
                        {
                            ID = 13,
                            Curiosity = "Optimistic thinkers have lower rates of hypertension, heart disease, and even risk of cancer, as well as lower rates of mortality in general",
                            MoodDescription = "If you are hopeful, you are fairly confident that something that you want to happen will happen",
                            PersonalMood = "hopeful"
                        },
                        new
                        {
                            ID = 14,
                            Curiosity = "Humor can diffuse anger",
                            MoodDescription = "When you are angry, you feel strong dislike or impatience about something",
                            PersonalMood = "angry"
                        },
                        new
                        {
                            ID = 15,
                            Curiosity = "There is a very strong relationship between age and the types of fears that people report in many different cultures",
                            MoodDescription = "Fearful people are those who are anxious about something or someone",
                            PersonalMood = "fearful"
                        },
                        new
                        {
                            ID = 16,
                            Curiosity = "tense people are much more likely to do extreme things",
                            MoodDescription = "If you are tense, you are anxious and nervous and cannot relax",
                            PersonalMood = "tense"
                        },
                        new
                        {
                            ID = 17,
                            Curiosity = "More than 60% of lonely people are married",
                            MoodDescription = "Someone who is lonely is unhappy because they are alone or do not have anyone they can talk to",
                            PersonalMood = "lonely"
                        },
                        new
                        {
                            ID = 18,
                            Curiosity = "Lights Make a Big Impact on Happiness",
                            MoodDescription = "Someone who is happy has feelings of pleasure, usually because something nice has happened or because they feel satisfied with their life",
                            PersonalMood = "happy"
                        },
                        new
                        {
                            ID = 19,
                            Curiosity = "In general, women are twice as nervous as menIn general, women are twice as nervous as men",
                            MoodDescription = "If someone is nervous, they are frightened or worried about something that is happening or might happen, and show this in their behaviour",
                            PersonalMood = "nervous"
                        },
                        new
                        {
                            ID = 20,
                            Curiosity = "Indifference can be the price of selfishness",
                            MoodDescription = "someone who is indifferent has a total lack of interest in something",
                            PersonalMood = "indifferent"
                        });
                });

            modelBuilder.Entity("MoodForFood.Models.PersonalMood", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CurrentDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MoodName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MoodReason")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("PersonalMood");
                });

            modelBuilder.Entity("MoodForFood.Models.Quote", b =>
                {
                    b.Property<Guid>("QuoteID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("MoodId")
                        .HasColumnType("int");

                    b.Property<string>("QuoteText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Writer")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("QuoteID");

                    b.HasIndex("MoodId");

                    b.ToTable("Quote");

                    b.HasData(
                        new
                        {
                            QuoteID = new Guid("a31116e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 1,
                            QuoteText = "Be positive. Stay happy and don’t let the negativity of the world get you down.",
                            Writer = "Germany Kent"
                        },
                        new
                        {
                            QuoteID = new Guid("a32226e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 2,
                            QuoteText = "Whether you choose to move on from your struggles and enjoy life or waddle in your misery, life will continue.",
                            Writer = "Germany Kent"
                        },
                        new
                        {
                            QuoteID = new Guid("a33396e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 3,
                            QuoteText = "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
                            Writer = "Abraham Lincoln"
                        },
                        new
                        {
                            QuoteID = new Guid("a34446e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 4,
                            QuoteText = "The difference between stupidity and genius is that genius has its limits.",
                            Writer = "Albert Einstein"
                        },
                        new
                        {
                            QuoteID = new Guid("a35555e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 5,
                            QuoteText = "The sky has a huge heart open for all clouds even on the gloomiest of days.",
                            Writer = "Munia Khan"
                        },
                        new
                        {
                            QuoteID = new Guid("a35666e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 6,
                            QuoteText = "Trust the wait. Embrace the uncertainty. Enjoy the beauty of becoming. When nothing is certain, anything is possible.",
                            Writer = "Mandy Hale"
                        },
                        new
                        {
                            QuoteID = new Guid("a37776e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 7,
                            QuoteText = "I describe myself as a big kid with an old soul, I'm very playful whimsical, but I definitely have that old soul as well.",
                            Writer = "Jidenna"
                        },
                        new
                        {
                            QuoteID = new Guid("a38886e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 8,
                            QuoteText = "It’s always better when we’re together.",
                            Writer = "Jack Johnson"
                        },
                        new
                        {
                            QuoteID = new Guid("a39996e6-22ca-4208-93f6-da5b69b1ee26"),
                            MoodId = 9,
                            QuoteText = "I never tell anyone exactly how clever I am. They would be too scared.",
                            Writer = "Eoin Colfer"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-1118-93f6-da5b69b1ee26"),
                            MoodId = 10,
                            QuoteText = "A man’s as miserable as he thinks he is.",
                            Writer = "Seneca"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-2228-93f6-da5b69b1ee26"),
                            MoodId = 11,
                            QuoteText = "Smile, breathe, and go slowly.",
                            Writer = "Thich Nhat Hanh"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-3338-93f6-da5b69b1ee26"),
                            MoodId = 12,
                            QuoteText = "Writers sometimes ruin a book by adding a lighthearted mood at the wrong moment.",
                            Writer = "Gayle Lynds"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-4448-93f6-da5b69b1ee26"),
                            MoodId = 13,
                            QuoteText = "By being yourself you put something wonderful in the world that was not there before.",
                            Writer = "Edwin Elliott"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-5558-93f6-da5b69b1ee26"),
                            MoodId = 14,
                            QuoteText = "For every minute you are angry you lose sixty seconds of happiness.",
                            Writer = " Ralph Waldo Emerson"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-6668-93f6-da5b69b1ee26"),
                            MoodId = 15,
                            QuoteText = "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
                            Writer = "H. P. Lovecraft"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-7778-93f6-da5b69b1ee26"),
                            MoodId = 16,
                            QuoteText = "Yes, well, on stage I'm a different person, very aggressive, very tense. That's not me because I'm humble and polite, unless someone is rude to me.",
                            Writer = "Tricky"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-8888-93f6-da5b69b1ee26"),
                            MoodId = 17,
                            QuoteText = "The soul that sees beauty may sometimes walk alone.",
                            Writer = "Johann Wolfgange Von Goethe"
                        },
                        new
                        {
                            QuoteID = new Guid("a35896e6-22ca-9998-93f6-da5b69b1ee26"),
                            MoodId = 18,
                            QuoteText = "Happiness is when what you think, what you say, and what you do are in harmony.",
                            Writer = "Mahatma Gandhi"
                        },
                        new
                        {
                            QuoteID = new Guid("a31196e6-22ca-1108-93f6-da5b69b1ee26"),
                            MoodId = 19,
                            QuoteText = "Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.",
                            Writer = "Deepak Chopra"
                        },
                        new
                        {
                            QuoteID = new Guid("a35226e6-22ca-4222-93f6-da5b69b1ee26"),
                            MoodId = 20,
                            QuoteText = "You can love me, you can hate me, but just don't be indifferent. Care about it enough to watch.",
                            Writer = "Daniel Cormier"
                        });
                });

            modelBuilder.Entity("MoodForFood.Models.Food", b =>
                {
                    b.HasOne("MoodForFood.Models.Mood", "Mood")
                        .WithMany()
                        .HasForeignKey("MoodID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Mood");
                });

            modelBuilder.Entity("MoodForFood.Models.Quote", b =>
                {
                    b.HasOne("MoodForFood.Models.Mood", "Mood")
                        .WithMany()
                        .HasForeignKey("MoodId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Mood");
                });
#pragma warning restore 612, 618
        }
    }
}
