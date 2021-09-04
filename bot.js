const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NDQ & PTAT",
  description: "Thông tin bot và phần cứng đang hoạt động",
  commandCategory: "Info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://uploads.disquscdn.com/images/81f2257d8a2cba4fd000b3a5f6a090f724d0fd6a9324bcd51687ee666df685b5.gif?fbclid=IwAR1BpNIpX8QCdKbSKfdi7vhOth_Fl5yVx6YMnyNBKlyTcPKqxGuCM-1W4EI",
  ];
   var callback = () => api.sendMessage({body:`Thông tin bot và phần cứng đang hoạt động:
• Thông tin bot đang sử dụng: 
• CPU:  
• RAM: 
• SSD or HDD: 
• Windows Version: 
• Network: 
• Uptime max: 
• Độ ổn định: Medium
• Language: Tiếng Việt
• Computer name: 
» Updating....`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };