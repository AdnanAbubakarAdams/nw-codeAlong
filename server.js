// Start the server and listen for incoming changes
// import the app
const app = require('./app');

require('dotenv').config();

// Have the app listen on this port
const PORT = process.env.PORT || 1991
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

