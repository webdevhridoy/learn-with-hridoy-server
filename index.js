const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

const courses = require('./courses.json');
const category = require('./category.json');
const faq = require('./faq.json');


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/categories', (req, res) => {
    res.send(category);
});

app.get('/categories/:name', (req, res) => {
    const category = (req.params.name);

    const allCategory = courses.filter(item => item.category === category) || {};
    res.send(allCategory);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;

    const allCourses = courses.find(item => item.id === id) || {};
    console.log(allCourses);
    res.send(allCourses);
});

app.get('/faq', (req, res) => {
    res.send(faq);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});