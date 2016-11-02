var http = require("http");

const pixivDailyRanking = require("./pixiv.ranking.js");
var List = [];



function initLinks() {
    pixivDailyRanking().then(links => {
        List = links;
    });
}

initLinks();

http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    initLinks();

    response.end(JSON.stringify(List));

}).listen(9000);

console.log("Server running at http://127.0.0.1:9000/");
