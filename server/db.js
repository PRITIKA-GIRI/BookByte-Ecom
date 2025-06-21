const{Pool}=require('pg');
const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'bookbyte',
    password:'dbbdpostgres',
    port:5432,
});
module.exports=pool;