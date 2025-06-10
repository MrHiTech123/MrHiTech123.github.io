console.log("Start");
document.writeln("<table>");
var consts = {
    image: {
        first: {
            height: 200,
            width: 355
        },
        subsequent: {
            height: 100,
            width: 177
        }
    }
};
var things_to_show = ["blockToppler"];
var descriptions = {
    "blockToppler": "<h2>BlockToppler</h2>\n<p>In this ragdoll game, the player controls each limb of the puppet individually,\nwith the goal of throwing the ball at the tower of block and knocking it over.</p>"
};
function tdWords(gameName) {
    document.writeln("<td>");
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
    document.writeln("<td>");
    document.writeln(gameImage(gameName, 0));
    document.writeln("<br>");
    document.writeln(gameImage(gameName, 1));
    document.writeln(gameImage(gameName, 2));
    document.writeln("</td>");
}
for (var i = 0; i < things_to_show.length; ++i) {
    document.writeln("<tr>");
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
