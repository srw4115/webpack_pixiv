"use strict";
const got = require("got");
const cheerio = require("cheerio");

module.exports = () => {
    return got("http://www.pixiv.net/ranking.php?p=1").then(res => {
        const $ = cheerio.load(res.body);

        return $(".ranking-item").map((i, elem) => {
            const item = $(elem);
            const itemInfo = $(elem).data();

            const userInfo = item.find(".user-container").data();

            const href = $(elem).find(".ranking-image-item img").attr("data-src");

            return {
                id: itemInfo.id,
                url: href,
                user: userInfo
            };

        }).get();
    });
};
