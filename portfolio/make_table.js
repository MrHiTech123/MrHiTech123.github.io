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
var things_to_show = ["blockToppler", "dieRoll"];
var descriptions = {
    "blockToppler": "<h2>BlockToppler</h2>\n<p>In this ragdoll game, the player controls each limb of the puppet individually,\nwith the goal of throwing the ball at the tower of block and knocking it over.</p>\n\n<p><a href=\"https://mrhitech.itch.io/block-toppler\">Download here</a></p>\n\n<br>\n<iframe width=\"560\" height=\"315\" \nsrc=\"https://www.youtube.com/embed/3dV7CsPlnF8\" \ntitle=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; \nautoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; \nweb-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen class=\"video\"></iframe>\n",
    "dieRoll": "<h2>DieRoll</h2>\n<p>A Casio calculator app that can be used to roll dice of all sorts.\nFeatures the ability to roll up to 9 of any type of polyhedral die at once, as well as to roll with advantage, disadvantage, or emphasis.\nThe program also includes additional buttons to roll hundred-sided dice, statistics for Dungeons and Dragons characters, and the dice for the board game root.\nFor games in which only six-sided dice are used, a special submenu is included that makes those options more readily available. The program is easy to use, \nwith a user interface that prioritizes intuitiveness at every level.</p>\n\n<br>\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/aEt4jaX6Eb8\"\ntitle=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; \nclipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" \nreferrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>\n"
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
