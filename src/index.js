const { env, port } = require('./core/config');
const logger = require('./core/logger')('Grab-API');
const server = require('./core/server');

const app = server.listen(port, (err) => {
  if (err) {
    logger.fatal(err, 'Gagal menjalankan server Grab API.');
    process.exit(1);
  } else {
    logger.info(
      `Server Grab API kelompok backend berjalan di port ${port} (Environment: ${env})`
    );
  }
});

process.on('uncaughtException', (err) => {
  logger.fatal(
    err,
    'Terjadi error fatal (Uncaught exception). Server akan dimatikan.'
  );

  app.close(() => process.exit(1));

  setTimeout(() => process.abort(), 1000).unref();
  process.exit(1);
});
