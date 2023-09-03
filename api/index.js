const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const routes = require("./routes.json");

const PORT = process.env.PORT || 3010;

// const disableCache = (req, res, next) => {
//   res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
//   res.setHeader('Pragma', 'no-cache');
//   res.setHeader('Expires', '0');
//   next();
// }

server.use(jsonServer.defaults());
server.use(jsonServer.rewriter(routes)); // rewriter fonksiyonu ile routes.json dosyası kullanılıyor

server.use(router);
// server.use(disableCache)

server.listen(PORT, () => {
  console.log("JSON Server is running");
});
