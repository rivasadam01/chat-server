const bodyParser = require('body-parser')
const auth=require('../routers/auth');
const home=require('../routers/home');

module.exports=(app)=>{
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use('/',[home,auth]);
}