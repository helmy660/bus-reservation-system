import express from 'express';
import * as bodyParser from 'body-parser';
import { RoutingControllersOptions, useExpressServer } from 'routing-controllers';

const app = express();
const routingControllersOptions: RoutingControllersOptions = {
  classTransformer: true,
  validation: false,
  defaultErrorHandler: false,
  routePrefix: '/api',
  // register controllers routes
  controllers: [__dirname + '/controllers/**/*.ts'],
  middlewares: [__dirname + '/middlewares/**/*.ts']
};

// Parse class-validator classes into JSON Schema:
app.use(bodyParser.json());
useExpressServer(app, routingControllersOptions);

export default app;