module.exports = (app) => {
  app.use((_req, res, _next) => {
    res.status(404).json({ message: "Url not exist" });
  });

  app.use((err, req, res, _next) => {
    console.error("Error: ", req.method, req.path, err);
    if (!res.headersSent) {
      res.status(500).json({
        message: "Internal server error. See logs",
      });
    }
  });
};
