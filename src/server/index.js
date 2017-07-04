import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello stuff.');
});

app.listen(9090, () => { console.info('Listening on :9090'); });
