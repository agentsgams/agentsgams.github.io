
# agents gams

A game unblocker that fight aganists "Light Speed Filter Agent". The project is owned by one person and anybody can collaberate.

Anybody is also allowed to create pull requests and add games. You can do that by reading the "Contributing" section.

#### **Links that must be unblocked to use agents gams**
Can be viewed in [robots.txt](https://agentsgams.github.io/robots.txt)

- *.github.io
- images-opensocial.googleusercontent.com
- book-opensocial.googleusercontent.com
- *.glitch.me
- cdn.jsdelivr.net
## Run Locally

Firstly, clone the project

```bash
  git clone https://github.com/agentsgams/agentsgams.github.io.git
```

Go to the project directory

```bash
  cd agentn86.github.io
```
*(or whatever it's titled for you)*

And just open the file with Visual Studio code, or with your code editor.

```bash
  code
```

This is all pure HTML, JS, and CSS so no dependencies are required- as well a full-stack website.

If you decide to use some code from agents gams (which, why should you), you should check out the license. It has some great information of what you can or cannot do.
## Contributing

> [!IMPORTANT]
> Do not contribute in the "old.js"! A new update will now allow games to be added via the JSON file (found in assets/json/projects.json) instead of a long function. **I recommend you do not contribute until then!**

Contributions are always welcome! We always need a new game or feature added to keep the community strong.

See `gamesContribute.md` for a simple tutorial to add a game with ease.

Please adhere to this project's `code of conduct`.
## Documentation

Multiple folders should be found in the `master` branch. These folders will be described here.

```
root/
|-- ads/
|-- agentstools/
|-- changelog/
|-- gams/
|-- halloffame/
|-- juan/
|-- movies/
|-- music/
|-- scripts/
|-- search/
|-- seasonalGIFS/
|-- thumbs/
```

| Folder Name      | Description |
| ----------- | ----------- |
| `ads/`      | Where all ads are hosted. Should not be messed with.       |
| `agentstools/`   | Where all misc tools are hosted. New tools should be added there in the `agentstools/tools/` folder.        |
| `changelog/` | Where all changelogs are put. Lists are opened in the **next element**. |
| `gams/` | All games are hosted **locally**. All game files will be put in a folder. |
| `halloffame/` | Where everyone is credited. This should not be changed, unless you add something new in a pull request. |
| `juan/` | Easter egg for agents gams. Should not be changed. |
| `movies/` | *Coming soon.* |
| `music/` | Homepage music is hosted there. Seasonal mp3s are also added there. |
| `scripts/` | Homepage scripts are added into this folder. They should be put in the `<!-- Scripts -->` section in `index.html`. |
| `search/` | All games are shown in a list. To add a game, change the `index.html`'s script (in the file) to add a game to the list. |
| `seasonalGIFS/` | Seasonal GIFS (like october or christmas) should be added in their respected folder. Should not be changed unless it is time.|
| `thumbs/` | All images for gams in the homepage are hosted here. When adding a game, make sure you link it over here.|
