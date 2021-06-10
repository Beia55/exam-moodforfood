using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoodForFood.Models
{
    public class PersonalMood
    {
        public Guid ID { get; set; }

        public string MoodName { get; set; }

        public string CurrentDate { get; set; }

        public string MoodReason { get; set; }

    }
}
