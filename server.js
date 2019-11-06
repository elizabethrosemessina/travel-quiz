const express = require('express');

const app = express();
const PORT = process.env.PORT = 12345;

app.use(express.static('viewer'));

app.listen(PORT, () => {
	console.log('Server is running at:', PORT);
});
