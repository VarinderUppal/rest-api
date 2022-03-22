const express = require('express');
const swaggerUi = require('swagger-ui-express');
const dataRouter = require('./routes/dataRoutes');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);

app.use(express.json());
app.use('/api/data', dataRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
