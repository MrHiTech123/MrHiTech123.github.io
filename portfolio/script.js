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
    },
    video: {
        width: "100%"
    },
    projects: {
        all: ["blockToppler", "dieRoll"],
        games: ["blockToppler"],
        calculator_programs: ["dieRoll"]
    }
};
function youtube_video_element(url) {
    return "<iframe width=\"" + consts.video.width + "\" marginwidth=\"0\"\nsrc=\"" + url + "\" \ntitle=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; \nautoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; \nweb-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen class=\"video\"></iframe>";
}
var project_descriptions = {
    "blockToppler": "<h2>BlockToppler</h2>\n<p>In this ragdoll game, the player controls each limb of the puppet individually,\nwith the goal of throwing the ball at the tower of block and knocking it over.</p>\n\n<p><a href=\"https://mrhitech.itch.io/block-toppler\">Download here</a></p>\n\n<br>\n" + youtube_video_element("https://www.youtube.com/embed/3dV7CsPlnF8"),
    "dieRoll": "<h2>DieRoll</h2>\n<p>A Casio calculator app that can be used to roll dice of all sorts.\nFeatures the ability to roll up to 9 of any type of polyhedral die at once, as well as to roll with advantage, disadvantage, or emphasis.\nThe program also includes additional buttons to roll hundred-sided dice, statistics for Dungeons and Dragons characters, and the dice for the board game Root.\nFor games in which only six-sided dice are used, a special submenu is included that makes those options more readily available. The program is easy to use, \nwith a user interface that prioritizes intuitiveness at every level.</p>\n\n<p><a href=\"https://www.planet-casio.com/Fr/programmes/programme4271-1-dieroll-mrhitech-utilitaires-divers.html\">Download here</a></p>\n\n<br>\n\n" + youtube_video_element("https://www.youtube.com/embed/aEt4jaX6Eb8")
};
function tdWords(gameName) {
    var to_return = "";
    to_return += ("<td class=\"main-table\">");
    to_return += (project_descriptions[gameName]);
    to_return += ("</td>");
    return to_return;
}
function image(src, width, height) {
    return "<img src=\"" + src + "\" width=" + width + " height=" + height + ">";
}
function gameImage(gameName, order) {
    var src = "assets/images/" + gameName + "_" + order + ".jpg";
    var width = (order == 0) ? consts.image.first.width : consts.image.subsequent.width;
    var height = (order == 0) ? consts.image.first.height : consts.image.subsequent.height;
    return image(src, width, height);
}
function tdImages(gameName) {
    var to_return = "";
    to_return += ("<td class=\"main-table\">");
    to_return += (gameImage(gameName, 0));
    to_return += ("<br>");
    to_return += (gameImage(gameName, 1));
    to_return += (gameImage(gameName, 2));
    to_return += ("</td>");
    return to_return;
}
function make_table_content(things_to_show) {
    var to_return = "";
    for (var i = 0; i < things_to_show.length; ++i) {
        to_return += "<tr class=\"main-table\">";
        var gameName = things_to_show[i];
        if (i % 2 == 0) {
            to_return += tdWords(gameName);
            to_return += tdImages(gameName);
        }
        else {
            to_return += tdImages(gameName);
            to_return += tdWords(gameName);
        }
        to_return += "</tr>";
    }
    return to_return;
}
function clear_top_bar() {
    var top_bar_content = document.getElementById("navbar-inner");
    top_bar_content.innerHTML = "";
}
function capitalize(to_capitalize) {
    return to_capitalize.charAt(0).toUpperCase() + to_capitalize.slice(1).toLowerCase();
}
function stringify_arr_of_strings(arr) {
    var to_return = "[";
    for (var i in arr) {
        to_return += ("\"" + arr[i] + "\", ");
    }
    to_return += "]";
    console.log(to_return);
    return to_return;
}
function replace(to_be_replaced, to_replace, replace_with) {
    return to_be_replaced.split(to_replace).join(replace_with);
}
function singlify_quotes(to_replace_quotes) {
    return replace(to_replace_quotes, "\"", "'");
}
function put_spaces_and_capitalize(snake_case) {
    var words = snake_case.split("_");
    for (var word in words) {
        words[word] = capitalize(words[word]);
    }
    return words.join(" ");
}
function make_top_bar_button(project_list_name) {
    return "<button class=\"navbar-inner\" onclick=\"draw_table(consts.projects." + project_list_name +
        ");\">" + put_spaces_and_capitalize(project_list_name) + "</button>\n";
}
function make_top_bar_content() {
    var to_return = "<h2 class=\"marginless\">Filters</h2>\n";
    // var to_return: string = "";
    for (var project_list_name in consts.projects) {
        to_return += make_top_bar_button(project_list_name);
    }
    return to_return;
}
function draw_top_bar() {
    clear_top_bar();
    var top_bar_content = make_top_bar_content();
    var top_bar_element = document.getElementById("navbar-inner");
    top_bar_element.innerHTML = top_bar_content;
}
function clear_table() {
    var table_element = document.getElementById("main-table");
    table_element.innerHTML = "";
}
function draw_table(things_to_show) {
    clear_table();
    var table_content = make_table_content(things_to_show);
    var table_element = document.getElementById("main-table");
    table_element.innerHTML = table_content;
}
function main() {
    draw_top_bar();
    draw_table(consts.projects.all);
}
console.log("Working");
main();
