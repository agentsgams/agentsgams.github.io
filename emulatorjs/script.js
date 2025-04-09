let enableDebug = false;
let enableThreads = false;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get('debug') == 1) {
    enableDebug = true;
    console.log("Debug is enabled");
} else {
    console.log("Debug is disabled");
}

if (urlParams.get('threads') == 1) {
    if (window.SharedArrayBuffer) {
        enableThreads = true;
        console.log("Threads are enabled");
    } else {
        console.warn("Threads are disabled as SharedArrayBuffer is not available. Threads requires two headers to be set when sending you html page. See https://stackoverflow.com/a/68630724");
        console.log("Threads are disabled");
    }
} else {
    console.log("Threads are disabled");
}

input.onchange = async () => {
    const url = input.files[0]
    const parts = input.files[0].name.split(".")

    const core = await (async (ext) => {
        if (["fds", "nes", "unif", "unf"].includes(ext))
            return "nes"

        if (["smc", "fig", "sfc", "gd3", "gd7", "dx2", "bsx", "swc"].includes(ext))
            return "snes"

        if (["z64", "n64"].includes(ext))
            return "n64"

        if (["pce"].includes(ext))
            return "pce"

        if (["ngp", "ngc"].includes(ext))
            return "ngp"

        if (["ws", "wsc"].includes(ext))
            return "ws"

        if (["col", "cv"].includes(ext))
            return "coleco"

        if (["d64"].includes(ext))
            return "vice_x64sc"

        if (["nds", "gba", "gb", "z64", "n64"].includes(ext))
            return ext

        return await new Promise(resolve => {
            var coreValues = {
                "Nintendo 64": "n64",
                "Nintendo Game Boy": "gb",
                "Nintendo Game Boy Advance": "gba",
                "Nintendo DS": "nds",
                "Nintendo Entertainment System": "nes",
                "Super Nintendo Entertainment System": "snes",
                "PlayStation": "psx",
                "Virtual Boy": "vb",
                "Sega Mega Drive": "segaMD",
                "Sega Master System": "segaMS",
                "Sega CD": "segaCD",
                "Atari Lynx": "lynx",
                "Sega 32X": "sega32x",
                "Atari Jaguar": "jaguar",
                "Sega Game Gear": "segaGG",
                "Sega Saturn": "segaSaturn",
                "Atari 7800": "atari7800",
                "Atari 2600": "atari2600",
                "NEC TurboGrafx-16/SuperGrafx/PC Engine": "pce",
                "NEC PC-FX": "pcfx",
                "SNK NeoGeo Pocket (Color)": "ngp",
                "Bandai WonderSwan (Color)": "ws",
                "ColecoVision": "coleco",
                "Commodore 64": "vice_x64sc",
                "Commodore 128": "vice_x128",
                "Commodore VIC20": "vice_xvic",
                "Commodore Plus/4": "vice_xplus4",
                "Commodore PET": "vice_xpet"
            }

            const cores = Object.keys(coreValues).sort().reduce(
                (obj, key) => {
                    obj[key] = coreValues[key];
                    return obj;
                },
                {}
            );

            const button = document.createElement("button")
            const select = document.createElement("select")

            for (const type in cores) {
                const option = document.createElement("option")

                option.value = cores[type]
                option.textContent = type
                select.appendChild(option)
            }

            button.onclick = () => resolve(select[select.selectedIndex].value)
            button.textContent = "Load game"
            box.innerHTML = ""

            box.appendChild(select)
            box.appendChild(button)
        })
    })(parts.pop())

    const div = document.createElement("div")
    const sub = document.createElement("div")
    const script = document.createElement("script")

    sub.id = "game"
    div.id = "display"

    const top = document.getElementById("top");
    const link = document.getElementById("library");
    top.remove();
    box.remove();
    link.remove();
    div.appendChild(sub);
    document.body.appendChild(div);

    window.EJS_player = "#game";
    window.EJS_gameName = parts.shift();
    window.EJS_biosUrl = "";
    window.EJS_gameUrl = url;
    window.EJS_core = core;
    window.EJS_pathtodata = "data/";
    window.EJS_startOnLoaded = true;
    window.EJS_DEBUG_XX = enableDebug;
    window.EJS_disableDatabases = true;
    window.EJS_threads = enableThreads;

    script.src = "data/loader.js";
    document.body.appendChild(script);
}

box.ondragover = () => box.setAttribute("drag", true);
box.ondragleave = () => box.removeAttribute("drag");