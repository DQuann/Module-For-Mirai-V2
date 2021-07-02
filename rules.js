module.exports.config = {
	name: "rules",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team - NDQ",
	description: "( Được mod từ module Penis của Mirai Source ) ",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Điều khoản sử dụng bot trong box:
⚠ Vui lòng chấp hàn nghiêm chỉnh để tránh bị hạn chế dùng lệnh ( user ban )
1: Không spam lệnh bot, spam prefix quá nhiều gây die bot,cp....
2: Không gây war với bot ( modules sim ... ) vì đây không phải người dùng tương tác thật !
3: Không lạm dụng bot vào mục đích xấu.,...
4: Cập nhật thêm ....
© Bot Made By Mirai Team `, event.threadID, event.messageID);
