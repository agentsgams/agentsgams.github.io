
# Game Contribution
*This guide is still under construction.*
If you would like to add a game to agents gams, this is the place! This simple tutorial will get you through the spaghetti code created by agentn86.

## Step One: Setup
Firstly, you will want to make sure that either:
* You have all the game files, and can be ran on a website
* **OR**
* Have the game files on a link, like `images-opensocial.googleusercontent.com` or `cdn.jsdelivr.net`.

Once you have these game files, you are ready to add a game. I would make sure that you have the latest version of agents gams as a **local project** by following [this guide](https://github.com/agentsgams/agentsgams.github.io/tree/main?tab=readme-ov-file#run-locally). As well, make sure that the latest batch of games doesn't include yours. If you find out that a game doesn't work and you have the files to fix it, **make sure on the pull request you state "fix", or something of the sort**.

## Step Two: Getting 'agents gams' files
Now that you are prepared for the uploading, heres where your files must go:
* **REQUIRED:** Thumbnail should go in `thumbs/` in the root directory.
* **REQUIRED:** Make sure your game files go in a folder in `gams/` in the root directory. For example, a game called "Adventures of Bob" would have a folder in gams called "adventuresofbob". Make sure future contributors can easily find the game files.
  * *If you have a game link, you can skip this step.
* If your game is from a game link (i.e. opensocial or jsdelivr), MAKE SURE YOU CHECK THAT IT IS A "iFRAME GAME".

## Step Three: Generating functions
You are almost there. "agents gams" does not put games in one div, instead it will use functions to add it. To find where your games go, follow this quick list.

* Games on the homepage are added in the `gamHTML.js` file in the root directory.
* Games in the search bar are added by the `<script>` in `search/index.html`.

*How do you get these functions?*, you probably ask. You will get these files in the [code generator](https://agentsgams.github.io/codegen), hosted on agents gams servers. Put all your information in the boxes and hit **Generate!**.

The first output box is for `gamHTML.js`, whilst the second output box is for the search script.

## Step Four: Adding to agents games

### Adding to `gamHTML.js`
*`gamHTML.js` is found in the root directory.*

Make sure you follow the page list system. As well, increment the `TOTALGAMES` variable on line 29. Each page is 50 games each.

Once you find the right page if statement, add the first output box's function below the rest of the games. For example, this piece of code:

```js
    // Code going over here...
    createItem("riddleschool2", "Riddle School 2", "https://agentsgams.github.io/gams/flash/riddleschool2.html", "./thumbs/riddleschool2.png", "white", "can you help Phil escape again his school through puzzles?", false)
    createItem("riddleschool3", "Riddle School 3", "https://agentsgams.github.io/gams/flash/riddleschool3.html", "./thumbs/riddleschool3.png", "white", "can you help Phil escape his even bigger high school with more puzzles?", false)
    createItem("sportsheadsoccer", "Sport Heads: Football Championship", "https://agentsgams.github.io/gams/flash/sportsheadssoccer.html", "./thumbs/sportsheadSoccer.jpeg", "white", "is another classic Sports Head game where you play soccer against an AI as a head only human.", false)
    createItem("run", "Run", "https://agentsgams.github.io/gams/flash/run.html", "./comingsoon.png", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", false)
    createItem("run3", "Run 3", "https://agentsgams.github.io/gams/flash/run3.html", "./comingsoon.png", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", false)
}
```
And you have a function like this to add:

```js
createItem("qwop", "QWOP", "https://agentsgams.github.io/gams/flash/qwop.html", "./thumbs/qwop.jpeg", "white", "is one of the hardest flash games ever. Can you make it to the end of the race?", false)
```

You would add it like this:

```js
    // Code going over here...
    createItem("riddleschool2", "Riddle School 2", "https://agentsgams.github.io/gams/flash/riddleschool2.html", "./thumbs/riddleschool2.png", "white", "can you help Phil escape again his school through puzzles?", false)
    createItem("riddleschool3", "Riddle School 3", "https://agentsgams.github.io/gams/flash/riddleschool3.html", "./thumbs/riddleschool3.png", "white", "can you help Phil escape his even bigger high school with more puzzles?", false)
    createItem("sportsheadsoccer", "Sport Heads: Football Championship", "https://agentsgams.github.io/gams/flash/sportsheadssoccer.html", "./thumbs/sportsheadSoccer.jpeg", "white", "is another classic Sports Head game where you play soccer against an AI as a head only human.", false)
    createItem("run", "Run", "https://agentsgams.github.io/gams/flash/run.html", "./comingsoon.png", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", false)
    createItem("run3", "Run 3", "https://agentsgams.github.io/gams/flash/run3.html", "./comingsoon.png", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.", false)
    /* Added */ createItem("qwop", "QWOP", "https://agentsgams.github.io/gams/flash/qwop.html", "./thumbs/qwop.jpeg", "white", "is one of the hardest flash games ever. Can you make it to the end of the race?", false)
}
```

### Adding to search bar
*The script for the search bar is found at `search/index.html` at the `<script>`.*

Make sure that your game's inital is included in the `myUL`.
