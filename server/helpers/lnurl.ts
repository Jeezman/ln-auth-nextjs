const lnurl = require('lnurl');
import 'dotenv/config';

const lnurlServer = lnurl.createServer({
	host: 'localhost',
    url: process.env.SERVER_BASE_URL,
    port: process.env.PORT,
    endpoint: "/api/user/lnurl",
    auth: {
		apiKeys: [],
	},
    lightning: {
		backend: 'lnd',
		config: {
			hostname: process.env.LND_RPC_URL,
			cert: process.env.LND_TLS_PATH,
            macaroon: process.env.LND_MACROON_PATH
		}
	},
	store: {
		backend: 'memory',
	},
});

export default lnurlServer;