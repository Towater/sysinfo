const os = require("os")

console.log("")
console.log("系统平台: "+ os.platform()+"   "+os.arch())
console.log("发行版本: "+ os.type()+"   "+os.release())
console.log("主机名: "+os.hostname())
console.log("处理器信息: "+ os.cpus()[0]["model"] +"   "+os.cpus()[0]["speed"]+" MHZ"+"   "+os.cpus().length+" cores")
console.log("内存信息(free/total): "+parseInt(os.freemem()/1048576)+" / "+parseInt(os.totalmem()/1048576)+" M")
console.log("已运行时间: "+parseInt(os.uptime()/3600) +" 小时")
console.log("")