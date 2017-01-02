const http = require("http");
const url = require('url');


function downloadImage(dataLink, appResponse, isEnableCache) {

    const link = url.parse(dataLink, true);

    const options = {
        hostname: link.host,
        path: link.path,
        headers: {
            "Referer": "http://www.pixiv.net/"
        }
    };


    http.get(options, (response) => {

        response.setEncoding('binary');

        var body = "";

        response.on('data', (data) => {
            body += data;
        });

        response.on('end', () => {

            data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body, "binary").toString("base64");

            if(response.statusCode == "200"){
                appResponse.end(data);
            }
        })
    });
}

function downLoadIcon(appRequest, appResponse) {
    const linkData = url.parse(appRequest.url, true);
    const link = linkData.query.link;
    downloadImage(link, appResponse, true);
}


function getPixivList(appRequest, appResponse) {

    const linkData = url.parse(appRequest.url, true);

    var options = {
        hostname: "www.pixiv.net",
        path: "/ranking.php?p=" + linkData.query.page + "&format=json",
        headers: {
            "Referer": "http://www.pixiv.net/",
            "Content-Type": "application/json"
        }
    };

    http.get(options, (response) => {

        var body = '';

        response.on('data', (data) => {
            body += data;
        });

        response.on('end', () => {
            appResponse.end(body);
        })
    });
}

function getDetailImage(appRequest, appResponse) {
    const linkData = url.parse(appRequest.url, true);
    var  link = linkData.query.link;
    link = link.replace(/c.*?img-master/g, 'img-original').replace(/_master.*?\.jpg/g, '.');

    downloadImage(link + 'png', appResponse);
    downloadImage(link + 'jpg', appResponse);
}

http.createServer((request, response) => {

    if (request.url.match("/pixiv")) {
        getPixivList(request, response);
    }

    if (request.url.match("/downLoadImage")) {
        downLoadIcon(request, response);
    }

    if (request.url.match("/detailImage")) {
        getDetailImage(request, response);
    }

}).listen(9101);

console.log("Server running at http://127.0.0.1:9101/");
