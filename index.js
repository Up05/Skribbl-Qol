



// i use "better comments" VScode extension: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments that's why
// the comments have ["*", "!", "TODO", "?", ... ] symbols in them

// this thing is intended for firefox, though it should work on chrome aswell, i have no idea about the download current canvas feature

// also my variable names are garbo, srr... i try... sometimes*

// also wow i got spoiled by .css and .html... 



// console.clear()
// console.log("%c started!", "color: lime; font-size: 32px;")

// * custom elements       ##################################################################################################################

let menu = document.createElement("div") // * main thing!
let modName = document.createElement("h1")

// ! ##########################################################################################################

let mutePlayerInput = document.createElement("input")
let mutePlayer = newButton("MUTE"); 

mutePlayer.addEventListener('click', () => {
    userNames.push(mutePlayerInput.value); 
    mutePlayer.style.backgroundColor = "#f00"
    setTimeout(() => mutePlayer.style.backgroundColor = "#a02a", 200)
})

// ! ##########################################################################################################

menu.addEventListener("mouseover", function(e){ // ! :hover
    if(parseInt(menu.style.left, 10) < 0){
        for(let i of menu.children){
            i.style.pointerEvents = "none"
        }

        menu.animate([{
            left: 20 - window.innerWidth / 4 + "px"
        }, {
            left: 0 + "px"
        }
        ], {
            duration: 150,
            easing: "ease-out",
            direction: "alternate"

        })
        setTimeout(() => {
            menu.style.left = 0 + "px"; 
            for(let i of menu.children){
                i.style.pointerEvents = "auto"
            }
        }, 150)
    }
})

menu.addEventListener("mouseout", function(e){ // ! not(:hover)
    if(e.clientX > window.innerWidth / 4){
        menu.animate([{
            left: 0 + "px"
        }, {
            left: 20 - window.innerWidth / 4 + "px"
        }
        ], {
            duration: 250,
            easing: "ease-out",
            direction: "alternate"
        })
    setTimeout(() => menu.style.left = 20 - window.innerWidth / 4 + "px", 250)
    }
})

// ! ##########################################################################################################

let clearCanvas = newButton("clear current canvas", "u_clearCanvas")

clearCanvas.addEventListener("click", function(){
    let canvas = document.getElementsByTagName('canvas')[0]
    let ctx = canvas.getContext("2d")
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
})

// ! ##########################################################################################################

let AutoNice = newH1("--=Automated niceness=--")

let br = document.createElement("br")
let autoLike = document.createElement("input")
    autoLike.type = "checkbox"

let autoLikeLabel = document.createElement("label")
    autoLikeLabel.innerText = "Auto thumbs up"
    
let thumbsUp = document.getElementsByClassName("thumbsUp")
let timer    = document.getElementById("timer"           ).innerText

let autoLikeBool = false

setInterval(function(){
    if(timer <= 5 && autoLike.checked)
        document.querySelector('.thumbsUp').click()
}, 1000)

// ! ##########################################################################################################

let saveCanvasButton = newButton("save current canvas")
saveCanvasButton.addEventListener("click", function() {
    saveCanvas("skribbl canvas - " + Math.floor(Math.random() * 100000), "canvasGame")
})

saveCanvasButton.addEventListener("mouseover", function(e){
    e.target.style.background = "#4d4"
})

saveCanvasButton.addEventListener("mouseout", function(e){
    e.target.style.background = "#3a3"
})

// ! ##########################################################################################################


menu.appendChild(modName)
menu.appendChild(newH1("--=Muting=--"))

menu.appendChild(mutePlayerInput)

menu.appendChild(mutePlayer)

menu.appendChild(clearCanvas)

menu.appendChild(AutoNice)
menu.appendChild(br)
menu.appendChild(autoLike); menu.appendChild(autoLikeLabel)
menu.appendChild(saveCanvasButton)

document.body.appendChild(menu);

// * default elements       ##################################################################################################################

