// Define our route handlers here
// Seperations of concerns

// import express library
const express = require('express');

// import our stuff (our files and components)
const studentsData = require('./studentsData.json')

// initialize express app
const app = express();

// Define our routes

// Healthcheck route
app.get('/', (req, res) => {
    res.json({message: 'Server is guuccci'});
});

// All student
app.get('/students', (req, res) => {
    try{
        const { students } = studentsData;
        res.status(200).json({data: students});
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// single student 
app.get('/students/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { students } = studentsData;
        
        const student = students.find(el => el.id === id);
        if (student) {
            res.status(200).json({data: student });
        } else {
            res.status(404).json({ error: `could not find student with id ${id}`})
        }
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = app;