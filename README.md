
<div align="center">
  <img src="https://raw.githubusercontent.com/agentsgams/.github/refs/heads/main/header.png">
  <p><i>Started since <b>extremely</b> early 2024, <b>agents gams</b> is a unblocked games service.</i></p>
</div>
<div align="center">
  [![License](https://img.shields.io/github/license/agentsgams/agentsgams.github.io)]
  [![Repo Size](https://img.shields.io/github/repo-size/agentsgams/agentsgams.github.io?label=Total%20size)]
  [![Stargazers](https://img.shields.io/github/stars/agentsgams/agentsgams.github.io)]
</div>

----

agents gams is a simple, but effective game website that focuses more on the community rather than competition. The project is owned by one person and anybody can collaberate. Anybody is also allowed to create pull requests and add games. You can do that by reading the "Contributing" section.

> [!TIP]
> If you use/fork this project, please give it a star in the [original repository](https://github.com/agentsgams/agentsgams.github.io)!

**Also, be sure to join the Discord community for support, links, and to communicate with others/agentn86.**

[<img src="https://raw.githubusercontent.com/agentsgams/agentsgams.github.io/refs/heads/main/assets/img/disc.png">](https://discord.gg/AMAA6tkysF)

## Deployment

### Via Cloud

> [!NOTE]
> You will have to sync every so often to get the latest stuff.. though you can make the website "XML" though it hasn't been released yet.

> [!WARNING]
> I don't recommend you use Cyclic as it is being shut down in a couple months, you can if you already have a preexisting account though. The option will be removed once Cyclic gets rid of their Pro tier servers.

You can easily clone and host the website using one of these service providers *though, if you wouldn't like to deal with the hassle you can just find another hoster or use the offical websites*:

[![Run on Replit](https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg)](https://replit.com/github/agentsgams/agentsgams.github.io)
[![Remix on Glitch](https://binbashbanana.github.io/deploy-buttons/buttons/remade/glitch.svg)](https://glitch.com/edit/#!/import/github/agentsgams/agentsgams.github.io)
[![Deploy to IBM Cloud](https://binbashbanana.github.io/deploy-buttons/buttons/remade/ibmcloud.svg)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/agentsgams/agentsgams.github.io)
[![Deploy to Amplify Console](https://binbashbanana.github.io/deploy-buttons/buttons/remade/amplifyconsole.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/agentsgams/agentsgams.github.io)
[![Run on Google Cloud](https://binbashbanana.github.io/deploy-buttons/buttons/remade/googlecloud.svg)](https://deploy.cloud.run/?git_repo=https://github.com/agentsgams/agentsgams.github.io)
[![Deploy to Oracle Cloud](https://binbashbanana.github.io/deploy-buttons/buttons/remade/oraclecloud.svg)](https://cloud.oracle.com/resourcemanager/stacks/create?zipUrl=https://github.com/agentsgams/agentsgams.github.io/archive/refs/heads/main.zip)
[![Deploy with Vercel](https://binbashbanana.github.io/deploy-buttons/buttons/remade/vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/agentsgams/agentsgams.github.io) 
[![Deploy with Netlify](https://binbashbanana.github.io/deploy-buttons/buttons/remade/netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/agentsgams/agentsgams.github.io)
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg)](https://render.com/deploy?repo=https://github.com/agentsgams/agentsgams.github.io)
[![Deploy to Cyclic](https://binbashbanana.github.io/deploy-buttons/buttons/remade/cyclic.svg)](https://app.cyclic.sh/api/app/deploy/agentsgams/agentsgams.github.io)

### Locally

Firstly, clone the project

```bash
  git clone https://github.com/agentsgams/agentsgams.github.io.git
```

Go to the project directory

```bash
  cd agentsgams.github.io
```
*(or whatever it's titled for you)*

And just open the file with Visual Studio code, or with your code editor.

```bash
  code
```

This is all pure HTML, JS, and CSS so no dependencies are required or a full stack website. If you decide to use some code from agents gams (which, why should you it sucks), you should check out the license. It has some great information of what you can or cannot do.

## Contributing

> [!IMPORTANT]
> Do not contribute in the "old.js"! A new update will now allow games to be added via the JSON file (found in assets/json/projects.json) instead of a long function. **I recommend you do not contribute until then!**

Contributions are always welcome! We always need a new game or feature added to keep the community strong. Add game files to the [projects repository](https://github.com/agentsgams/projects) and add the game information in the [JSON file](./assets/json/projects.json). ALSO- be sure to make a XML version and make the file the same name as the projects folder in [this repository](https://github.com/agentsgams/projectsxml).

**For example:** adding a project titled "example" should have the game files in the projects repository, linked in the JSON file:

```json
  {"name": "example", "formal": "Example", "description": "is an example..", "image": "example.png", "color": "white", "link": "example"}
```

As well, make sure to make the project folder (in this case "example") the same as the XML version using CDATA. So `example/` should be the same as `example.xml`.
