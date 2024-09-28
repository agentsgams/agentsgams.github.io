document.addEventListener("DOMContentLoaded", function() {
    // Create style element
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
        #button {
            display: none;
        }
        .imgb_vis {
            animation: imgb-animation 7s linear;
        }
        @keyframes imgb-animation {
            10% {
                transform: translateX(0);
            }
            20% {
                transform: translateX(100px);
            }
            90% {
                transform: translateX(100px);
            }
            100% {
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Create button element
    var button = document.createElement("div");
    button.id = "button";
    button.className = "imgb";
    button.style = "position:fixed;top:10%;left:-100px;z-index:10";
    button.innerHTML = '<a target="_blank" href="https://agentn86.github.io/agentgam" title="More of agents gams here!"><img src="https://agentn86.github.io/agentgam/gams/xml/moregam.png" width="100" height="30" style="cursor:pointer;" alt="More Unblocked Games Agents Gams"></a>';
    document.body.appendChild(button);

    // Adjustable timings
    var showTime = 10000; // 10 secs
    var hideTime = 180000; // 3 mins

    // Toggle button visibility
    var toggleButton = function() {
        button.style.display = button.style.display === "block" ? "none" : "block";
        setTimeout(toggleButton, button.style.display === "block" ? hideTime : showTime);
    };
    toggleButton();

    // Add animation class
    document.querySelector(".imgb").classList.add("imgb_vis");
})