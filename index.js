var date = new Date();
var startTime = date.getTime();

date = new Date('2017/05/20 00:00:00');
var endTime = date.getTime();

var restTime = endTime - startTime;
var restSeconds = seconds = Math.floor(restTime / 1000);

setInterval(function() {
    var days = Math.floor(restSeconds / (24 * 60 * 60));
    seconds -= days * 24 * 60 * 60;
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    var minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    document.getElementById('container').innerHTML = `剩余时间：${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    // document.write(`剩余时间：${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`);
    seconds = --restSeconds;
}, 1000);