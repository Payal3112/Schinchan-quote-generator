const quotes = [
  // Shinchan
  {
    quote: "Let's go home and eat Chocobi!",
    character: "Shinchan",
    image: "./schinchna 1.jpeg"
  },
  {
    quote: "I'm just a kid, I don't do stress!",
    character: "Shinchan",
    image: "./schinchna 2.jpeg"
  },
  {
    quote: "I make everyone laugh with my pants dance!",
    character: "Shinchan",
    image: "./schinchan3.jpeg"
  },

  // Himawari
  {
    quote: "I want diamonds, not toys!",
    character: "Himawari",
    image: "./himawari1.jpeg"
  },
  {
    quote: "Shinchan took my lipstick!",
    character: "Himawari",
    image: "./Himaawari2.jpeg"
  },

  // Misae (Mom)
  {
    quote: "SHINCHAN! CLEAN YOUR ROOM!",
    character: "Misae (Mom)",
    image: "./misae1.jpeg"
  },
  {
    quote: "Why did I even become a mom?!",
    character: "Misae (Mom)",
    image: "./misae 2.jpeg"
  },

  // Harry (Dad)
  {
    quote: "I just want to read my newspaper...",
    character: "Harry Nohara (Dad)",
    image: "./hari1.jpeg"
  },
  {
    quote: "Why do I even go to work?!",
    character: "Harry Nohara (Dad)",
    image: "./hari2.png"
  }
];

const btn = document.getElementById('new-quote');
const quoteText = document.getElementById('quote');
const charText = document.getElementById('character');
const charImg = document.getElementById('char-img');

btn.addEventListener('click', () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${random.quote}"`;
  charText.textContent = `— ${random.character}`;
  charImg.src = random.image;
});
