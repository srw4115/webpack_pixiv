"use strict";
const got = require("got");
const cheerio = require("cheerio");

module.exports = () => {
    return got("http://www.pixiv.net/ranking.php?p=1").then(res => {
        const $ = cheerio.load(res.body);
        return $(".ranking-image-item img").map((i, v) => {
            const href = $(v).attr("data-src");
            return { id: i, url: href };
        }).get();
    });
};
