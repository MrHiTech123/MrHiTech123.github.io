
console.log("Start")

document.writeln("<table class=\"main-table\">")

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
}


var things_to_show: string[] = ["blockToppler"];

var descriptions = {
	"blockToppler": `<h2>BlockToppler</h2>
<p>In this ragdoll game, the player controls each limb of the puppet individually,
with the goal of throwing the ball at the tower of block and knocking it over.</p>

<br>
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/3dV7CsPlnF8?si=qcYYqO7FvWNfkE6Z" 
title="YouTube video player" frameborder="0" allow="accelerometer; 
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="video"></iframe>
`
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
	
	var width: string = order? consts.image.subsequent.width : consts.image.first.width;
	var height: string = order? consts.image.subsequent.height : consts.image.first.height;
	
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

console.log("Finish");
