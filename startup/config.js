const config =require('config');

module.exports={
    port:config.get('port'),
    db_user:config.get('db_user'),
    db_password:config.get('db_password'),
    db_database:config.get('db_database'),
    db_host:config.get('db_host')
}