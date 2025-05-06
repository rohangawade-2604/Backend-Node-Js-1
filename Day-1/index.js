const OS = require("os");

console.log(OS.EOL);
console.log(OS.version())
console.log(OS.availableParallelism());
console.log(OS.arch());
console.log(OS.constants);
console.log(OS.cpus());
console.log(OS.endianness())
console.log(OS.devNull);
console.log(OS.freemem());
console.log(OS.getPriority(process.pid));
console.log(OS.homedir());
console.log(OS.hostname());
console.log(OS.loadavg());
console.log(OS.machine());
console.log(OS.networkInterfaces());
console.log(OS.platform());
console.log(OS.setPriority(process.pid, 10));
console.log(OS.tmpdir());
console.log(OS.totalmem());
console.log(OS.type());
console.log(OS.uptime());
console.log(OS.userInfo());
console.log(OS.version());
