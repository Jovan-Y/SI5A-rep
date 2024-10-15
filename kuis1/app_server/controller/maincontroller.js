// controllers/photographyController.js
const index = (req, res) => {
  const services = [
    { name: "Wedding Photography", description: "Capture beautiful moments of your wedding day." },
    { name: "Event Photography", description: "Professional photos for any event." },
    { name: "Portrait Photography", description: "High-quality portraits for your personal needs." },
  ];
  res.render('index', { title: 'Home - Photography Service', services, layout: 'main' });
};

const contact = (req, res) => {
  res.render('contact', { title: 'Contact Us', layout: 'main' });
};

const book = (req, res) => {
  res.render('book', { title: 'Book a Photography Service', layout: 'main' });
};

module.exports = { index, contact, book };
