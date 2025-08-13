

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
	project_lists: {
		all: ["ninjaCoinJumper", "artisanal", "carbonClicker", "betterStoneAge", "runeWriter", "blockToppler", "dieRoll", "wagon"],
		games: ["ninjaCoinJumper", "carbonClicker", "runeWriter", "blockToppler"],
		minecraft_mods: ["artisanal", "betterStoneAge"],
		calculator_programs: ["dieRoll", "wagon"]
	},
	url_params: new URLSearchParams(window.location.search)
}


function update_top_title() {
	var real_name = consts.url_params.get("realNameForEmployers");
	
	if (real_name == null) {
		return;
	}
	
	var top_title = <HTMLTitleElement>document.getElementById("top-title")
	top_title.innerHTML = real_name + "'s Portfolio";
}



function youtube_video_element(url: string) : string {
	return `<iframe width="` + consts.video.width + `" marginwidth="0"
src="` + url + `" 
title="YouTube video player" frameborder="0" allow="accelerometer; 
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="video"></iframe>`
}



var project_descriptions = {
	"artisanal": `<h2>Artisanal</h2>
<p> A Minecraft modification ("mod") that enhances the realism of TerraFirmaCraft by adding various chemical processes and technologies.</p>

<p> This mod adds additional branches to the TerraFirmaCraft technology tree, such as soapmaking, sugar production, and canning food. It also adds some completely new features, such as magnifying glasses and a fully data-driven juicing system. </p>

<p><a href="https://www.curseforge.com/minecraft/mc-mods/tfc-artisanal">Download here</a></p>
<p><a href="https://terrafirmacraft.github.io/Field-Guide/en_us/artisanal/">Read the field guide here</a> (Note that some pages are unable to load properly in the online version and can only be viewed in-game).</p>
<p><a href="https://github.com/MrHiTech123/Artisanal">View source code here</a></p>

`,
	"betterStoneAge": `<h2>Better Stone Age</h2>
<p>The early game of TerraFirmaCraft is extremely boring: many technologies are locked behind copper, so it can feel like there isn't enough to do
during the stone age, especially if you're new and don't understand the mining system yet.</p>

<p>This is the problem that Better Stone Age was made to solve. From decorated ceramic pots and early-game dyeing to a nonlinear tiered progression system for stone tools, Better Stone Age fleshes out the TerraFirmaCraft stone age by adding more ways to advance than just finding metal.</p>

<p><a href="https://www.curseforge.com/minecraft/mc-mods/tfc-better-stone-age">Download here</a></p>
<p><a href="https://github.com/MrHiTech123/BetterStoneAge">View source code here</a></p>

	`,
	"blockToppler": `<h2>BlockToppler</h2>
<p>A ragdoll game made in Unity. The player controls each limb of the puppet individually,
with the goal of throwing the ball at the tower of blocks and knocking them over.</p>

<p><a href="https://mrhitech.itch.io/block-toppler">Download here</a></p>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> PLACEHOLDER
` + youtube_video_element("https://www.youtube.com/embed/3dV7CsPlnF8"),
	"carbonClicker": `<h2>Carbon Clicker</h2>
<p>A p5js game centered around increasing the rate of global warming.
At first, the player must produce pollution by breathing. Pollution can then
be spent on other things that automatically produce pollution, from cattle farming and airplanes,
to hazardous chemicals and fracking, to portals to other dimensions and finally the Plasticmageddon.</p>

<p>This game was awarded "Best Overall" at HackTrin Hackathon IX.</p>

<p><a href="https://mrhitech.itch.io/carbon-clicker">Play here</a></p>
`,
	
	"dieRoll": `<h2>DieRoll</h2>
<p>A Casio calculator app that can be used to roll dice of all sorts.
Features the ability to roll up to 9 of any type of polyhedral die at once, as well as to roll with advantage, disadvantage, or emphasis.
The program also includes additional buttons to roll hundred-sided dice, statistics for Dungeons and Dragons characters, and the dice for the board game Root.
For games in which only six-sided dice are used, a special submenu is included that makes those options more readily available. The program is easy to use, 
with a user interface that prioritizes intuitiveness at every level.</p>

<p><a href="https://www.planet-casio.com/Fr/programmes/programme4271-1-dieroll-mrhitech-utilitaires-divers.html">Download here</a></p>

` + youtube_video_element("https://www.youtube.com/embed/aEt4jaX6Eb8"),

	"ninjaCoinJumper": `<h2>Ninja Coin Jumper</h2>
<p>A platformer made in Unity in which the player traverses through
a variety of environments with their metal-repelling powers.</p>

<p><a href="https://mrhitech.itch.io/ninja-coin-jumper">Download here</a></p>

	` + youtube_video_element("https://www.youtube.com/embed/YBbLQ5qmAdg"),
	"runeWriter": `<h2>Rune Writer</h2>
<p> A top-down combat game made in p5.js. The player is a wizard who fights enemy knights using a vast array of spells.
Spells are programmed by the player in an open-ended language, allowing for significant customizability.</p>

<p>Programmed for HackRPI 2023.</p>
`,

	"wagon": `<h2>Wagon</h2>
<p> A Casio Calculator game inspired by The Oregon Trail. Players can travel the trail and see sites such as Fort America, Treewalk Mountain, and the Narrow River.</p>

<p><a href="https://www.planet-casio.com/Fr/programmes/programme4575-1-wagon-mrhitech-jeux-actionsport.html">Download here</a></p>
` + youtube_video_element("https://www.youtube.com/embed/nVc9CqUuLrs")
	
}

