
// ======== Node modules ========
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// ======== local modules ========
const sreg = require('./sreg');
sreg.register("dbconn", require('./db.conn'));
const registerRouter = require('./routes/register.route')(app);


// ======== Properties ========
const SERVER_PORT = 3000;

/*************
 *    App
 ************/

app.use(cors());
app.use(bodyParser.json())

app.listen(SERVER_PORT, (expErr) => {
    
    if (expErr) {
        throw new Error(`Failed to start web server: ${expErr}`);
    }
    console.info(`Web server listening on http://localhost:${SERVER_PORT}`);
    
});

registerRouter.initRoutes();

