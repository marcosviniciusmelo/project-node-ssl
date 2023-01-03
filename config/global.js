// Declaring Global Modules
global.express = require('express') 
global.fs = require('fs')
global.axios = require('axios')
global.app = express.Router()


// Declaring Ports And Host Application URL
let [unsecurePort, securePort, host] = 
    process.argv[2] != '-dev' 
    ?
    [80, 443, 'https://url-base-do-projeto.com.br/'] 
    : 
    [3000, 3001, `http://localhost:3000/`]

// Inputing the vars on the global scope
global.unsecurePort = unsecurePort
global.securePort = securePort
global.host = host