function tdWords(gameName: string) {
	var to_return: string = "";
	
	to_return += ("<td class=\"main-table\">");
	
	to_return += (project_descriptions[gameName])
	
	to_return += ("</td>");
	
	return to_return;
}

function image(src: string, width: string, height: string) : string {
	return "<img src=\"" + src + "\" width=" + width + " height=" + height + ">";
}

function gameImage(gameName: string, order: number) : string {
	var src: string = "assets/images/" + gameName + "_" + order + ".jpg";
	
	var width: string = (order == 0)? consts.image.first.width : consts.image.subsequent.width;
	var height: string = (order == 0)? consts.image.first.height : consts.image.subsequent.height;
	
	return image(src, width, height);
}

function tdImages(gameName: string) : string {
	var to_return: string = "";
	to_return += ("<td class=\"main-table\">");
	
	to_return += (gameImage(gameName, 0));
	to_return += ("<br>");
	
	to_return += (gameImage(gameName, 1));
	to_return += (gameImage(gameName, 2));
	
	to_return += ("</td>");
	
	return to_return;
}


function make_table_content(things_to_show: string[]) : string {
	var to_return: string = "";
	
	for (var i = 0; i < things_to_show.length; ++i) {
		to_return += "<tr class=\"main-table\">";
		var gameName: string = things_to_show[i]
		
		if (i % 2 == 0) {
			to_return += tdWords(gameName);
			to_return += tdImages(gameName);
		}
		else {
			to_return += tdImages(gameName);
			to_return += tdWords(gameName);
		}
		
		to_return += "</tr>"
	}
	
	return to_return;
}

function clear_top_bar() {
	var top_bar_content = <HTMLDivElement>document.getElementById("navbar-inner");
	top_bar_content.innerHTML = "";
}

function stringify_arr_of_strings(arr: string[]) : string {
	var to_return: string = "[";
	
	for (var i in arr) {
		to_return += ("\"" + arr[i] + "\", ");
	}
	
	to_return += "]";
	
	console.log(to_return);
	
	return to_return;
}

function replace(to_be_replaced: string, to_replace: string, replace_with: string) : string {
	return to_be_replaced.split(to_replace).join(replace_with);
}

function singlify_quotes(to_replace_quotes: string) : string {
	return replace(to_replace_quotes, "\"", "'")
}

function capitalize(to_capitalize: string) : string {	
	return to_capitalize.charAt(0).toUpperCase() + to_capitalize.slice(1).toLowerCase();
}

function put_spaces_and_capitalize(snake_case: string) : string {
	var words = snake_case.split("_");
	
	for (var word in words) {
		words[word] = capitalize(words[word]);
	}
	
	return words.join(" ");
}

function make_top_bar_button(project_list_name: string) : string {	
	return "<button class=\"navbar-inner\" onclick=\"draw_table(consts.project_lists." + project_list_name +
		");\"><b>" + put_spaces_and_capitalize(project_list_name) + "</b></button>\n"
}

function make_top_bar_content() : string {
	var to_return: string = "<h2 class=\"marginless\">Filters</h2>\n";
	// var to_return: string = "";
	
	for (var project_list_name in consts.project_lists) {
		to_return += make_top_bar_button(project_list_name);
	}
		
	return to_return;
}

function draw_top_bar() {
	clear_top_bar();
	var top_bar_content: string = make_top_bar_content();
	var top_bar_element = <HTMLDivElement>document.getElementById("navbar-inner");
	top_bar_element.innerHTML = top_bar_content;
}


function clear_table() {
	var table_element = <HTMLTableElement>document.getElementById("main-table");
	table_element.innerHTML = "";
}

function draw_table(things_to_show: string[]) {
	clear_table();
	var table_content: string = make_table_content(things_to_show);
	var table_element = <HTMLTableElement>document.getElementById("main-table");
	table_element.innerHTML = table_content;
}

function main() {
	update_top_title();
	draw_top_bar();
	draw_table(consts.project_lists.all);
}


main();


