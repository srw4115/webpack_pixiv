const http = require("http");

const pixivDailyRanking = require("./pixiv.ranking.js");
var  List = [];
var  requestEnd = false;



function initLinks(response) {
	
    pixivDailyRanking().then(links => {
        List = links;
        response.end(JSON.stringify(List));
    });
}

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    initLinks(response);

}).listen(9000);

console.log("Server running at http://127.0.0.1:9000/");
