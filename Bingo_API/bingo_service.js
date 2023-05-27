const Service = require('node-windows').Service

const svc = new Service({
    name: "Bingo_API",
    description: "Servidor para el sistema administrativo del Bingo",
    script: "C:\\Users\\Bojtronic\\Documents\\TRABAJO\\Bingo\\Bingo\\Bingo_API\\index.js"
})

svc.on('install', function(){
    svc.start()
})

svc.install()