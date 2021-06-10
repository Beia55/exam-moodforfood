using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MoodForFood.Models
{
    public class Mood
    {
        [Key]
        public int ID { get; set; }

        public string PersonalMood { get; set; }

        public string MoodDescription { get; set; }

        public string Curiosity { get; set; }
    }
}
