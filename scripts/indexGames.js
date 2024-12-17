function createItem(game, formatted, link, image, color, description, iframe) {
    var template = `
    <br>
    <div style="display: flex; align-items: top;">
        <a name="${game}"></a>
        <a onclick="openWindow('${link}', '${formatted}')" style="cursor:pointer;">&nbsp;&nbsp;<img src="${image}" alt="${game}" width="100" style="border: 3px solid ${color};"></a><span class="title">&nbsp;&nbsp;<u><a style="color: white; cursor: pointer;" onclick="openWindow('${link}', '${formatted}')">${formatted}</a></u></span>
        <p1>&nbsp;${description}</p1>
    </div>
    `
    
    document.getElementById('gamList').innerHTML = document.getElementById('gamList').innerHTML + template
}

var page = document.getElementById('page').innerText
var baseurl = "https://agentsgams.github.io/projects/"
var TOTALGAMES = 124

if (page == '1') {

    document.getElementById('entries').innerText = "0"
    document.getElementById('entries_max').innerText = "50"

    createItem("epicbossbattle", "Epic Boss Battle", "https://agentn86.github.io/epicbossbattle/v1.3.3/", "https://agentn86.github.io/epicbossbattle/v1.3.3/loading.png", "pink", "is a tough, rage gam where you have to avoid and end a spaceship without dying in the process! Use the retry button to restart the game when needed.")
    createItem("smnake", "SMnake", "https://taco-eating-truck.glitch.me/index.html", "./thumbs/smnake.png", "pink", "is a simple gam where you will forever collect meat with no objective! Passes time away... Use the controls on the top right to play.")
    createItem("coincollector", "Coin Collector", "https://coincollecor.glitch.me/index.html", "./thumbs/coincollector.png", "pink", "is a simple gam where you will have to collect as much money as you can. Use the controls on the bottom to play.")
    createItem("3dmaze", "3D Maze", `${baseurl}3dmaze.html`, "./thumbs/3dmaze.svg", "pink", "is a simple maze gam where you have to find the exit! Use WASD to move and left and right arrows to look around. Try finding the green flag to win.")
    createItem("alienshooter", "Alien Shooter", `${baseurl}alienshooter.html`, "./thumbs/alienshooter.png", "pink", "is a simple shooter gam where the user has to shoot the alien. The more you shoot- the faster it is! Use mouse to shoot.")
    createItem("bitcoin-clicker", "Bitcoin Clicker", "https://julianyaman.github.io/bitcoin-clicker/", "./thumbs/bitcoinclicker.png", "white", "is a 'Cookie Clicker' similar type gam- but instead it's bitcoin!")
    createItem("cookie-clicker", "Cookie Clicker", `${baseurl}cookieclicker`, "./thumbs/cookieclicker.jpeg", "white", "is exactly what it sounds like. You know what it is- why not play it?")
    createItem("papaspizzeria", "Papa's Pizzeria", `${baseurl}flash/papapizzera.html`, "./thumbs/papapizzeria.jpeg", "white", "is the original classic of the Papa gams. Own a pizza business and get the best scores!")
    createItem("papasburgeria", "Papa's Burgeria", `${baseurl}flash/papaburger.html`, "./thumbs/papaburger.jpeg", "white", "is one of the sequels to Papa's Pizzeria. Why not give both a try?")
    createItem("ageofwar2", "Age of War 2", `${baseurl}flash/ageofwar2.html`, "./thumbs/ageofwar2.jpeg", "white", "is a war simulation gam where you try to win a war aganist a enemy AI!")
    createItem("run2", "Run 2", `${baseurl}flash/run2.html`, "./thumbs/run2.jpeg", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.")
    createItem("whackboss", "Whack your Boss", `${baseurl}flash/whackboss.html`, "./thumbs/whackyourboss.jpeg", "white", "might not the the most family friendly gam out there- but it is sure fun to do something after a rough day.")
    createItem("ducklife", "Duck Life", `${baseurl}flash/ducklife.html`, "./thumbs/ducklife.jpeg", "white", "is a gam where you have to train a duck to get your farm back!")
    createItem("theimpossiblequiz", "The Impossible Quiz", `${baseurl}flash/impossiblequiz.html`, "./thumbs/impossiblequiz.jpeg", "white", "is a super hard gam with over 100 questions! Can you beat it?")
    createItem("worldhardgame", "The World's Hardest Game", `${baseurl}flash/worldhardgame.html`, "./thumbs/worldhardgame.jpeg", "white", "is a super hard gam with a bunch of levels... can you beat it?")
    createItem("portaltheflashversion", "Portal: The Flash Version", `${baseurl}flash/portalflash.html`, "./thumbs/portalflash.jpeg", "white", "is the '2D version' of Portal.. can you get through the test chambers?")
    createItem("ageofwar", "Age of War", `${baseurl}flash/ageofwar.html`, "./thumbs/ageofwar.jpeg", "white", "is the original version of Age of War 2. Give it a try!")
    createItem("papafreezeria", "Papa's Freezeria", `${baseurl}flash/papafreezer.html`, "./thumbs/papafreeze.jpeg", "white", "is another sequal to the Papa franschise. This time- deserts!")
    createItem("papapancake", "Papa's Pancakeria", `${baseurl}flash/papapancake.html`, "./thumbs/papapancake.jpeg", "white", "is another sequal to the Papa franschise. This time- pancakes!")
    createItem("bloonstd5", "Bloons Tower Defense 5", `${baseurl}flash/bloontd5.html`, "./thumbs/bloonstd5.jpeg", "white", "is a tower defense game where you have to defend your tower- the enemy being balloons!")
    createItem("slope", "SLOPE", `${baseurl}slope`, "./thumbs/slope.jpeg", "white", "is a infinite 'runner', so to say... but your a ball!")
    createItem("basketballstars", "Basketball Stars", `${baseurl}basketballstars`, "./thumbs/basketballstars.png", "white", "is a co-op/singleplayer basketball gam. Be some of your favorite basketball stars!")
    createItem("timeshooter3", "Time Shooter 3", `${baseurl}timeshooter3`, "./thumbs/timeshooter3.png", "white", "is a shooter gam where time moves when YOU move!")
    createItem("fancypants", "Fancy Pants Adventures", `${baseurl}flash/fancypants.html`, "./thumbs/fancypantsworld1.png", "white", "is a cool but simple platformer- with many different levels and enemies!")
    createItem("alienhom", "Alien Hominid", `${baseurl}flash/alienhom.html`, "./thumbs/alienhom.png", "red", "is when you are the alien and you need to get out of earth before the FBI catches you! Not the most family-friendly, to be certain- but great gam to play after-school.")
    createItem("tosstheturtle", "Toss the Turtle", `${baseurl}flash/tosstheturtle.html`, "./thumbs/tosstheturtle.png", "red", "is not that family friendly- but is a funny little cartoon viol. gam where you toss the turtle to get points.")
    createItem("bloxorz", "Bloxorz", `${baseurl}flash/bloxorz.html`, "./thumbs/bloxorz.png", "white", "is a puzzle game where you have to fit a rectangle into a square hole- and can get challenging!")
    createItem("wastedsky", "Wasted Sky", `${baseurl}flash/wastedsky.html`, "./thumbs/wastedsky.png", "white", "is a point and click game where you need to need to destroy the enemy ships!")
    createItem("impossiblequiz2", "The Impossible Quiz 2", `${baseurl}flash/impossiblequiz2.html`, "./thumbs/impossiblequiz2.png", "white", "is the sequal to The Impossible Quiz- even more impossible that can be!")
    createItem("whackcomputer", "Whack your Computer", `${baseurl}flash/whackcomputer.html`, "./thumbs/whackcomputer.png", "white", "helps you answer the question- can you feel better after whacking your computer? Find out...")
    createItem("papacheese", "Papa's Cheeseria", `${baseurl}flash/papaCheese.html`, "./thumbs/papacheeseria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papacupcake", "Papa's Cupcakeria", `${baseurl}flash/papaCupcake.html`, "./thumbs/papacupcakeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papadonut", "Papa's Donut", `${baseurl}flash/papaDonut.html`, "./thumbs/papadonuteria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papahotdog", "Papa's Hotdogeria", `${baseurl}flash/papaHotDog.html`, "./thumbs/papahotdogeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papapasteria", "Papa's Pastaria", `${baseurl}flash/papaPastaria.html`, "./thumbs/papapasteria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papascooperia", "Papa's Scooperia", `${baseurl}flash/papaScooperia.html`, "./thumbs/papascooperia.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papasushi", "Papa's Sushiria", `${baseurl}flash/papaSushiria.html`, "./thumbs/papasusheria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papastacomia", "Papa's Taco Mia", `${baseurl}flash/papaTacoMia.html`, "./thumbs/papatacomia.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("papawing", "Papa's Wingeria", `${baseurl}flash/papaWingeria.html`, "./thumbs/papawingeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
    createItem("deepsleep", "Deep Sleep", `${baseurl}flash/deepsleep.html`, "./thumbs/deepsleep.png", "blue", "is a point and click adventure. Can you servive the nightmare?")
    createItem("deepersleep", "Deeper Sleep", `${baseurl}flash/deepersleep.html`, "./thumbs/deepersleep.png", "blue", "is the sequel to the point and click adventure, Deep Sleep. Can you servive the nightmare again?")
    createItem("sm63", "SM63", `${baseurl}flash/sm63.html`, "./thumbs/sm63.png", "white", "is a mashup of a bunch of Mario gams turned into one original game. Might not be the most copyright friendly- but its a great 'mario' clone, so to say.")
    createItem("insaneorb", "Insane Orb", `${baseurl}flash/insaneorb.html`, "./thumbs/insaneorb.jpeg", "white", "is a pong inspired gam, but with a few minor tweaks and abilites!")
    createItem("interactivebuddy", "Interactive Buddy", `${baseurl}flash/interactivebuddy.html`, "./thumbs/interactivebuddy.png", "white", "allows you to have your own little best friend. You can have fun with him- or cause pain!")
    createItem("interactivebuddy2", "Interactive Buddy 2", `${baseurl}flash/interactivebuddy2.html`, "./thumbs/interactivebuddy2.png", "blue", "is the sequel to Interactive Buddy, which allows you to have your own little best friend. You can have fun with him- or cause pain!")
    createItem("fireboywatergirl", "Fireboy & Watergirl in The Forest Temple", `${baseurl}flash/fireboywatergirl.html`, "./thumbs/fireboywatergirl.jpeg", "white", "is a co-op game where the 2 people must escape a temple. Don't let water touch fire and fire touch water- it may not end well!")
    createItem("eaglercraft", "Eaglercraft", "https://drive.google.com/uc?export=download&id=1-MduluUms_LG7tUJyMkAPBw82O40R11R", "./thumbs/eaglercraft.png", "green", "is a Minecraft clone based for the web! You can play with friends as well!")
    createItem("ssf2", "SSF2", `${baseurl}flash/ssf2.html`, "./thumbs/ssf2.png", "blue", "is a classic flash gam. You should really give it a try!")
    createItem("houseofhazards", "House of Hazards", `${baseurl}houseofhazards`, "./thumbs/houseofhazards.png", "white", "is a platformer gam that you need to get out of the house. But other players can sabotage you on the way!")
    createItem("1v1.lol", "1v1.LOL", `${baseurl}xml/1v1lol.html`, "./thumbs/1v1lol.png", "white", "is a battle royale type game where you must survive with bots as enemeies. There are many different gamemodes- as well.", true)
    // total here: 50
}

if (page == '2') {

    document.getElementById('entries').innerText = "50"
    document.getElementById('entries_max').innerText = "100"

    createItem("geodash", "GeoDash", `${baseurl}geodash`, "./thumbs/geodash.png", "white", "is a 1-1 replica to Geomentry Dash. Give it a try, and see if you can bet the hard challenging levels!")
    createItem("motox3m", "Moto X3M", `${baseurl}motox3m`, "./thumbs/motox3m.png", "white", "is a motorcycle game where you have to get around obstables and make it to the end.")
    createItem("motox3m2", "Moto X3M 2", `${baseurl}motox3m-2`, "./thumbs/motox3m.png", "white", "is the sequal to Moto X3M, with the same premise.")
    createItem("motox3m3", "Moto X3M 3", `${baseurl}motox3m-3`, "./thumbs/motox3m.png", "white", "is the sequal to Moto X3M, with the same premise.")
    createItem("bigshotboxing", "Big Shot Boxing", `${baseurl}xml/bigshotboxing.html`, "./thumbs/bigshotboxing.png", "white", "is a fighting sim where you must be the top in boxing.", true)
    createItem("sr3d2", "Snow Rider 3D 2", `${baseurl}snowrider3d`, "./thumbs/snow-rider-3d.png", "white", "is a infinite runner, but you are on a sliegh! Very challenging, can you get all the presents?")
    createItem("s2p", "SLOPE 2 Players", `${baseurl}xml/slope2player.html`, "./thumbs/slope-2-player-logo.jpg", "white", "is a infinite runner by SLOPE, but its for 2 players isntead of 1.", true)
    createItem("soccerlegends", "Soccer Legends", `${baseurl}xml/soccerlegends.html`, "./thumbs/footballlegends.png", "white", "is another type of Basketball Legends, but soccer!", true)
    createItem("hellokittyadventure", "Hello Kitty Adventure", `${baseurl}xml/hellokittyadventure.html`, "./thumbs/hellokittyadventure.png", "white", "allows you to inbark in a new adventure in the Hello Kitty universe.", true)
    createItem("retrobowl", "Retro Bowl", `${baseurl}retrobowl`, "./thumbs/retrobowl.avif", "white", "allows players to enbark on a football journey!")
    createItem("flappyplane", "Flappy Plane", `${baseurl}flappyplane`, "./thumbs/flappyplane.jpeg", "red", "is a clone of Flappy Bird but with a interesting twist...")
    createItem("gunmayhem2", "Gun Mayhem 2", `${baseurl}flash/gunmayhem2.html`, "./thumbs/gun-mayhem-2.jpg", "white", "is a ultimate battle game! Fire and shoot until you can't no more!")
    createItem("minesweeper", "Minesweeper", "https://agentn86.github.io/js-minesweeper/", "./thumbs/minesweeper.png", "white", "-- a challenging game where you must figure out the mines before they explode you!")
    createItem("polytrack", "Polytrack", `${baseurl}multipleVersions/polytrack.html`, "./thumbs/polytrack.png", "white", "is a racing game, runs well on basically anything, and is super fun! (Even your own custom editor..)", true)
    createItem("driftboss", "Drift Boss", `${baseurl}driftboss`, "./thumbs/driftboss.png", "white", "How long can you last driving your car on a wacky road?")
    createItem("eggycar", "Eggy Car", `${baseurl}eggycar`, "./thumbs/eggycar.png", "white", "Keep your egg in your car without dropping!")
    createItem("profootball", "Pro Football", `${baseurl}flash/profootball.html`, "./thumbs/profootball.jpg", "white", "Miniclip classic!")
    createItem("pixelspeedrun", "Pixel Speedrun", `${baseurl}xml/pixelspeedrun.html`, "./thumbs/pixelspeedrun.jpg", "white", "makes you get to the end of the tough platform. Try beating your time!", true)
    createItem("doom1993", "DooM", "https://diekmann.github.io/wasm-fizzbuzz/doom/", "./thumbs/doom1993.jpg", "white", "is the original classic to DOOM 1993! This is the SHAREWARE version, so there is only one episode. No sound and melting screen as well.", true)
    createItem("javelinfighting", "Javelin Fighting", `${baseurl}xml/javelinfighting.html`, "./thumbs/javelinfighting.jpg", "white", "makes you fight an AI opponent in a fatal javelin fight!", true)
    createItem("bottleflip", "Bottle Flip", `${baseurl}iframe/bottleflip.html`, "./thumbs/bottleflip.png", "white", "makes you traverse a room without making the bottle fall to the ground!", false)
    createItem("timeshooter2", "Time Shooter 2", `${baseurl}xml/timeshooter2.html`, "./thumbs/timeshooter2.png", "white", "the second of the Time Shooter saga.", true)
    createItem("sportsheadsHockey", "Sport Heads: Ice Hockey", `${baseurl}xml/1on1hockey.html`, "./thumbs/1on1hockey.png", "white", "is a game where you fight AI in a tough, customizated battle of hockey!", false)
    createItem("fnaf", "Five Nights at Freddys", `${baseurl}xml/fnaf.html`, "./thumbs/fivenightsatfreddys.png", "white", "is the 2015 classic ported to Flash!", true)
    createItem("douchebagworkout2", "Douchebag Workout 2", `${baseurl}xml/douchebagworkout2.html`, "./thumbs/douchebagworkout2.png", "white", "makes you go on an adventure being the fittest person in the world- scratch that- the *douchebagest* person.", true)
    createItem("unicyclehero", "Unicycle Hero", `${baseurl}unicyclehero`, "./thumbs/unicylcehero.avif", "white", "-- can you beat the competition in the strange genres?", true)
    createItem("garfieldscaryscavengerhunt", "Garfields Scary Scavenger Hunt", `${baseurl}xml/garfieldscaryhunt.html`, "./thumbs/garfieldscaryscavengerhunt.png", "white", "can you help Garfield and friends get through this scary, haunted mansion?", false)
    createItem("dunkshot", "Dunk Shot", `${baseurl}xml/dunkshot.html`, "./thumbs/dunkshot.png", "white", "get to as far up in the tower-- hooping.", true)
    createItem("agenttetris", "agents tetris", "https://agentn86.github.io/tetris-html/", "./thumbs/agentstetris.png", "white", "is a port of TETRIS created by agentn86. It's simple, but it's addictive!", false)
    createItem("learntofly", "Learn to Fly", `${baseurl}flash/learntofly.html`, "./thumbs/learntofly.JPG", "white", "is a classic flash gam where you teach a penguin to fly!", false)
    createItem("learntofly2", "Learn to Fly 2", `${baseurl}flash/learntofly2.html`, "./thumbs/learntofly2.JPG", "white", "is a classic flash gam where you teach a penguin to fly-- again!", false)
    createItem("minecrafttowerdefense", "Minecraft Tower Defense", `${baseurl}flash/minecrafttowerdefense.html`, "./thumbs/minecrafttowerdefense.png", "white", "is the unofficial flash game where you protect Steve from Minecraft monsters you remember!", false)
    createItem("qwop", "QWOP", `${baseurl}flash/qwop.html`, "./thumbs/qwop.jpeg", "white", "is one of the hardest flash games ever. Can you make it to the end of the race?", false)
    createItem("picosschool", "Picos School", `${baseurl}flash/picoschool.html`, "./thumbs/picosSchool.png", "red", "is where you help Pico escape his school. Problem- this game is quite offensive. Very.", false)
    createItem("riddleschool", "Riddle School", `${baseurl}flash/riddleschool.html`, "./thumbs/riddleschool.jpeg", "white", "can you help Phil escape his school through puzzles?", false)
    createItem("riddleschool2", "Riddle School 2", `${baseurl}flash/riddleschool2.html`, "./thumbs/riddleschool2.png", "white", "can you help Phil escape again his school through puzzles?", false)
    createItem("riddleschool3", "Riddle School 3", `${baseurl}flash/riddleschool3.html`, "./thumbs/riddleschool3.png", "white", "can you help Phil escape his even bigger high school with more puzzles?", false)
    createItem("sportsheadsoccer", "Sport Heads: Football Championship", `${baseurl}flash/sportsheadssoccer.html`, "./thumbs/sportsheadSoccer.jpeg", "white", "is another classic Sports Head game where you play soccer against an AI as a head only human.", false)
    createItem("run", "Run", `${baseurl}flash/run.html`, "./comingsoon.png", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", false)
    createItem("run3", "Run 3", `${baseurl}flash/run3.html`, "./comingsoon.png", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", false)
    createItem("earthbound", "Earthbound", "https://agentsgams.github.io/emulatorjs/earthbound.html", "./thumbs/earthbound.jpeg", "white", "is the the original SNES classic that everyone knows and enjoys!", false)
    createItem("blockblast", "Block Blast", `${baseurl}multipleVersions/blockblast.html`, "./thumbs/blockblast.jpeg", "white", "is a puzzle game where you must place blocks to clear the board until you fail.", false)
    createItem("bigtowertinysquare", "Big Tower Tiny Square", `${baseurl}bigtowertinysquare`, "./thumbs/bigtowertinysquare.png", "white", "is a platformer game similar to Pixel Speedrun- instead it is way more difficult.", false)
    createItem("drifthunters", "Drift Hunters", `${baseurl}drifthunters`, "./thumbs/drifthunters.jpg", "white", "is a drift game as said in the title. Make cool moves to get the best score!", false)
    createItem("soccerrandom", "Soccer Random", `${baseurl}soccerrandom`, "./thumbs/soccer-random.png", "white", "is a game where everything is up for RNG- where you go and if you win or not.", false)
    createItem("basketrandom", "Basket Random", `${baseurl}basketrandom`, "./thumbs/basketrandom.png", "white", "is a basketball game where everything is up for RNG- where you go and if you win or not.", false)
    createItem("clusterrush", "Cluster Rush", `${baseurl}clusterrush`, "./thumbs/cluster-rush.png", "white", "is a platformer game where you jump over trucks to get to the end goal!", false)
    createItem("tinyfishing", "Tiny Fishing", `${baseurl}tinyfishing`, "./thumbs/tiny-fishing.jpg", "white", "is a fishing game where you collect fish to become rich!", false)
    createItem("bitlife", "BitLife", `${baseurl}bitlife`, "./thumbs/bitlife.png", "white", "is a life simulation game where you live your life to the best potential!", false)
    createItem("boxingrandom", "Boxing Random", `${baseurl}boxingrandom`, "./thumbs/boxingrandom.jpg", "white", "is a boxing game where everything is up for RNG- where you go and if you win or not.", false)
    // total here: 50
    // complete total: 100
}

if (page == '3') {

    document.getElementById('entries').innerText = "100"
    document.getElementById('entries_max').innerText = TOTALGAMES

    createItem("volleyrandom", "Volley Random", `${baseurl}volleyrandom`, "./thumbs/volley-random.jpg", "white", "is a volleyball project where everything is up for RNG- where you go and if you win or not.", false)
    createItem("superhot", "SUPERHOT", `${baseurl}superhot`, "./thumbs/superhot.jpg", "white", "is the original prototype for the hit project SUPERHOT!", false)
    createItem("murder", "Murder", `${baseurl}murder`, "./thumbs/murder.png", "white", "is a RNG game- kill the king and survive the others!", false)
    createItem("paperio2", "Paper.IO 2", `${baseurl}paperio2`, "./thumbs/paperio.png", "white", "is a IO project where you must take over the entire land by painting and elimating others!", false)
    createItem("grindcraft", "Grindcraft", `${baseurl}grindcraft`, "./thumbs/grindcraft.png", "white", "is a clicker project where you become Steve and use resources to make the best town!", false)
    createItem("eightball", "8Ball Pool", `${baseurl}multipleVersions/8ball.html`, "./thumbs/8ball.jpg", "white", "is a casino project where you must get all the balls in the holes, and can be played aganist AI and other players!", false)
    createItem("blumgiball", "Blumgi Ball", `${baseurl}blumgimagicball`, "./thumbs/blumgiball.png", "white", "is a basketball platformer project, with a side of puzzles. Score through challenging levels!", false)
    createItem("boxingphysics2", "Boxing Physics 2", `${baseurl}boxingphysics2`, "./thumbs/boxingrandom2.png", "white", "is somewhat similar to the random games, fight eachother in clumsy ways!", false)
    createItem("headsoccer", "Head Soccer 2022", `${baseurl}headsoccer`, "./thumbs/headsoccer2022.png", "white", "is a soccer game, as you would expect, but everything but your head and shoes are gone!", false)
    createItem("madburger", "Mad Burger", `${baseurl}madburger`, "./thumbs/mad-burger.jpg", "white", "is where you must deliver a burger hundreds of miles away- how? By throwing it.", false)
    createItem("subwaysurfers", "Subway Surfers", `${baseurl}subwaysurfers`, "./thumbs/subway-surfers-stpetersburg.jpg", "white", "is a endless runner classic- run away from the guard and his dog!", false)
    createItem("tennisphysics", "Tennis Physics", `${baseurl}tennisphysics`, "./thumbs/TennisPhysics.jpg", "white", "is made by the same creators of the Random games, randomly move around in a game of tennis.", false)
    createItem("gunspin", "Gunspin", `${baseurl}gunspin`, "./thumbs/gunspin.png", "white", "is a platformer game, somewhat. Use the imense power of your weapon to get sent to the other side!", false)
    createItem("2048", "2048", `${baseurl}2048`, "./thumbs/2048.png", "white", "is a strategy project- get to 2048 without running out of spaces.", false)
    createItem("crossyroad", "Crossy Road", `${baseurl}crossyroad`, "./thumbs/crossyroad.png", "white", "is where you must get to the end... there isnt... whilst avoiding challenges throughout!", false)
    createItem("johnnyupgrade", "Johnny Upgrade", `${baseurl}johnny-upgrade`, "./thumbs/johnny-upgrade.png", "white", "is a platformer project, keep upgrading til you get to the end.", false)
    createItem("motox3mwinter", "Moto X3M Winter", `${baseurl}motox3m-winter`, "./thumbs/motoxm3-winter.png", "white", "is the sequal to Moto X3M, but christmas, with the same premise.", false)
    createItem("doodlejump", "Doodle Jump", `${baseurl}doodlejump`, "./thumbs/doodlejump.jpg", "white", "is a endless platformer project, keep jumping and avoid dangerous objects and things along the way.", false)
    createItem("zeepkistcrash2d", "Zeepkist Crash 2D", `${baseurl}zeepkistcrash2d`, "./thumbs/zeepkistcrash2d.jpg", "white", "is a ragdoll project, go down a hill; get cash; repeat.")
    createItem("ovo", "OvO", `${baseurl}ovo`, "./thumbs/ovo.jpeg", "white", "is a platformer project that is very difficult and only the most tough can beat it... can you?")
    createItem("theworldseasyestgame", "The Worlds Easy-est Game", `${baseurl}flash/theworldseasiestgame.html`, "./thumbs/the-worlds-easyest-game.png", "white", "is a puzzle project, similar to the Impossible Quiz. But it is easier now! Right..?")
    createItem("hypersnake", "Hypersnake", `${baseurl}hypersnake`, "./thumbs/hypersnake.jpeg", "white", "is a puzzle project, keep the snake alive and get past challenges.")
    createItem("raftwars", "Raft Wars", `${baseurl}raftwars`, "./thumbs/raftwars.png", "white", "is a puzzle shooter project where you protect your new gained wealth from pirates and other people.")
    createItem("2minfootball", "2 Minute Football", `${baseurl}multipleVersions/2minutefootball.html`, "./thumbs/2minfootball.jpg", "white", "is football but quite short and it's a very fun casual project.")

}

// createItem("nowgg", "now.gg unblckr", "https://agents-nowgg.glitch.me/", "./comingsoon.png", "white", "*THIS WILL SOON BE MOVED TO AGENTS TOOLS*")
