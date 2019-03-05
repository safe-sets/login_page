const { app } = require('./server.js');
const PORT = 9001;

/**
 * This file's sole use is to provide a reference to the app variable
 * originally declared within the main Express file. This allows us
 * to encapsulate starting the server to this file only.
 *
 * NOTE: If using nodemon, use Nodemon to point to this file, rather than
 * the server.js file.
 */

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
