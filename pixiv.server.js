const http = require("http");
const url = require('url');

const pixivDailyRanking = require("./pixiv.ranking.js");

function downloadIconImage(appRequest, appResponse) {

    var request = require('request').defaults({ encoding: null });

    var linkData = url.parse(appRequest.url, true);
    
    request.get(linkData.query.link, {
            headers: { referer: "http://www.pixiv.net/" }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString("base64");
                appResponse.end(JSON.stringify(data));
            }
        });
}

function initLinks(response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    pixivDailyRanking().then(links => {
        response.end(JSON.stringify(links));
    });
}

http.createServer(function (request, response) {

    if (request.url == "/pixiv") {
        initLinks(response);
    }

    if (request.url.match("/userIcon")) {
        downloadIconImage(request, response);
    }

}).listen(9101);

console.log("Server running at http://127.0.0.1:9000/");
