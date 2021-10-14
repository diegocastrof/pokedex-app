const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
	console.log('Server up in port ', PORT);
});
