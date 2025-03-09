import { main } from './module.js'
var baseurl = main('BaseURL')
var isxml = main('IsXML')

function createItem(game, formatted, link, image, color, description, xmllink) {
    var template = `
    <br>
    <div style="display: flex; align-items: top;">
        <a name="${game}"></a>
        <a onclick="openWindow('${link}', '${formatted}', ${isxml}, '${xmllink}', '${baseurl}')" style="cursor:pointer;">&nbsp;&nbsp;<img src="${image}" alt="${game}" width="100" style="border: 3px solid ${color};"></a><span class="title">&nbsp;&nbsp;<u><a style="color: white; cursor: pointer;" onclick="openWindow('${link}', '${formatted}', ${isxml}, '${xmllink}', '${baseurl}')">${formatted}</a></u></span>
        <p1>&nbsp;${description}</p1>
    </div>
    `;
    
    document.getElementById('projects').innerHTML += template;
}

var page = document.getElementById('page').innerText
var TOTALGAMES = 120

/* ------------------------------------ */
/*   DO NOT CONTRIBUTE TO THIS FILE!!   */
/* Instead, use the JSON file found in  */
/* assets/json/projects.json! Thanks..  */
/* ------------------------------------ */

// Note: I still wouldn't change/add any new games until I finish adding the first 120 projects.
// You can mess around with the front end (*) stuff though!

