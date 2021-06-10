using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MoodForFood.Models;

namespace MoodForFood.Data
{
    public class MoodForFoodContext : DbContext
    {
        public MoodForFoodContext (DbContextOptions<MoodForFoodContext> options) : base(options)
        {   }

        public DbSet<MoodForFood.Models.PersonalMood> PersonalMood { get; set; }

        public DbSet<MoodForFood.Models.Mood> Mood { get; set; }

        public DbSet<MoodForFood.Models.Food> Food { get; set; }

        public DbSet<MoodForFood.Models.Quote> Quote { get; set; }

        public DbSet<MoodForFood.Models.Statistics> Statistics { get; set; }

        /* --------------   Add rows    ---------------------*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            Models.Mood m1 = new Models.Mood()
            {
                ID = 1,
                PersonalMood = "cheerful",
                MoodDescription = "Someone who is cheerful is happy and shows this in their behaviour",
                Curiosity = "the cheerful man tends to ignore the negative elements more easily"
            };
            Models.Mood m2 = new Models.Mood()
            {
                ID = 2,
                PersonalMood = "reflective",
                MoodDescription = "If you are reflective, you are thinking deeply about something",
                Curiosity = "reflective people are people who support peace"
            };
            Models.Mood m3 = new Models.Mood()
            {
                ID = 3,
                PersonalMood = "gloomy",
                MoodDescription = "If people are gloomy, they are unhappy and have no hope",
                Curiosity = "it causes depression, dejection, or gloom"
            };
            Models.Mood m4 = new Models.Mood()
            {
                ID = 4,
                PersonalMood = "humorous",
                MoodDescription = "If someone is humorous,  he/she is amusing, especially in a clever or witty way.",
                Curiosity = "Supervisors Who Use Humor Are Perceived as Better Leaders"
            };
            Models.Mood m5 = new Models.Mood()
            {
                ID = 5,
                PersonalMood = "melancholy",
                MoodDescription = "Melancholy is an intense feeling of sadness which lasts for a long time and which strongly affects your behaviour and attitudes",
                Curiosity = "People with a melancholic temperament love the societal order of friendships"
            };
            Models.Mood m6 = new Models.Mood()
            {
                ID = 6,
                PersonalMood = "uncertain",
                MoodDescription = "You are not sure or confident about someoane/something",
                Curiosity = "insecure people tend to think twice as hard as others"
            };
            Models.Mood m7 = new Models.Mood()
            {
                ID = 7,
                PersonalMood = "whimsical",
                MoodDescription = "A whimsical person is unusual, playful, and unpredictable, rather than serious and practical.",
                Curiosity = "A capricious person easily moves from one emotional state to another"
            };
            Models.Mood m8 = new Models.Mood()
            {
                ID = 8,
                PersonalMood = "romantic",
                MoodDescription = "A person who is romantic is an idealistic, amorous, or soulful person",
                Curiosity = "a romantic person has a richer imagination"
            };
            Models.Mood m9 = new Models.Mood()
            {
                ID = 9,
                PersonalMood = "mysterious",
                MoodDescription = "Someone  which is mysterious is strange and is not known about or understood",
                Curiosity = "in general, mysterious people are very smart"
            };
            Models.Mood m10 = new Models.Mood()
            {
                ID = 10,
                PersonalMood = "ominous",
                MoodDescription = "an ominous person is a person who has a threatening character",
                Curiosity = "the ominous people have nerve problems"
            };
            Models.Mood m11 = new Models.Mood()
            {
                ID = 11,
                PersonalMood = "calm",
                MoodDescription = "A calm person does not show or feel any worry, anger, or excitement",
                Curiosity = "a calm man can complete more tasks than a restless one"
            };
            Models.Mood m12 = new Models.Mood()
            {
                ID = 12,
                PersonalMood = "lighthearted",
                MoodDescription = "Someone who is lighthearted is cheerful and happy",
                Curiosity = "someone who is lighthearted can be more focused in everything"
            };
            Models.Mood m13 = new Models.Mood()
            {
                ID = 13,
                PersonalMood = "hopeful",
                MoodDescription = "If you are hopeful, you are fairly confident that something that you want to happen will happen",
                Curiosity = "Optimistic thinkers have lower rates of hypertension, heart disease, and even risk of cancer, as well as lower rates of mortality in general"
            };
            Models.Mood m14 = new Models.Mood()
            {
                ID = 14,
                PersonalMood = "angry",
                MoodDescription = "When you are angry, you feel strong dislike or impatience about something",
                Curiosity = "Humor can diffuse anger"
            };
            Models.Mood m15 = new Models.Mood()
            {
                ID = 15,
                PersonalMood = "fearful",
                MoodDescription = "Fearful people are those who are anxious about something or someone",
                Curiosity = "There is a very strong relationship between age and the types of fears that people report in many different cultures"
            };
            Models.Mood m16 = new Models.Mood()
            {
                ID = 16,
                PersonalMood = "tense",
                MoodDescription = "If you are tense, you are anxious and nervous and cannot relax",
                Curiosity = "tense people are much more likely to do extreme things"
            };
            Models.Mood m17 = new Models.Mood()
            {
                ID = 17,
                PersonalMood = "lonely",
                MoodDescription = "Someone who is lonely is unhappy because they are alone or do not have anyone they can talk to",
                Curiosity = "More than 60% of lonely people are married"
            };
            Models.Mood m18 = new Models.Mood()
            {
                ID = 18,
                PersonalMood = "happy",
                MoodDescription = "Someone who is happy has feelings of pleasure, usually because something nice has happened or because they feel satisfied with their life",
                Curiosity = "Lights Make a Big Impact on Happiness"
            };
            Models.Mood m19 = new Models.Mood()
            {
                ID = 19,
                PersonalMood = "nervous",
                MoodDescription = "If someone is nervous, they are frightened or worried about something that is happening or might happen, and show this in their behaviour",
                Curiosity = "In general, women are twice as nervous as menIn general, women are twice as nervous as men"
            };
            Models.Mood m20 = new Models.Mood()
            {
                ID = 20,
                PersonalMood = "indifferent",
                MoodDescription = "someone who is indifferent has a total lack of interest in something",
                Curiosity = "Indifference can be the price of selfishness"
            };

            modelBuilder.Entity<Models.Mood>().HasData(m1);
            modelBuilder.Entity<Models.Mood>().HasData(m2);
            modelBuilder.Entity<Models.Mood>().HasData(m3);
            modelBuilder.Entity<Models.Mood>().HasData(m4);
            modelBuilder.Entity<Models.Mood>().HasData(m5);
            modelBuilder.Entity<Models.Mood>().HasData(m6);
            modelBuilder.Entity<Models.Mood>().HasData(m7);
            modelBuilder.Entity<Models.Mood>().HasData(m8);
            modelBuilder.Entity<Models.Mood>().HasData(m9);
            modelBuilder.Entity<Models.Mood>().HasData(m10);
            modelBuilder.Entity<Models.Mood>().HasData(m11);
            modelBuilder.Entity<Models.Mood>().HasData(m12);
            modelBuilder.Entity<Models.Mood>().HasData(m13);
            modelBuilder.Entity<Models.Mood>().HasData(m14);
            modelBuilder.Entity<Models.Mood>().HasData(m15);
            modelBuilder.Entity<Models.Mood>().HasData(m16);
            modelBuilder.Entity<Models.Mood>().HasData(m17);
            modelBuilder.Entity<Models.Mood>().HasData(m18);
            modelBuilder.Entity<Models.Mood>().HasData(m19);
            modelBuilder.Entity<Models.Mood>().HasData(m20);

            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("DE31A3BA-F0F4-42E4-9D75-6BCE096837CE"),
                MoodID = m1.ID,
                FoodForTheMood = "You need something to keep you in the mood",
                Morning = "milkshake of parsley",
                Noon = "cauliflower salad, broccoli and cabbage",
                Evening = "cinnamon tea",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("6B229864-7CD8-4B43-910A-D36B265F8955"),
                MoodID = m2.ID,
                FoodForTheMood = "You need something to help you focus",
                Morning = "Walnuts",
                Noon = "pea soup",
                Evening = "raspberries",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("822E39FC-626A-4AE5-B29E-00A3B5F59729"),
                MoodID = m3.ID,
                FoodForTheMood = "You need something to enlighten you",
                Morning = "mini pancakes with maple syrup",
                Noon = "oysters",
                Evening = "chilli con carne",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("A35896E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodID = m4.ID,
                FoodForTheMood = "You need something to keep your energy going",
                Morning = "raisins",
                Noon = "almonds",
                Evening = "oranges",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("F999DF1C-F373-4F18-9531-8A91BF278C30"),
                MoodID = m5.ID,
                FoodForTheMood = "You need something that keeps you on the positive side",
                Morning = "avocado bread and tomatoes",
                Noon = "lasagne",
                Evening = "apricots",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("374C240A-EA7A-4278-AB2C-A4F24B6A9D73"),
                MoodID = m6.ID,
                FoodForTheMood = "You need something to give you a boost",
                Morning = "nut butter",
                Noon = "edamame food",
                Evening = "chocolate-covered prosecco strawberries",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("3E98B141-AEF8-47C2-964A-24681174B8B2"),
                MoodID = m7.ID,
                FoodForTheMood = "You need something to soften you",
                Morning = "watermelon",
                Noon = "beef with mushroom sauce",
                Evening = "roasted chickpeas",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("2D2BF732-4F7D-48CF-B83C-6ABFB4EF1B20"),
                MoodID = m8.ID,
                FoodForTheMood = "You need something to keep your feet on the ground",
                Morning = "omelet",
                Noon = "black bean cream soup",
                Evening = "sushi",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("0BD50897-BBA0-443B-91F6-ABAEB82EA69C"),
                MoodID = m9.ID,
                FoodForTheMood = "You need something to make you shine",
                Morning = "nachos",
                Noon = "chicken and vegetable pie",
                Evening = "flaxseed",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("85BD7E5B-6C7C-4C3B-8515-8BA4D0B903D4"),
                MoodID = m10.ID,
                FoodForTheMood = "You need something to sweeten you",
                Morning = "Red bell peppers and cucumbers",
                Noon = "warm quinoa, spinach, and shiitake salad",
                Evening = "honey",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("F8E4EA64-C634-4D9E-B45C-6CC926A42604"),
                MoodID = m11.ID,
                FoodForTheMood = "You need something like you",
                Morning = "strawberries",
                Noon = "chanterelle mushroom sauce with risotto garnish",
                Evening = "walnut-miso noodles",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("9E1D42A1-F2C0-4108-BA89-323391E459AB"),
                MoodID = m12.ID,
                FoodForTheMood = "You need something pleasant and refined",
                Morning = "broccoli boiled and fried in egg with leurda",
                Noon = "blue potatoes",
                Evening = "baked asparagus",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("0143381C-CCB3-425F-A8F3-D2754E262827"),
                MoodID = m13.ID,
                FoodForTheMood = "You need something nutritious, but easy",
                Morning = "boiled eggs with tomatoes and toast",
                Noon = "brussels sprouts soup",
                Evening = "salsa",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("9A60E18E-464B-42FB-AC98-205F814C7F1A"),
                MoodID = m14.ID,
                FoodForTheMood = "You need something to relax you, to make you feel good",
                Morning = "chocolate",
                Noon = "sweet potato fries",
                Evening = "avocado",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("FADD7079-40B2-4DB9-82A7-AC36E64661C4"),
                MoodID = m15.ID,
                FoodForTheMood = "You need something to give you courage / strength",
                Morning = "oatmeal",
                Noon = "lentil and vegetable stew with kale",
                Evening = "kefir",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("51CFDFE1-42B4-4554-8E68-729482BDA899"),
                MoodID = m16.ID,
                FoodForTheMood = "You need something to calm you down",
                Morning = "Green Tea",
                Noon = "spinach soup",
                Evening = "pistachios",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("D50F9C84-0826-4642-893A-E7DF2C9AA230"),
                MoodID = m17.ID,
                FoodForTheMood = "You need something to fill you with love, to improve your mood",
                Morning = "cottage cheese",
                Noon = "okra dredged in egg and cornmeal and fried to a golden crisp",
                Evening = "spaghetti with red sauce",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("98227B05-D52B-4D30-B96E-ED1051CB704B"),
                MoodID = m18.ID,
                FoodForTheMood = "You need something to keep you in the mood",
                Morning = "Spinach - Ricotta Quiche",
                Noon = "grilled chicken with boiled Mexican vegetables",
                Evening = "curry",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("14BEAE34-C537-4D63-9D2D-056EBFAF8214"),
                MoodID = m19.ID,
                FoodForTheMood = "You need something to fill your confidence",
                Morning = "coconut",
                Noon = "greek soup",
                Evening = "frozen berries",
            });
            modelBuilder.Entity<Models.Food>().HasData(new Models.Food()
            {
                ID = new Guid("74C1BDEB-4E70-4AB7-8CA0-F0CC79A8AE99"),
                MoodID = m20.ID,
                FoodForTheMood = "You need something to fill you with emotions",
                Morning = "bananas",
                Noon = "red potatoes with fish (salmon)",
                Evening = "figs",
            });

            // Quotes

            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A31116E6-22CA-4208-93F6-DA5B69B1EE26"), 
                MoodId = m1.ID,
                QuoteText = "Be positive. Stay happy and don’t let the negativity of the world get you down.",
                Writer = "Germany Kent",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A32226E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodId = m2.ID,
                QuoteText = "Whether you choose to move on from your struggles and enjoy life or waddle in your misery, life will continue.",
                Writer = "Germany Kent",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A33396E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodId = m3.ID,
                QuoteText = "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
                Writer = "Abraham Lincoln",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A34446E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodId = m4.ID,
                QuoteText = "The difference between stupidity and genius is that genius has its limits.",
                Writer = "Albert Einstein",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35555E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodId = m5.ID,
                QuoteText = "The sky has a huge heart open for all clouds even on the gloomiest of days.",
                Writer = "Munia Khan",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35666E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodId = m6.ID,
                QuoteText = "Trust the wait. Embrace the uncertainty. Enjoy the beauty of becoming. When nothing is certain, anything is possible.",
                Writer = "Mandy Hale",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A37776E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodId = m7.ID,
                QuoteText = "I describe myself as a big kid with an old soul, I'm very playful whimsical, but I definitely have that old soul as well.",
                Writer = "Jidenna",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A38886E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodId = m8.ID,
                QuoteText = "It’s always better when we’re together.",
                Writer = "Jack Johnson",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A39996E6-22CA-4208-93F6-DA5B69B1EE26"),
                MoodId = m9.ID,
                QuoteText = "I never tell anyone exactly how clever I am. They would be too scared.",
                Writer = "Eoin Colfer",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-1118-93F6-DA5B69B1EE26"),
                MoodId = m10.ID,
                QuoteText = "A man’s as miserable as he thinks he is.",
                Writer = "Seneca",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-2228-93F6-DA5B69B1EE26"),
                MoodId = m11.ID,
                QuoteText = "Smile, breathe, and go slowly.",
                Writer = "Thich Nhat Hanh",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-3338-93F6-DA5B69B1EE26"),
                MoodId = m12.ID,
                QuoteText = "Writers sometimes ruin a book by adding a lighthearted mood at the wrong moment.",
                Writer = "Gayle Lynds",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-4448-93F6-DA5B69B1EE26"),
                MoodId = m13.ID,
                QuoteText = "By being yourself you put something wonderful in the world that was not there before.",
                Writer = "Edwin Elliott",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-5558-93F6-DA5B69B1EE26"),
                MoodId = m14.ID,
                QuoteText = "For every minute you are angry you lose sixty seconds of happiness.",
                Writer = " Ralph Waldo Emerson",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-6668-93F6-DA5B69B1EE26"),
                MoodId = m15.ID,
                QuoteText = "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
                Writer = "H. P. Lovecraft",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-7778-93F6-DA5B69B1EE26"),
                MoodId = m16.ID,
                QuoteText = "Yes, well, on stage I'm a different person, very aggressive, very tense. That's not me because I'm humble and polite, unless someone is rude to me.",
                Writer = "Tricky",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-8888-93F6-DA5B69B1EE26"),
                MoodId = m17.ID,
                QuoteText = "The soul that sees beauty may sometimes walk alone.",
                Writer = "Johann Wolfgange Von Goethe",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35896E6-22CA-9998-93F6-DA5B69B1EE26"),
                MoodId = m18.ID,
                QuoteText = "Happiness is when what you think, what you say, and what you do are in harmony.",
                Writer = "Mahatma Gandhi",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A31196E6-22CA-1108-93F6-DA5B69B1EE26"),
                MoodId = m19.ID,
                QuoteText = "Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.",
                Writer = "Deepak Chopra",
            });
            modelBuilder.Entity<Models.Quote>().HasData(new Models.Quote()
            {
                QuoteID = new Guid("A35226E6-22CA-4222-93F6-DA5B69B1EE26"),
                MoodId = m20.ID,
                QuoteText = "You can love me, you can hate me, but just don't be indifferent. Care about it enough to watch.",
                Writer = "Daniel Cormier",
            });

        }

        /* --------------   Add rows    ---------------------*/

    }
}
