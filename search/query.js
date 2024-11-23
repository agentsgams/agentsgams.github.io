function openWindow(link, title) {
    var win = window.open()
    win.document.body.style.margin = '0'
    win.document.body.style.height = '100vh'
    win.document.title = title + " - agents gams"
    var iframe = win.document.createElement('iframe')
    iframe.style.border = 'none'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    iframe.style.margin = '0'
    iframe.src = link
    win.document.body.appendChild(iframe)
}

function addItem(formalname, gamelink, iframe) {
    var firstLetter = formalname.charAt(0).toUpperCase();
    var listElement = document.createElement("li");
    var anchorElement;

    if (iframe) {
        anchorElement = document.createElement("a");
        anchorElement.onclick = function () {
            openWindow(gamelink, formalname);
        };
        anchorElement.className = "normal";
        anchorElement.textContent = formalname;
    } else {
        anchorElement = document.createElement("a");
        anchorElement.href = gamelink;
        anchorElement.className = "normal";
        anchorElement.textContent = formalname;
    }

    listElement.appendChild(anchorElement);

    var headerElement = document.querySelector(`[class*="${firstLetter}"]`);
    if (headerElement) {
        var ulElement = headerElement.parentNode;
        ulElement.insertBefore(listElement, headerElement.nextSibling);
    } else {
        console.log(`No header element found for letter ${firstLetter}`);
    }
}



