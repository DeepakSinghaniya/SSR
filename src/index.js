
import express from 'express';
import renderer from './helpers/renderer';


const app = express();

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
     res.send(renderer(req));
});

app.listen(app.get('port'), function() {
    console.log('server in listening on port: '+ app.get('port'));
});

