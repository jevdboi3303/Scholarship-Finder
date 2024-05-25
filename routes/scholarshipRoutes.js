const express = require('express');
const router = express.Router();
const Scholarship = require('../models/scholarshipModel');

router.get('/filter', async (req, res) => {
  try {
    const { name, scholarshipType, faculty, gpa, gender, indigenous, disability, race, nationality, year } = req.query;
    const query = {};

    if (name) query.name = { $regex: new RegExp(name, 'i') }; // Case-insensitive search
    if (scholarshipType) query.scholarshipType = { $regex: new RegExp(scholarshipType, 'i') };
    if (faculty) query.faculty = { $regex: new RegExp(faculty, 'i') };
    if (gpa) query.gpa = { $gte: parseFloat(gpa) };
    if (gender) query.gender = { $regex: new RegExp(gender, 'i') };
    if (indigenous) query.indigenous = indigenous === 'true';
    if (disability) query.disability = disability === 'true';
    if (race) query.race = { $regex: new RegExp(race, 'i') };
    if (nationality) query.nationality = { $regex: new RegExp(nationality, 'i') };
    if (year) query.year = { $regex: new RegExp(year, 'i') };

    console.log('Query:', query); // Log the query

    const scholarships = await Scholarship.find(query);
    console.log('Results:', scholarships); // Log the results

    res.json(scholarships);
  } catch (error) {
    console.error('Error filtering scholarships:', error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to filter scholarships' });
  }
});

module.exports = router;
