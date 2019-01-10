import * as dotenv from 'dotenv';
dotenv.config();

import createServer from './createServer';
import db from './db';
const server = createServer();

// //TODO USE express middleware to handel Cookies (JWT)
// //TODO USE express middleware to  populate current user


server.start({
    cors: {
        credentials: true
    }
}, deets => {
    console.log(`server is now running on port ${deets.port}`);
})