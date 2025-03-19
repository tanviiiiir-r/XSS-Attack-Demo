const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.cookie('session', 'secret-session-id', { httpOnly: false, secure: false }); // Vulnerable cookie
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

