import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import routes from 'routes';
import session from 'session';
import passport from 'auth';
import logger from 'logger';
import errorHandler from 'middleware/error-handler';
import useResponse from 'middleware/use-response';

const app = express();

logger.info('VIEW: ', path.join(__dirname, 'views'));

app.use(morgan('tiny'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(useResponse());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views/404.htm'));
});

app.use(errorHandler);

export default app;
