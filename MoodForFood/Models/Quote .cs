using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoodForFood.Models
{
    public class Quote
    {
        public Guid QuoteID { get; set; }
        // EF Relation 
        public int MoodId { get; set; }

        public virtual Mood Mood { get; set; }
        // 
        public string QuoteText { get; set; }

        public string Writer { get; set; }

        public int MostLovedQuote  { get; set; }
    }
}
