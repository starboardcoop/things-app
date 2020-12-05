import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({
				name: req.name
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
