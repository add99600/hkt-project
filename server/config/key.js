if(process.env.NODE_ENV==='productions'){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev')
}