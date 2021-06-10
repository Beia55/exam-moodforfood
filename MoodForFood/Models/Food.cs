using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoodForFood.Models
{
    public class Food
    {
        public Guid ID { get; set; }

        // EF Relation 
        public int MoodID { get; set; }

        public virtual Mood Mood { get; set; }
        // 

        public string FoodForTheMood { get; set; }

        public string Morning { get; set; }

        public string Noon { get; set; }

        public string Evening { get; set; }

        public int PersonalOrDefault { get; set; }
    }
}
