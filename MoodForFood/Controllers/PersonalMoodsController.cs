using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoodForFood.Data;
using MoodForFood.Models;

namespace MoodForFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalMoodsController : ControllerBase
    {
        private readonly MoodForFoodContext _context;

        public int personalMenusNo;

        public PersonalMoodsController(MoodForFoodContext context)
        {
            _context = context;
        }

        // GET: api/PersonalMoods
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonalMood>>> GetPersonalMood()
        {
            return await _context.PersonalMood.ToListAsync(); ;
        }

        /*public int calculateNumberOfPersonalMenus() {
            GetPersonalMood();
            return 5;
        }*/

        // GET: api/PersonalMoods/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonalMood>> GetPersonalMood(Guid id)
        {
            var personalMood = await _context.PersonalMood.FindAsync(id);

            if (personalMood == null)
            {
                return NotFound();
            }

            return personalMood;
        }

        // PUT: api/PersonalMoods/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonalMood(Guid id, PersonalMood personalMood)
        {
            if (id != personalMood.ID)
            {
                return BadRequest();
            }

            _context.Entry(personalMood).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonalMoodExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PersonalMoods
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PersonalMood>> PostPersonalMood(PersonalMood personalMood)
        {
            personalMood.CurrentDate = DateTime.Now.ToString();
            _context.PersonalMood.Add(personalMood);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonalMood", new { id = personalMood.ID }, personalMood);
        }

        // DELETE: api/PersonalMoods/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonalMood(Guid id)
        {
            var personalMood = await _context.PersonalMood.FindAsync(id);
            if (personalMood == null)
            {
                return NotFound();
            }

            _context.PersonalMood.Remove(personalMood);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonalMoodExists(Guid id)
        {
            return _context.PersonalMood.Any(e => e.ID == id);
        }
    }
}
