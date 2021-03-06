/**
 * Created by Maxime Baconnais on 29/08/2017.
 */

const httpProxy = require('http-proxy');
const config = require('../config');

let proxy = httpProxy.createProxyServer({
	target: {
		host: config.plex.host,
		port: config.plex.port
	}
});

proxy.on('error', (err, req, res) => {
  res.writeHead(404, {});
  res.end('Plex not respond in time, proxy request fails');
});

module.exports = proxy;