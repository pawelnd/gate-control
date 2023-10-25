const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
const PORT = 30945;

const users = {
    user: 'pass',
};


let pressed = true



const auth = basicAuth({
    users,
    challenge: true, // Sends a 401 response with the WWW-Authenticate header
    unauthorizedResponse: 'Unauthorized',
});


app.use(auth);
app.use(express.static('public'));


app.get('/set', (req, res) => {
    console.log('set' + new Date().getTime())
    pressed = true
    res.send()
});

app.get('/get', (req, res) => {
    console.log('get' + new Date().getTime())
    res.send(pressed)
    pressed = false
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});