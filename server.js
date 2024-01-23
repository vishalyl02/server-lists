const express = require('express');
const casual = require('casual');
const app = express();
const port = 3002;
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

const generateDoctorsData = () => {
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Others'];

  const doctors = [];

  for (let i = 1; i <= 50; i++) {
    const doctor = {
      id: i,
      name: `Dr. ${casual.last_name}`,
      city: casual.random_element(cities), // Randomly select a city from the list
      age: casual.integer(30, 65), // Generate a random age between 30 and 65
      expertise: casual.random_element(['Orthopedic Surgeon', 'Cardiologist', 'Dermatologist', 'Pediatrician']), // Randomly select an expertise
      // Add more fields as needed
    };

    doctors.push(doctor);
  }

  return doctors;
};

app.get('/doctors', (req, res) => {
  const doctors = generateDoctorsData();
  res.json({ doctors });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