addItem("Epic Boss Battle", "https://agentn86.github.io/epicbossbattle/v1.3.3/",)
addItem("SMnake", "https://taco-eating-truck.glitch.me/index.html",)
addItem("Coin Collector", "https://coincollecor.glitch.me/index.html",)
addItem("3D Maze", "./../gams/3dmaze.html",)
addItem("Alien Shooter", "./../gams/alienshooter.html",)
addItem("Bitcoin Clicker", "https://julianyaman.github.io/bitcoin-clicker/",)
addItem("Cookie Clicker", "https://steamcookieclicker.github.io/",)
addItem("Papa's Pizzeria", "./../gams/flash/papapizzera.html",)
addItem("Papa's Burgeria", "./../gams/flash/papaburger.html",)
addItem("Age of War 2", "./../gams/flash/ageofwar2.html",)
addItem("Run 2", "./../gams/flash/run2.html",)
addItem("Whack your Boss", "./../gams/flash/whackboss.html",)
addItem("Duck Life", "./../gams/flash/ducklife.html",)
addItem("The Impossible Quiz", "./../gams/flash/impossiblequiz.html",)
addItem("The World's Hardest Game", "./../gams/flash/worldhardgame.html",)
addItem("Portal: The Flash Version", "./../gams/flash/portalflash.html",)
addItem("Age of War", "./../gams/flash/ageofwar.html",)
addItem("Papa's Freezeria", "./../gams/flash/papafreezer.html",)
addItem("Papa's Pancakeria", "./../gams/flash/papapancake.html",)
addItem("Bloons Tower Defense 5", "./../gams/flash/bloontd5.html",)
addItem("SLOPE", "./../gams/slope",)
addItem("Basketball Stars", "./../gams/basketballstars",)
addItem("Time Shooter 3", "./../gams/timeshooter3",)
addItem("Fancy Pants Adventures", "./../gams/flash/fancypants.html",)
addItem("Alien Hominid", "./../gams/flash/alienhom.html",)
addItem("Toss the Turtle", "./../gams/flash/tosstheturtle.html",)
addItem("Bloxorz", "./../gams/flash/bloxorz.html",)
addItem("Wasted Sky", "./../gams/flash/wastedsky.html",)
addItem("The Impossible Quiz 2", "./../gams/flash/impossiblequiz2.html",)
addItem("Whack your Computer", "./../gams/flash/whackcomputer.html",)
addItem("Papa's Cheeseria", "./../gams/flash/papaCheese.html",)
addItem("Papa's Cupcakeria", "./../gams/flash/papaCupcake.html",)
addItem("Papa's Donut", "./../gams/flash/papaDonut.html",)
addItem("Papa's Hotdogeria", "./../gams/flash/papaHotDog.html",)
addItem("Papa's Pastaria", "./../gams/flash/papaPastaria.html",)
addItem("Papa's Scooperia", "./../gams/flash/papaScooperia.html",)
addItem("Papa's Sushiria", "./../gams/flash/papaSushiria.html",)
addItem("Papa's Taco Mia", "./../gams/flash/papaTacoMia.html",)
addItem("Papa's Wingeria", "./../gams/flash/papaWingeria.html",)
addItem("Deep Sleep", "./../gams/flash/deepsleep.html",)
addItem("Deeper Sleep", "./../gams/flash/deepersleep.html",)
addItem("SM63", "./../gams/flash/sm63.html",)
addItem("Insane Orb", "./../gams/flash/insaneorb.html",)
addItem("Interactive Buddy", "./../gams/flash/interactivebuddy.html",)
addItem("Interactive Buddy 2", "./../gams/flash/interactivebuddy2.html",)
addItem("Fireboy & Watergirl in The Forest Temple", "./../gams/flash/fireboywatergirl.html",)
addItem("Eaglercraft", "https://drive.google.com/uc?export=download&id=1-MduluUms_LG7tUJyMkAPBw82O40R11R",true)
addItem("SSF2", "./../gams/flash/ssf2.html",)
addItem("House of Hazards", "./../gams/houseofhazards/index.html",)
addItem("1v1.LOL", "https://agentsgams.github.io/agentsgams/gams/xml/1v1lol.html", true)
addItem("GeoDash", "./../gams/geodash/index.html",)
addItem("Moto X3M", "./../gams/iframe/motox3m",)
addItem("Moto X3M 2", "./../gams/iframe/motox3m2",)
addItem("Moto X3M 3", "./../gams/iframe/motox3m3",)
addItem("Big Shot Boxing", "https://agentsgams.github.io/agentsgams/gams/xml/bigshotboxing.html", true)
addItem("Snow Rider 3D 2", "https://agentsgams.github.io/agentsgams/gams/xml/snowrider3d2.html")
addItem("SLOPE 2 Players", "https://agentsgams.github.io/agentsgams/gams/xml/slope2player.html", true)
addItem("Soccer Legends", "https://agentsgams.github.io/agentsgams/gams/xml/soccerlegends.html", true)
addItem("Hello Kitty Adventure", "https://agentsgams.github.io/agentsgams/gams/xml/hellokittyadventure.html", true)
addItem("Retro Bowl", "./../gams/retrobowl/index.html",)
addItem("Flappy Plane", "./../gams/flappyplane/index.html",)
addItem("Gun Mayhem 2", "./../gams/flash/gunmayhem2.html",)
addItem("Minesweeper", "https://agentn86.github.io/js-minesweeper/",)
addItem("Polytrack", "https://agentsgams.github.io/agentsgams/gams/xml/polytrack.html", true)
addItem("Drift Boss", "./../gams/driftboss",)
addItem("Eggy Car", "./../gams/eggycar",)
addItem("Pro Football", "./../gams/flash/profootball.html",)
addItem("Pixel Speedrun", "https://agentsgams.github.io/agentsgams/gams/xml/pixelspeedrun.html", true)
addItem("DooM", "https://diekmann.github.io/wasm-fizzbuzz/doom/", true)
addItem("Javelin Fighting", "https://agentsgams.github.io/agentsgams/gams/xml/javelinfighting.html", true)
addItem("Bottle Flip", "./../gams/iframe/bottleflip.html", false)
addItem("Time Shooter 2", "./../gams/xml/timeshooter2.html", true)
addItem("Sport Heads: Ice Hockey", "https://agentsgams.github.io/agentsgams/gams/xml/1on1hockey.html", false)
addItem("Five Nights at Freddys", "https://agentsgams.github.io/agentsgams/gams/xml/fnaf.html", true)
addItem("Douchebag Workout 2", "https://agentsgams.github.io/agentsgams/gams/xml/douchebagworkout2.html", true)
addItem("Unicycle Hero", "https://agentsgams.github.io/agentsgams/gams/xml/unicyclehero.html", true)
addItem("Garfield's Scary Scavenger Hunt", "https://agentsgams.github.io/agentsgams/gams/xml/garfieldscaryhunt.html", false)
addItem("Dunk Shot", "https://agentsgams.github.io/agentsgams/gams/xml/dunkshot.html", true)
addItem("agents tetris", "https://agentn86.github.io/tetris-html/", false)
addItem("Learn to Fly", "https://agentsgams.github.io/agentsgams/gams/flash/learntofly.html", false)
addItem("Learn to Fly 2", "https://agentsgams.github.io/agentsgams/gams/flash/learntofly2.html", false)
addItem("Minecraft Tower Defense", "https://agentsgams.github.io/agentsgams/gams/flash/minecrafttowerdefense.html", false)
addItem("QWOP", "https://agentsgams.github.io/agentsgams/gams/flash/qwop.html", false)
addItem("Picos School", "https://agentsgams.github.io/agentsgams/gams/flash/picoschool.html", false)
addItem("Riddle School", "https://agentsgams.github.io/agentsgams/gams/flash/riddleschool.html", false)
addItem("Riddle School 2", "https://agentsgams.github.io/agentsgams/gams/flash/riddleschool2.html", false)
addItem("Riddle School 3", "https://agentsgams.github.io/agentsgams/gams/flash/riddleschool3.html", false)
addItem("Sport Heads: Football Championship", "https://agentsgams.github.io/agentsgams/gams/flash/sportsheadssoccer.html", false)
addItem("Run", "https://agentsgams.github.io/agentsgams/gams/flash/run.html", false)
addItem("Run 3", "https://agentsgams.github.io/agentsgams/gams/flash/run3.html", false)
addItem("Earthbound", "https://agentsgams.github.io/emulatorjs/earthbound.html", false)

// after all the items are added, we add the search bar
document.getElementById('searchBar').style.display = "block"