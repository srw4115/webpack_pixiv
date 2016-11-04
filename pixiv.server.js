const http = require("http");

const pixivDailyRanking = require("./pixiv.ranking.js");

function initLinks(response) {

    pixivDailyRanking().then(links => {
        response.end(JSON.stringify(links));
    });
}

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    initLinks(response);

}).listen(9101);

console.log("Server running at http://127.0.0.1:9000/");
