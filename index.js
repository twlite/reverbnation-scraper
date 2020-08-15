const fetch = require("node-fetch");
const Song = require("./src/Song");
const Artist = require("./src/Artist");

/**
 * Returns song data
 * @param {string} link link to parse
 */
const fetchData = async (link) => {
    if (!link) throw new Error("Invalid url!");

    try {
        const res = await fetch(link);
        const html = await res.text();
        const rawJSON = html.split("var config = ")[1].split(";")[0];
        const json = JSON.parse(rawJSON);

        const obj = {
            ...new Song(json.PRIMARY_SONG),
            artist: new Artist(json),
            songs: []
        };

        json.SECONDARY_SONGS.forEach(i => {
            obj.songs.push(new Song(i))
        });

        return obj;
    } catch (e) {
        return null;
    }

};

module.exports = fetchData;