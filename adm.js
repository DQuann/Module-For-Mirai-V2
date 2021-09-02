/** Nói thẳng ra là cái này khác mẹ gì rules đâu =)) **/
module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin người điều hành bot:
Facebook: Nguyễn Duy Quân ( meNDQ )
Username: @duyquan.social
UID: 1850145360
Giới tính: Gay ( ͡° ͜ʖ ͡°)
Mối quan hệ: Độc thân
Website: https://duyquanprofile.tk/`, event.threadID, event.messageID);