function newButton(name, id){
    button = document.createElement("button")

    button.innerText = name
    if(id)
    button.id = id

    button.style.position = "relative"
    button.style.align =    "center"
    button.style.outline =  "none"
    button.style.background="#a02a" 
    button.style.border =   "none" 
    button.style.color =    "#fff" 
    button.style.width =    "6vw" 
    button.style.height =   "4vh"
    button.style.zIndex =   "2"
    button.style.boxShadow ="4px 4px 2px #000" 

    button.style.fontSize = "16px"

    button.addEventListener("mouseover", function(e){
        e.target.style.background = "#a02e"
        e.target.style.boxShadow  = "4px 4px 2px #211"
    })

    button.addEventListener("mouseout", function(e){
        e.target.style.background = "#a02a"
        e.target.style.boxShadow  = "4px 4px 2px #000" 
    })

    return button
}

// ! #######################################################################################################################################

function newH1(text){
    let h1 = document.createElement("h2") // TODO     "It's more fun this way ( ͡° ͜ʖ ͡°)" -Ult1

    h1.innerText = text

    h1.style.zIndex =   "2"
    h1.style.position = "relative"

    h1.style.fontWeight = "800"
    h1.style.fontSize = "32px"
    h1.style.color = "#ccc"
    h1.style.textShadow = "2px 2px 1px #000"
    h1.style.textAlign = "center"
    h1.style.fontFamily = '"Lucida Console", "Courier New", monospace'

    h1.style.marginLeft = "auto 0"
    h1.style.marginTop = "5vh"

    return h1
}

// * mute fn       ##################################################################################################################

let names = ["James", "Linda", "David", "Susan", "Sarah", "Karen", "Nancy", "Betty", "Emily", "Donna", "KevinCarol", "Brian", "Jason", "Laura", "Jacob", "Helen", "Larry", "Scott", "FrankDebra", "Janet", "JerryMaria", "Tyler", "AaronDiane", "Julie", "HenryJoyce", "Kelly", "Peter", "Ethan", "Megan", "Keith", "Roger", "Terry", "Jesse", "Dylan", "BryanAlice", "Doris", "Billy", "BruceJulia", "Grace", "LoganAmber", "Wayne", "Ralph", "RandyMarie", "Diana", "Louis", "Bobby", "Kayla"]

// * https://www.ssa.gov/oact/babynames/decades/century.html
// * filtered to only 8 chars of length with excel, cause i didn't know!
// * https://onlinetexttools.com/trim-text
// * https://tools.knowledgewalls.com/onlinetabremover
// * https://codebeautify.org/remove-empty-lines
// * https://arraythis.com/

// ! THERE'S A WEBSITE FOR EVERYTHING!!!!!

let userNames = []
let userLoop = setInterval(mute, 150)

function mute(){
    if(userNames[userNames.length - 1] == "everyone"){
        let msgs = document.getElementById("boxMessages").children
        for(let j of msgs){
            if(j.children[1] && (j.children[1].innerText != "(´。＿。｀)" || j.children[1].innerText != "(っ °Д °;)っ cc"))
            userNames.push(j.children[0].innerText)
        }
    }

    if(userNames[userNames.length - 1] == "noone"){
        userNames.length = 0
    }


    if(userNames.length > 0){
        let b = document.getElementsByTagName('b') // b_old
        for(let i in b){
            for(let name in userNames){
                if(b[i].innerText == userNames[name] + ": " || b[i].innerText == userNames[name] || b[i].innerText == userNames[name] + ":" ){
                    b[i].innerText = names.length > name ? names[name] + ": " : "mutedPlayer " + name + ": "        // user name
                    b[i].parentElement.children[1].innerText = "(´。＿。｀)"                                         // user text || user guess
                }
            }
        }
    }

    let s = document.getElementsByTagName('span')      // at 2021 || 2020 there are a bunch of p*rn addvertisement bots in skribbl 
    for(let i in s){
        let regex = new RegExp("Hi, I'm a girl, I'm*") // more readable, for me, than: /.*/
        if(regex.test(s[i].innerText)){
            s[i].innerText = "(っ °Д °;)っ cc"          // it's giving away cs, i promiseee
        }
    }
}

// * download canvas fn   https://stackoverflow.com/questions/11112321/how-to-save-canvas-as-png-image + fn args

function saveCanvas(imageName, canvasId){
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', imageName + '.png');
    let canvas = document.getElementById(canvasId);
    canvas.toBlob(function(blob) {
      let url = URL.createObjectURL(blob);
      downloadLink.setAttribute('href', url);
      downloadLink.click();
    });
}