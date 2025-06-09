
console.log("Start")

document.writeln("<table>")

var consts = {
	image: {
		first: {
			height: 400,
			width: 711
		},
		subsequent: {
			height: 200,
			width: 355
		}
	}
}


var things_to_show: string[] = ["blockToppler"];

var descriptions = {
	"blockToppler": `<h2>BlockToppler</h2>
<p>In this ragdoll game, the player controls each limb of the puppet individually,
with the goal of throwing the ball at the tower of block and knocking it over.</p>`
}


function tdWords(gameName: string) {
	document.writeln("<td>");
	
	document.writeln(descriptions[gameName])
	
	document.writeln("</td>");
}

function image(src: string, width: number, height: number) : string {
	return "<img src=\"" + src + "\">";
}

function gameImage(gameName: string, order: number) : string {
	var src: string = "images/" + gameName + "_" + order;
	
	var width: number = order? consts.image.subsequent.width : consts.image.first.width;
	var height: number = order? consts.image.subsequent.height : consts.image.first.height;
	
	return image(src, width, height);
}

function tdImages(gameName: string) {
	document.writeln("<td>");
	
	document.writeln(gameImage(gameName, 0));
	document.writeln("<br>");
	
	document.writeln(gameImage(gameName, 1));
	document.writeln(gameImage(gameName, 2));
	
	document.writeln("</td>");
}



for (var i = 0; i < things_to_show.length; ++i) {
	document.writeln("<tr>");
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
