import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createReduxStore from './helpers/createStore';

const app = express();
app.use(express.static('public'));

app.set('port', process.env.PORT || 3210);

app.get('*', function(req, res){
     const store = createReduxStore();


     res.send(renderer(req, store));
});

app.listen(app.get('port'), function() {
    console.log('server in listening on port: '+ app.get('port'));
});

