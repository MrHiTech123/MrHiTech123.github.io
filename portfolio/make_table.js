console.log("Start");
document.writeln("<table class=\"main-table\">");
var consts = {
    image: {
        first: {
            height: "66%",
            width: "100%"
        },
        subsequent: {
            height: "33%",
            width: "49.3%"
        }
    }
};
var things_to_show = ["blockToppler"];
var descriptions = {
    "blockToppler": "<h2>BlockToppler</h2>\n<p>In this ragdoll game, the player controls each limb of the puppet individually,\nwith the goal of throwing the ball at the tower of block and knocking it over.</p>\n\n<br>\n<iframe width=\"560\" height=\"315\" \nsrc=\"https://www.youtube.com/embed/3dV7CsPlnF8?si=qcYYqO7FvWNfkE6Z\" \ntitle=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; \nautoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; \nweb-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen class=\"video\"></iframe>\n"
};
function tdWords(gameName) {
    document.writeln("<td class=\"main-table\">");
    document.writeln(descriptions[gameName]);
    document.writeln("</td>");
}
function image(src, width, height) {
    return "<img src=\"" + src + "\" width=" + width + " height=" + height + ">";
}
function gameImage(gameName, order) {
    var src = "images/" + gameName + "_" + order + ".jpg";
    var width = order ? consts.image.subsequent.width : consts.image.first.width;
    var height = order ? consts.image.subsequent.height : consts.image.first.height;
    return image(src, width, height);
}
function tdImages(gameName) {
    document.writeln("<td class=\"main-table\">");
    document.writeln(gameImage(gameName, 0));
    document.writeln("<br>");
    document.writeln(gameImage(gameName, 1));
    document.writeln(gameImage(gameName, 2));
    document.writeln("</td>");
}
for (var i = 0; i < things_to_show.length; ++i) {
    document.writeln("<tr class=\"main-table\">");
    var gameName = things_to_show[i];
    if (i % 2 == 0) {
        tdWords(gameName);
        tdImages(gameName);
    }
    else {
        tdImages(gameName);
        tdWords(gameName);
    }
    document.writeln("</tr>");
}
document.writeln("</table>");
console.log("Finish");
