var season = "halloween"

switch (season) {
    case 'halloween':
        document.getElementById('agentgam').style = "font-family:schlop;font-size:40px;"
        document.getElementById('happyhalloween').style="color:orange;"
        document.getElementById('halloween_topbargifs').style=""
        document.getElementById('halloween_bottom').style=""
        document.getElementById('counterCenter').style="position: absolute; left: 100px; margin-top: 60px;"
        document.getElementById('audio_src').src = "./music/halloween.mp3"
        document.getElementById('audiothing').load()
        break
}