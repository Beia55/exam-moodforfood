using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MoodForFood.Models
{
    public class Statistics
    {
        public Guid StatisticsID { get; set; }

        public string UserFirstName { get; set; }

        public string UserLastName { get; set; }

        public int UserAge { get; set; }

        public int Rating { get; set; }
        
        public string WhatLike { get; set; }
        
        public string WhatDoNotLike { get; set; }
    }
}
