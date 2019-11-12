const express = require ("express");
const app = express();
app.use(express.json());

let feedback = [

];

app.get('/', (req, res) => {
    res.send(feedback);
});

app.get('/api/courses/:id', (req, res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if (!course) res.status(404).send('Request was not found');
   res.send(course);

});

app.post('/submit', (req, res) => {
   const inputs = {
        id : feedback.length + 1,
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
   };
   feedback.push(inputs);
   res.send(inputs);
 });


//PORT

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

const port = 3000;
app.listen(3000, () => console.log('Listening on port ...' + port));