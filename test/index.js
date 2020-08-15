(async () => {
    const reverbnation = require("../index");
    const fs = require("fs");
    const URL = "https://www.reverbnation.com/marshmello60/song/28858672-marshmello-moving-on-official-music";

    const stream = await reverbnation(URL);
    const data = await reverbnation.getInfo(URL);
    const writer = stream.pipe(fs.createWriteStream(`./${data.title}.mp3`));

    writer.on("finish", () => console.log("Done!"));
})();