if (page == '1') {

    document.getElementById('entries').innerText = "0"
    document.getElementById('entries_max').innerText = "50"

    createItem("epicbossbattle", "Epic Boss Battle", "https://agentn86.github.io/epicbossbattle/v1.3.3/", "https://agentn86.github.io/epicbossbattle/v1.3.3/loading.png", "pink", "is a tough, rage gam where you have to avoid and end a spaceship without dying in the process! Use the retry button to restart the game when needed.", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/epicbossbattle.xml")
    createItem("bitcoin-clicker", "Bitcoin Clicker", "https://julianyaman.github.io/bitcoin-clicker/", "./assets/img/thumbnails/bitcoinclicker.png", "white", "is a 'Cookie Clicker' similar type gam- but instead it's bitcoin!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/bitcoinclicker.xml")
    createItem("cookie-clicker", "Cookie Clicker", `cookieclicker`, "./assets/img/thumbnails/cookieclicker.jpeg", "white", "is exactly what it sounds like. You know what it is- why not play it?", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/cc.xml")
    createItem("papaspizzeria", "Papas Pizzeria", `flash/papapizzera`, "./assets/img/thumbnails/papapizzeria.jpeg", "white", "is the original classic of the Papa gams. Own a pizza business and get the best scores!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/papapizzera.xml")
    createItem("papasburgeria", "Papas Burgeria", `flash/papaburger`, "./assets/img/thumbnails/papaburger.jpeg", "white", "is one of the sequels to Papa's Pizzeria. Why not give both a try?", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/papaburger.xml")
    createItem("ageofwar2", "Age of War 2", `flash/ageofwar2`, "./assets/img/thumbnails/ageofwar2.jpeg", "white", "is a war simulation gam where you try to win a war aganist a enemy AI!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/ageofwar2.xml")
    createItem("run2", "Run 2", `flash/run2`, "./assets/img/thumbnails/run2.jpeg", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/run2.xml")
    createItem("whackboss", "Whack your Boss", `flash/whackboss`, "./assets/img/thumbnails/whackyourboss.jpeg", "white", "might not the the most family friendly gam out there- but it is sure fun to do something after a rough day.", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/whackboss.xml")
    createItem("ducklife", "Duck Life", `flash/ducklife`, "./assets/img/thumbnails/ducklife.jpeg", "white", "is a gam where you have to train a duck to get your farm back!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/ducklife.xml")
    createItem("theimpossiblequiz", "The Impossible Quiz", `flash/impossiblequiz`, "./assets/img/thumbnails/impossiblequiz.jpeg", "white", "is a super hard gam with over 100 questions! Can you beat it?", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/impossiblequiz.xml")
    createItem("worldhardgame", "The Worlds Hardest Game", `flash/worldhardgame`, "./assets/img/thumbnails/worldhardgame.jpeg", "white", "is a super hard gam with a bunch of levels... can you beat it?", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/worldhardgame.xml")
    createItem("portaltheflashversion", "Portal: The Flash Version", `flash/portalflash`, "./assets/img/thumbnails/portalflash.jpeg", "white", "is the '2D version' of Portal.. can you get through the test chambers?", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/portalflash.xml")
    createItem("ageofwar", "Age of War", `flash/ageofwar`, "./assets/img/thumbnails/ageofwar.jpeg", "white", "is the original version of Age of War 2. Give it a try!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/ageofwar.xml")
    createItem("papafreezeria", "Papas Freezeria", `flash/papafreezer`, "./assets/img/thumbnails/papafreeze.jpeg", "white", "is another sequal to the Papa franschise. This time- deserts!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/papafreezer.xml")
    createItem("papapancake", "Papas Pancakeria", `flash/papapancake`, "./assets/img/thumbnails/papapancake.jpeg", "white", "is another sequal to the Papa franschise. This time- pancakes!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/papapancake.xml")
    createItem("bloonstd5", "Bloons Tower Defense 5", `flash/bloontd5`, "./assets/img/thumbnails/bloonstd5.jpeg", "white", "is a tower defense game where you have to defend your tower- the enemy being balloons!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/bloontd5.xml")
    createItem("slope", "SLOPE", `slope`, "./assets/img/thumbnails/slope.jpeg", "white", "is a infinite 'runner', so to say... but your a ball!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/slope.xml")
    createItem("basketballstars", "Basketball Stars", `basketballstars`, "./assets/img/thumbnails/basketballstars.png", "white", "is a co-op/singleplayer basketball gam. Be some of your favorite basketball stars!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/basketballstars.xml")
    createItem("timeshooter3", "Time Shooter 3", `timeshooter3`, "./assets/img/thumbnails/timeshooter3.png", "white", "is a shooter gam where time moves when YOU move!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/timeshooter3.xml")
    createItem("fancypants", "Fancy Pants Adventures", `flash/fancypants`, "./assets/img/thumbnails/fancypantsworld1.png", "white", "is a cool but simple platformer- with many different levels and enemies!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/fancypants.xml")
    createItem("alienhom", "Alien Hominid", `flash/alienhom`, "./assets/img/thumbnails/alienhom.png", "red", "is when you are the alien and you need to get out of earth before the FBI catches you! Not the most family-friendly, to be certain- but great gam to play after-school.", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/alienhom.xml")
    createItem("tosstheturtle", "Toss the Turtle", `flash/tosstheturtle`, "./assets/img/thumbnails/tosstheturtle.png", "red", "is not that family friendly- but is a funny little cartoon viol. gam where you toss the turtle to get points.", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/tosstheturtle.xml")
    createItem("bloxorz", "Bloxorz", `flash/bloxorz`, "./assets/img/thumbnails/bloxorz.png", "white", "is a puzzle game where you have to fit a rectangle into a square hole- and can get challenging!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/bloxorz.xml")
    createItem("wastedsky", "Wasted Sky", `flash/wastedsky`, "./assets/img/thumbnails/wastedsky.png", "white", "is a point and click game where you need to need to destroy the enemy ships!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/wastedsky.xml")
    createItem("impossiblequiz2", "The Impossible Quiz 2", `flash/impossiblequiz2`, "./assets/img/thumbnails/impossiblequiz2.png", "white", "is the sequal to The Impossible Quiz- even more impossible that can be!", "https://cdn.jsdelivr.net/gh/agentsgams/projectsxml@master/flash/impossiblequiz2.xml")
    createItem("whackcomputer", "Whack your Computer", `flash/whackcomputer`, "./assets/img/thumbnails/whackcomputer.png", "white", "helps you answer the question- can you feel better after whacking your computer? Find out...")
    createItem("papacheese", "Papas Cheeseria", `flash/papaCheese`, "./assets/img/thumbnails/papacheeseria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papacupcake", "Papas Cupcakeria", `flash/papaCupcake`, "./assets/img/thumbnails/papacupcakeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papadonut", "Papas Donut", `flash/papaDonut`, "./assets/img/thumbnails/papadonuteria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papahotdog", "Papas Hotdogeria", `flash/papaHotDog`, "./assets/img/thumbnails/papahotdogeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papapasteria", "Papas Pastaria", `flash/papaPastaria`, "./assets/img/thumbnails/papapasteria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papascooperia", "Papas Scooperia", `flash/papaScooperia`, "./assets/img/thumbnails/papascooperia.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papasushi", "Papas Sushiria", `flash/papaSushiria`, "./assets/img/thumbnails/papasusheria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papastacomia", "Papas Taco Mia", `flash/papaTacoMia`, "./assets/img/thumbnails/papatacomia.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papawing", "Papas Wingeria", `flash/papaWingeria`, "./assets/img/thumbnails/papawingeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("deepsleep", "Deep Sleep", `flash/deepsleep`, "./assets/img/thumbnails/deepsleep.png", "blue", "is a point and click adventure. Can you servive the nightmare?")
    createItem("deepersleep", "Deeper Sleep", `flash/deepersleep`, "./assets/img/thumbnails/deepersleep.png", "blue", "is the sequel to the point and click adventure, Deep Sleep. Can you servive the nightmare again?")
    createItem("sm63", "SM63", `flash/sm63`, "./assets/img/thumbnails/sm63.png", "white", "is a mashup of a bunch of Mario gams turned into one original game. Might not be the most copyright friendly- but its a great 'mario' clone, so to say.")
    createItem("insaneorb", "Insane Orb", `flash/insaneorb`, "./assets/img/thumbnails/insaneorb.jpeg", "white", "is a pong inspired gam, but with a few minor tweaks and abilites!")
    createItem("interactivebuddy", "Interactive Buddy", `flash/interactivebuddy`, "./assets/img/thumbnails/interactivebuddy.png", "white", "allows you to have your own little best friend. You can have fun with him- or cause pain!")
    createItem("interactivebuddy2", "Interactive Buddy 2", `flash/interactivebuddy2`, "./assets/img/thumbnails/interactivebuddy2.png", "blue", "is the sequel to Interactive Buddy, which allows you to have your own little best friend. You can have fun with him- or cause pain!")
    createItem("fireboywatergirl", "Fireboy & Watergirl in The Forest Temple", `flash/fireboywatergirl`, "./assets/img/thumbnails/fireboywatergirl.jpeg", "white", "is a co-op game where the 2 people must escape a temple. Don't let water touch fire and fire touch water- it may not end well!")
    createItem("eaglercraft", "Eaglercraft", "https://drive.google.com/uc?export=download&id=1-MduluUms_LG7tUJyMkAPBw82O40R11R", "./assets/img/thumbnails/eaglercraft.png", "green", "is a Minecraft clone based for the web! You can play with friends as well!")
    createItem("ssf2", "SSF2", `flash/ssf2`, "./assets/img/thumbnails/ssf2.png", "blue", "is a classic flash gam. You should really give it a try!")
    createItem("houseofhazards", "House of Hazards", `houseofhazards`, "./assets/img/thumbnails/houseofhazards.png", "white", "is a platformer gam that you need to get out of the house. But other players can sabotage you on the way!", "houseofhazards.xml")
    createItem("1v1.lol", "1v1.LOL", `xml/1v1lol`, "./assets/img/thumbnails/1v1lol.png", "white", "is a battle royale type game where you must survive with bots as enemeies. There are many different gamemodes- as well.",)
    // total here: 50
}

if (page == '2') {

    document.getElementById('entries').innerText = "50"
    document.getElementById('entries_max').innerText = "100"

    createItem("geodash", "GeoDash", `geodash`, "./assets/img/thumbnails/geodash.png", "white", "is a 1-1 replica to Geomentry Dash. Give it a try, and see if you can bet the hard challenging levels!")
    createItem("motox3m", "Moto X3M", `motox3m`, "./assets/img/thumbnails/motox3m.png", "white", "is a motorcycle game where you have to get around obstables and make it to the end.")
    createItem("motox3m2", "Moto X3M 2", `motox3m-2`, "./assets/img/thumbnails/motox3m.png", "white", "is the sequal to Moto X3M, with the same premise.")
    createItem("motox3m3", "Moto X3M 3", `motox3m-3`, "./assets/img/thumbnails/motox3m.png", "white", "is the sequal to Moto X3M, with the same premise.")
    createItem("bigshotboxing", "Big Shot Boxing", `xml/bigshotboxing`, "./assets/img/thumbnails/bigshotboxing.png", "white", "is a fighting sim where you must be the top in boxing.",)
    createItem("sr3d2", "Snow Rider 3D 2", `snowrider3d`, "./assets/img/thumbnails/snow-rider-3d.png", "white", "is a infinite runner, but you are on a sliegh! Very challenging, can you get all the presents?")
    createItem("s2p", "SLOPE 2 Players", `xml/slope2player`, "./assets/img/thumbnails/slope-2-player-logo.jpg", "white", "is a infinite runner by SLOPE, but its for 2 players isntead of 1.",)
    createItem("soccerlegends", "Soccer Legends", `xml/soccerlegends`, "./assets/img/thumbnails/footballlegends.png", "white", "is another type of Basketball Legends, but soccer!",)
    createItem("hellokittyadventure", "Hello Kitty Adventure", `xml/hellokittyadventure`, "./assets/img/thumbnails/hellokittyadventure.png", "white", "allows you to inbark in a new adventure in the Hello Kitty universe.",)
    createItem("retrobowl", "Retro Bowl", `retrobowl`, "./assets/img/thumbnails/retrobowl.avif", "white", "allows players to enbark on a football journey!")
    createItem("flappyplane", "Flappy Plane", `flappyplane`, "./assets/img/thumbnails/flappyplane.jpeg", "red", "is a clone of Flappy Bird but with a interesting twist...")
    createItem("gunmayhem2", "Gun Mayhem 2", `flash/gunmayhem2`, "./assets/img/thumbnails/gun-mayhem-2.jpg", "white", "is a ultimate battle game! Fire and shoot until you can't no more!")
    createItem("minesweeper", "Minesweeper", "https://agentn86.github.io/js-minesweeper/", "./assets/img/thumbnails/minesweeper.png", "white", "-- a challenging game where you must figure out the mines before they explode you!")
    createItem("polytrack", "Polytrack", `multipleVersions/polytrack`, "./assets/img/thumbnails/polytrack.png", "white", "is a racing game, runs well on basically anything, and is super fun! (Even your own custom editor..)",)
    createItem("driftboss", "Drift Boss", `driftboss`, "./assets/img/thumbnails/driftboss.png", "white", "How long can you last driving your car on a wacky road?")
    createItem("eggycar", "Eggy Car", `eggycar`, "./assets/img/thumbnails/eggycar.png", "white", "Keep your egg in your car without dropping!")
    createItem("profootball", "Pro Football", `flash/profootball`, "./assets/img/thumbnails/profootball.jpg", "white", "Miniclip classic!")
    createItem("pixelspeedrun", "Pixel Speedrun", `xml/pixelspeedrun`, "./assets/img/thumbnails/pixelspeedrun.jpg", "white", "makes you get to the end of the tough platform. Try beating your time!",)
    createItem("doom1993", "DooM", "https://diekmann.github.io/wasm-fizzbuzz/doom/", "./assets/img/thumbnails/doom1993.jpg", "white", "is the original classic to DOOM 1993! This is the SHAREWARE version, so there is only one episode. No sound and melting screen as well.", )
    createItem("javelinfighting", "Javelin Fighting", `xml/javelinfighting`, "./assets/img/thumbnails/javelinfighting.jpg", "white", "makes you fight an AI opponent in a fatal javelin fight!",)
    createItem("bottleflip", "Bottle Flip", `iframe/bottleflip`, "./assets/img/thumbnails/bottleflip.png", "white", "makes you traverse a room without making the bottle fall to the ground!",)
    createItem("timeshooter2", "Time Shooter 2", `xml/timeshooter2`, "./assets/img/thumbnails/timeshooter2.png", "white", "the second of the Time Shooter saga.",)
    createItem("sportsheadsHockey", "Sport Heads: Ice Hockey", `xml/1on1hockey`, "./assets/img/thumbnails/1on1hockey.png", "white", "is a game where you fight AI in a tough, customizated battle of hockey!",)
    createItem("fnaf", "Five Nights at Freddys", `xml/fnaf`, "./assets/img/thumbnails/fivenightsatfreddys.png", "white", "is the 2015 classic ported to Flash!",)
    createItem("douchebagworkout2", "Douchebag Workout 2", `xml/douchebagworkout2`, "./assets/img/thumbnails/douchebagworkout2.png", "white", "makes you go on an adventure being the fittest person in the world- scratch that- the *douchebagest* person.", )
    createItem("unicyclehero", "Unicycle Hero", `unicyclehero`, "./assets/img/thumbnails/unicylcehero.avif", "white", "-- can you beat the competition in the strange genres?", )
    createItem("garfieldscaryscavengerhunt", "Garfields Scary Scavenger Hunt", `xml/garfieldscaryhunt`, "./assets/img/thumbnails/garfieldscaryscavengerhunt.png", "white", "can you help Garfield and friends get through this scary, haunted mansion?", )
    createItem("dunkshot", "Dunk Shot", `xml/dunkshot`, "./assets/img/thumbnails/dunkshot.png", "white", "get to as far up in the tower-- hooping.", )
    createItem("agenttetris", "agents tetris", "https://agentn86.github.io/tetris-html/", "./assets/img/thumbnails/agentstetris.png", "white", "is a port of TETRIS created by agentn86. It's simple, but it's addictive!", )
    createItem("learntofly", "Learn to Fly", `flash/learntofly`, "./assets/img/thumbnails/learntofly.JPG", "white", "is a classic flash gam where you teach a penguin to fly!", )
    createItem("learntofly2", "Learn to Fly 2", `flash/learntofly2`, "./assets/img/thumbnails/learntofly2.JPG", "white", "is a classic flash gam where you teach a penguin to fly-- again!", )
    createItem("minecrafttowerdefense", "Minecraft Tower Defense", `flash/minecrafttowerdefense`, "./assets/img/thumbnails/minecrafttowerdefense.png", "white", "is the unofficial flash game where you protect Steve from Minecraft monsters you remember!", )
    createItem("qwop", "QWOP", `flash/qwop`, "./assets/img/thumbnails/qwop.jpeg", "white", "is one of the hardest flash games ever. Can you make it to the end of the race?", )
    createItem("picosschool", "Picos School", `flash/picoschool`, "./assets/img/thumbnails/picosSchool.png", "red", "is where you help Pico escape his school. Problem- this game is quite offensive. Very.", )
    createItem("riddleschool", "Riddle School", `flash/riddleschool`, "./assets/img/thumbnails/riddleschool.jpeg", "white", "can you help Phil escape his school through puzzles?", )
    createItem("riddleschool2", "Riddle School 2", `flash/riddleschool2`, "./assets/img/thumbnails/riddleschool2.png", "white", "can you help Phil escape again his school through puzzles?", )
    createItem("riddleschool3", "Riddle School 3", `flash/riddleschool3`, "./assets/img/thumbnails/riddleschool3.png", "white", "can you help Phil escape his even bigger high school with more puzzles?", )
    createItem("sportsheadsoccer", "Sport Heads: Football Championship", `flash/sportsheadssoccer`, "./assets/img/thumbnails/sportsheadSoccer.jpeg", "white", "is another classic Sports Head game where you play soccer against an AI as a head only human.", )
    createItem("run", "Run", `flash/run`, "./comingsoon.png", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", )
    createItem("run3", "Run 3", `flash/run3`, "./comingsoon.png", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", )
    createItem("earthbound", "Earthbound", "https://agentsgams.github.io/emulatorjs/earthbound", "./assets/img/thumbnails/earthbound.jpeg", "white", "is the the original SNES classic that everyone knows and enjoys!", )
    createItem("blockblast", "Block Blast", `multipleVersions/blockblast`, "./assets/img/thumbnails/blockblast.jpeg", "white", "is a puzzle game where you must place blocks to clear the board until you fail.", )
    createItem("bigtowertinysquare", "Big Tower Tiny Square", `bigtowertinysquare`, "./assets/img/thumbnails/bigtowertinysquare.png", "white", "is a platformer game similar to Pixel Speedrun- instead it is way more difficult.", )
    createItem("drifthunters", "Drift Hunters", `drifthunters`, "./assets/img/thumbnails/drifthunters.jpg", "white", "is a drift game as said in the title. Make cool moves to get the best score!", )
    createItem("soccerrandom", "Soccer Random", `soccerrandom`, "./assets/img/thumbnails/soccer-random.png", "white", "is a game where everything is up for RNG- where you go and if you win or not.", )
    createItem("basketrandom", "Basket Random", `basketrandom`, "./assets/img/thumbnails/basketrandom.png", "white", "is a basketball game where everything is up for RNG- where you go and if you win or not.", )
    createItem("clusterrush", "Cluster Rush", `clusterrush`, "./assets/img/thumbnails/cluster-rush.png", "white", "is a platformer game where you jump over trucks to get to the end goal!", )
    createItem("tinyfishing", "Tiny Fishing", `tinyfishing`, "./assets/img/thumbnails/tiny-fishing.jpg", "white", "is a fishing game where you collect fish to become rich!", )
    createItem("bitlife", "BitLife", `bitlife`, "./assets/img/thumbnails/bitlife.png", "white", "is a life simulation game where you live your life to the best potential!", )
    createItem("boxingrandom", "Boxing Random", `boxingrandom`, "./assets/img/thumbnails/boxingrandom.jpg", "white", "is a boxing game where everything is up for RNG- where you go and if you win or not.", )
    // total here: 50
    // complete total: 100
}

if (page == '3') {

    document.getElementById('entries').innerText = "100"
    document.getElementById('entries_max').innerText = TOTALGAMES

    createItem("volleyrandom", "Volley Random", `volleyrandom`, "./assets/img/thumbnails/volley-random.jpg", "white", "is a volleyball project where everything is up for RNG- where you go and if you win or not.", )
    createItem("superhot", "SUPERHOT", `superhot`, "./assets/img/thumbnails/superhot.jpg", "white", "is the original prototype for the hit project SUPERHOT!", )
    createItem("murder", "Murder", `murder`, "./assets/img/thumbnails/murder.png", "white", "is a RNG game- kill the king and survive the others!", )
    createItem("paperio2", "Paper.IO 2", `paperio2`, "./assets/img/thumbnails/paperio.png", "white", "is a IO project where you must take over the entire land by painting and elimating others!", )
    createItem("grindcraft", "Grindcraft", `grindcraft`, "./assets/img/thumbnails/grindcraft.png", "white", "is a clicker project where you become Steve and use resources to make the best town!", )
    createItem("eightball", "8Ball Pool", `multipleVersions/8ball`, "./assets/img/thumbnails/8ball.jpg", "white", "is a casino project where you must get all the balls in the holes, and can be played aganist AI and other players!", )
    createItem("blumgiball", "Blumgi Ball", `blumgimagicball`, "./assets/img/thumbnails/blumgiball.png", "white", "is a basketball platformer project, with a side of puzzles. Score through challenging levels!", )
    createItem("boxingphysics2", "Boxing Physics 2", `boxingphysics2`, "./assets/img/thumbnails/boxingrandom2.png", "white", "is somewhat similar to the random games, fight eachother in clumsy ways!", )
    createItem("headsoccer", "Head Soccer 2022", `headsoccer`, "./assets/img/thumbnails/headsoccer2022.png", "white", "is a soccer game, as you would expect, but everything but your head and shoes are gone!", )
    createItem("madburger", "Mad Burger", `madburger`, "./assets/img/thumbnails/mad-burger.jpg", "white", "is where you must deliver a burger hundreds of miles away- how? By throwing it.", )
    createItem("subwaysurfers", "Subway Surfers", `subwaysurfers`, "./assets/img/thumbnails/subway-surfers-stpetersburg.jpg", "white", "is a endless runner classic- run away from the guard and his dog!", )
    createItem("tennisphysics", "Tennis Physics", `tennisphysics`, "./assets/img/thumbnails/TennisPhysics.jpg", "white", "is made by the same creators of the Random games, randomly move around in a game of tennis.", )
    createItem("gunspin", "Gunspin", `gunspin`, "./assets/img/thumbnails/gunspin.png", "white", "is a platformer game, somewhat. Use the imense power of your weapon to get sent to the other side!", )
    createItem("2048", "2048", `2048`, "./assets/img/thumbnails/2048.png", "white", "is a strategy project- get to 2048 without running out of spaces.", )
    createItem("crossyroad", "Crossy Road", `crossyroad`, "./assets/img/thumbnails/crossyroad.png", "white", "is where you must get to the end... there isnt... whilst avoiding challenges throughout!", )
    createItem("johnnyupgrade", "Johnny Upgrade", `johnny-upgrade`, "./assets/img/thumbnails/johnny-upgrade.png", "white", "is a platformer project, keep upgrading til you get to the end.", )
    createItem("motox3mwinter", "Moto X3M Winter", `motox3m-winter`, "./assets/img/thumbnails/motoxm3-winter.png", "white", "is the sequal to Moto X3M, but christmas, with the same premise.", )
    createItem("doodlejump", "Doodle Jump", `doodlejump`, "./assets/img/thumbnails/doodlejump.jpg", "white", "is a endless platformer project, keep jumping and avoid dangerous objects and things along the way.", )
    createItem("zeepkistcrash2d", "Zeepkist Crash 2D", `zeepkistcrash2d`, "./assets/img/thumbnails/zeepkistcrash2d.jpg", "white", "is a ragdoll project, go down a hill; get cash; repeat.")
    createItem("ovo", "OvO", `ovo`, "./assets/img/thumbnails/ovo.jpeg", "white", "is a platformer project that is very difficult and only the most tough can beat it... can you?")
    createItem("theworldseasyestgame", "The Worlds Easy-est Game", `flash/theworldseasiestgame`, "./assets/img/thumbnails/the-worlds-easyest-game.png", "white", "is a puzzle project, similar to the Impossible Quiz. But it is easier now! Right..?")
    createItem("hypersnake", "Hypersnake", `hypersnake`, "./assets/img/thumbnails/hypersnake.jpeg", "white", "is a puzzle project, keep the snake alive and get past challenges.")
    createItem("raftwars", "Raft Wars", `raftwars`, "./assets/img/thumbnails/raftwars.png", "white", "is a puzzle shooter project where you protect your new gained wealth from pirates and other people.")
    createItem("2minfootball", "2 Minute Football", `multipleVersions/2minutefootball`, "./assets/img/thumbnails/2minfootball.jpg", "white", "is football but quite short and it's a very fun casual project.")

}

// createItem("nowgg", "now.gg unblckr", "https://agents-nowgg.glitch.me/", "./comingsoon.png", "white", "*THIS WILL SOON BE MOVED TO AGENTS TOOLS*")
