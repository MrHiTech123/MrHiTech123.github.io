var starting_strip = new URLSearchParams(window.location.search).get('strip');
var biggest = 8
if (starting_strip == null) {
  starting_strip = biggest
}
transcripts = [`GM: You all read the campaign intro, right?
<i>Images of the TDP intro flash by.</i>
Player 1: Yep.
Player 2: I did.
Player 3: You bet.
`, `Intro 2:
GM: Night falls over the castle
Rayla: Castle?
Ezran: Yeah. Callum and I are princes.
Rayla: Cool!
GM: *Ahem*. As I was saying, you’re asleep, snug in your–
Callum: I stay awake and keep watch for monsters
`, `Baker’s treat:
Ezran: *Sigh* Can we get back to the important quest?
GM: Right. You’re right outside the bakery.
Ezran: I try to open the grate. Is it unlocked?
GM: Of course. It slides right open. The baker is finishing up his latest batch of treats. He walks away.
Ezran: Neat! I run up and start grabbing jelly tarts.
Barius: Ezran! What are you doing in here?
Ezran: Oh…hey Barius, could I please have some jelly tarts?
SFX: <i>*roll*</i>
Ezran: 10 on Charisma
Barius: Sure Ezran! I’m always happy to serve such a polite young man.
Rayla: Exactly how many points did you put into Charisma?
Ezran: Thanks, baker guy!
Barius: Listen, Ezran, I’ve been thinking. Since I am baking for the whole castle, don’t you think I should be paid for it?
Ezran: I don’t think so. Isn’t the baking itself reward enough?
SFX: <i>*roll*</i>
Ezran: That’s a 14 for Charisma.
Barius: Of course! It’s a real privilege to bake for you guys!
Callum: <b>Seriously</b>, Ez. <b>How many points</b> did you put into Charisma?
`,
`Callum: Alright. I’ve got an idea for how to learn more magic.
GM: You mean like spending the character points?
Callum: What? And lose out on my drawing skill?
Rayla: *Sigh*, let’s hope this isn’t anything like your last idea.
Callum: When we escaped the castle, that witch tried to cast a spell. 
Callum: I can copy the rune she tried to use!
GM: But you don’t know the–
Callum: I draw the rune. Does the spell activate?
GM: *Sigh* Can I have the magic word?
Callum: Please?
GM: No no, the other magic word.
`, `GM: So Rayla, where did you wander off to?
Rayla: It doesn’t matter. Just far away. I want to do this: *passes note*
GM: Alright. Let me think…
GM: *Passes note*
Rayla: *Passes note*
GM: *Passes note*
Rayla: *Passes note*
GM: *Roll*
GM: *Passes note*
Rayla: *Passes note*
GM: *Passes note*
Rayla: *Passes note*
GM: *Roll*
GM: *Passes note*
Rayla: *Sigh*
Ezran: You guys done passing notes yet?
`, `Callum: OK, I admit, I seem to have gotten myself into a bit of a predicament.
Rayla: Why does that not surprise me?
Callum: At least I didn’t try to fight a mini-boss alone!
Rayla: She was your aunt!
GM: Take *roll* 6 damage.
Callum: What? Why!?
GM: You’re channeling lightning through your body. 
Callum: So then why didn’t that witch take damage?
GM: She barely held onto the spell for 15 seconds! You’ve been holding it for over a minute!
Rayla: Try drawing the rune backwards!
Callum: What she said.
GM: As you draw even more power from the primal stone, you feel a surge of energy. Make a Con save.
Callum: 5
GM: Take *roll* 2 more damage. Your arm spasms and you accidentally toss the primal stone at Rayla, who makes a Dex save–
Rayla: 20!
GM: –and…miraculously takes no damage. Somehow.
`, `GM: Alright Rayla, you and the giant fish sail out of the water, leaving Callum and Ezran on the shoreline.
Rayla: Would you just hurry up and get help already?
Callum: Actually, I think I’ll just kill it with my magic.
Rayla: What are you going to do, toss a light breeze at it? YOU DON’T KNOW THE INCANTATION FOR THE LIGHTNING SPELL!
Callum: Au contraire, mon ami. All thanks to my photographic memory trait.
Callum: I went through the footage of that encounter with Claudia…
Callum: …And I figured out the incantation!
Callum and Flashback!Claudia: Ezran, don’t be afraid. Walk towards me and if she moves even an inch!
`, `GM: The spell…erm…activates.
Callum: I raise my hand up…
Callum: …and bring it forward…
Callum: …And I fire at the monster!
GM: Alright. Give me your spell save DC.
Callum: 14
GM: And roll damage.
Callum: *roll* 18
GM: Rayla and Bait are caught in the radius. Roll Dex saves.
Ezran: 18!
Rayla: 15!
GM: You both take half damage.
GM: *roll* The fish fails its save and dies…
Rayla: I loot the body!
GM: …Along with the rest of the fish in the pond
Ezran: So how much XP is that worth?
`
]

function change_page(strip) {
  console.log(strip)
  new_content = '<img id="strip" src="strips/' + strip + '.png" width="600" height="800"><br><button onclick="change_page(1);">&lt&lt First</a>   <button onclick="change_page(' + (strip - 1) + ')">&lt Previous</a>   <button onclick="change_page(' + (parseInt(strip) + 1) + ')">Next &gt</a>   <button onclick="change_page(biggest);">Latest &gt&gt</button>'
  if (strip == 1) {
    new_content = '<img id="strip" src="strips/' + strip + '.png" width="600" height="800"><br><button onclick="change_page(' + (parseInt(strip) + 1) + ')">Next &gt</a>   <button onclick="change_page(biggest);">Latest &gt&gt</button>';
  }
  if (strip == biggest) {
    new_content = '<img id="strip" src="strips/' + strip + '.png" width="600" height="800"><br><button onclick="change_page(1);">&lt&lt First</a>   <button onclick="change_page(' + (strip - 1) + ')">&lt Previous</button>   ';
  }
  
  document.title = 'Strip ' + strip + ' - Arcanums and Assassins';
  if (strip <= biggest) {
    new_content += '<h2 class="transcript">Transcript:</h2><p class="transcript">' + transcripts[strip-1].split('\n').join('<br>\n') + '</p>';
  }
  document.getElementById('content').innerHTML = new_content;
  window.history.pushState({}, '', '?strip=' + strip);
  
  window.scroll(0, 0);
  if (strip == 8) {
    document.getElementById('strip').height = 1757
  }
  else if (strip == 6) {
    document.getElementById('strip').height = 938;
  }
}
change_page(parseInt(starting_strip));