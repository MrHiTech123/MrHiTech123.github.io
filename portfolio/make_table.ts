

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
		calculator_programs: ["dieRoll"],
		games: ["blockToppler"]
	}
	
}

function youtube_video_element(url: string) : string {
	return `<iframe width="` + consts.video.width + `" marginwidth="0"
src="` + url + `" 
title="YouTube video player" frameborder="0" allow="accelerometer; 
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="video"></iframe>`
}



var descriptions = {
	"blockToppler": `<h2>BlockToppler</h2>
<p>In this ragdoll game, the player controls each limb of the puppet individually,
with the goal of throwing the ball at the tower of block and knocking it over.</p>

<p><a href="https://mrhitech.itch.io/block-toppler">Download here</a></p>

<br>
` + youtube_video_element("https://www.youtube.com/embed/3dV7CsPlnF8"),

	"dieRoll": `<h2>DieRoll</h2>
<p>A Casio calculator app that can be used to roll dice of all sorts.
Features the ability to roll up to 9 of any type of polyhedral die at once, as well as to roll with advantage, disadvantage, or emphasis.
The program also includes additional buttons to roll hundred-sided dice, statistics for Dungeons and Dragons characters, and the dice for the board game Root.
For games in which only six-sided dice are used, a special submenu is included that makes those options more readily available. The program is easy to use, 
with a user interface that prioritizes intuitiveness at every level.</p>

<br>

` + youtube_video_element("https://www.youtube.com/embed/aEt4jaX6Eb8")
}


function tdWords(gameName: string) {
	document.writeln("<td class=\"main-table\">");
	
	document.writeln(descriptions[gameName])
	
	document.writeln("</td>");
}

function image(src: string, width: string, height: string) : string {
	return "<img src=\"" + src + "\" width=" + width + " height=" + height + ">";
}

function gameImage(gameName: string, order: number) : string {
	var src: string = "images/" + gameName + "_" + order + ".jpg";
	
	var width: string = (order == 0)? consts.image.first.width : consts.image.subsequent.width;
	var height: string = (order == 0)? consts.image.first.height : consts.image.subsequent.height;
	
	return image(src, width, height);
}

function tdImages(gameName: string) {
	document.writeln("<td class=\"main-table\">");
	
	document.writeln(gameImage(gameName, 0));
	document.writeln("<br>");
	
	document.writeln(gameImage(gameName, 1));
	document.writeln(gameImage(gameName, 2));
	
	document.writeln("</td>");
}


function draw_table(things_to_show: string[]) {
	document.writeln("<table class=\"main-table\">")
	
	for (var i = 0; i < things_to_show.length; ++i) {
		document.writeln("<tr class=\"main-table\">");
		var gameName: string = things_to_show[i]
		
		if (i % 2 == 0) {
			tdWords(gameName);
			tdImages(gameName);
		}
		else {
			tdImages(gameName);
			tdWords(gameName);
		}
		
		document.writeln("</tr>")
	}
	
	document.writeln("</table>")
}

draw_table(consts.projects.all);
