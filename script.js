console.log("a Vallu Madhu production")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let startBtn1 = document.getElementById("start1")
let setBtn = document.getElementById("setting")
let in_sec = document.getElementById("seconds")
let in_min = document.getElementById("minutes")
let inmin = 25
let insec = 0
function gettime(){
    inmin = localStorage.getItem("inmin")
    insec = localStorage.getItem("insec")
}
gettime()
inmin = parseInt(inmin)
let seconds = 25*60
seconds = parseInt(inmin*60) + parseInt(insec)
in_sec.value = seconds % 60
in_min.value = Math.floor(seconds/60)
let m = Math.floor(seconds/60)
let s = seconds % 60
if(s<10){
    s = "0" + s
}
if(m<10){
    m = "0" + m
}
min.innerHTML = m
sec.innerHTML = s
let rainBgm = new Audio("rain bgm.mp3")
let settingBox = document.getElementById("settingBox")
let toggleBtn1 = document.getElementById("togglebtn")
let toggleBtn2 = document.getElementById("togglebtn2")
let toggleBtn3 = document.getElementById("togglebtn3")
let checkbox11 = document.getElementById("checkbox")
let checkbox12 = document.getElementById("checkbox2")
let checkbox13 = document.getElementById("checkbox3")
let spotifyBox = document.getElementById("spotifyBox")
let timerClock = new Audio("alarm clock short.mp3")
let btnClick = new Audio("click-button.mp3")
let thBtn1 = document.getElementById("thBtn1")
let thBtn2 = document.getElementById("thBtn2")
let thBtn3 = document.getElementById("thBtn3")
let thBtn4 = document.getElementById("thBtn4")
let thBtn5 = document.getElementById("thBtn5")
let container = document.getElementById("container")
let body = document.querySelector("body")
let tagMain = document.querySelector("main")
let savebtn = document.getElementById("savebtn")
let advsetting = document.getElementById("advsetting")
let a = 1
let seticon = document.getElementById("seticon")
function get(){
    a = localStorage.getItem("theme")
}
get()
let b = 1
let c = 1
let d = 0
function getmusic(){
    b = localStorage.getItem("music_Off")
    c = localStorage.getItem("Spotify")
    d = localStorage.getItem("hideset")
    
}
getmusic()
checkbox11.checked = true
checkbox11.checked = false
checkbox11.checked = true
checkbox12.checked = true
checkbox12.checked = false
checkbox12.checked = true
checkbox12.checked = false
checkbox13.checked = true
checkbox13.checked = false
checkbox13.checked = true
checkbox13.checked = false
let advbtn = document.getElementById("advbtn")
let preload = document.getElementById("preloader")

if(min.innerHTML=="NaN"){
    insec = 0
    inmin = 25
    seconds = parseInt(inmin*60) + parseInt(insec)
    m = Math.floor(seconds/60)
     s = seconds % 60
     if(s<10){
        s = "0" + s
    }
    if(m<10){
        m = "0" + m
    }
    min.innerHTML = m
    sec.innerHTML = s
    in_sec.value = seconds % 60
    in_min.value = Math.floor(seconds/60)
}
////preload
window.addEventListener("load",function(){
    preload.style.display = "none"
    tagMain.style.display = "flex"
    tagMain.style.flexDirection = "column"
})


/// functions
function starttimer(){
    timerLoop = setInterval(function(){
        runSec()
       },1000)
}

function runSec(){
     seconds--
     m = Math.floor(seconds/60)
     s = seconds % 60
     if(s<10){
        s = "0" + s
    }
    if(m<10){
        m = "0" + m
    }
    min.innerHTML = m
    sec.innerHTML = s
}
function checkbtntheme(){
    if(checkbox11.checked == true){
        toggleBtn1.style.backgroundColor = container.style.backgroundColor
    }
    if(checkbox12.checked == true){
        toggleBtn2.style.backgroundColor = container.style.backgroundColor
    }
    if(checkbox13.checked == true){
        toggleBtn3.style.backgroundColor = container.style.backgroundColor
    }
    advbtn.style.backgroundColor = container.style.backgroundColor
    savebtn.style.backgroundColor = container.style.backgroundColor
}



////Timer
startBtn1.addEventListener("click",function(){
    btnClick.play()
    if(startBtn1.innerHTML == "START"){
        starttimer()
        startBtn1.innerHTML = "PAUSE"
        if(checkbox11.checked==true){
            rainBgm.play()
            rainBgm.loop = true
        }
    }
    else if(startBtn1.innerHTML == "PAUSE"){
        clearInterval(timerLoop)
        startBtn1.innerHTML = "START"
        rainBgm.pause()
        timerClock.pause()
    }
})
startBtn1.addEventListener("dblclick",function(){
    rainBgm.pause()
    startBtn1.innerHTML = "START"
    seconds = parseInt(inmin*60) + parseInt(insec)
    clearInterval(timerLoop)
    m = Math.floor(seconds/60)
    s = seconds % 60
    if(s<10){
       s = "0" + s
   }
   if(m<10){
       m = "0" + m
   }
   min.innerHTML = m
   sec.innerHTML = s
    rainBgm.pause()
    timerClock.pause()
})






///settings
setBtn.addEventListener("click",function(){
    if(setBtn.classList=="s"){
        setBtn.style.rotate = "90deg"
        setBtn.style.transition = "300ms"
        setBtn.classList.remove("s")
        settingBox.classList.toggle("setting")
        settingBox.classList.toggle("setting1")
        
    }
        else{
            setBtn.style.rotate = "0deg"
            setBtn.style.transition = "300ms"
            setBtn.classList.add("s")
            settingBox.classList.toggle("setting")
            settingBox.classList.toggle("setting1")
        }
})




//////////backgrounds
if(a==1){
    body.style.backgroundColor = "#397097"
    container.style.backgroundColor = "#4D7FA2"
    a = 1
    checkbtntheme()
}
else if(a==2){
    body.style.backgroundColor = "#293241"
    container.style.backgroundColor = "#434e61"
    a = 2
    checkbtntheme()
}
else if(a==3){
    body.style.backgroundColor = "#edb70e"
    container.style.backgroundColor = "#f2c43c"
    a = 3
    checkbtntheme()
}
else if(a==4){
    body.style.backgroundColor = "#fa5650"
    container.style.backgroundColor = "#f77772"
    a = 4
    checkbtntheme()
}
else if(a==5){
    body.style.backgroundColor = "#87D579"
    container.style.backgroundColor = "#a9e892"
    a = 5
    checkbtntheme()
}




thBtn1.addEventListener("click",function(){
    body.style.backgroundColor = "#397097"
    container.style.backgroundColor = "#4D7FA2"
    a = 1
    savedata()
    checkbtntheme()
})
thBtn2.addEventListener("click",function(){
    body.style.backgroundColor = "#293241"
    container.style.backgroundColor = "#434e61"
    a = 2
    savedata()
    checkbtntheme()
})
thBtn3.addEventListener("click",function(){
    body.style.backgroundColor = "#edb70e"
    container.style.backgroundColor = "#f2c43c"
    a = 3
    savedata()
    checkbtntheme()
})
thBtn4.addEventListener("click",function(){
    body.style.backgroundColor = "#fa5650"
    container.style.backgroundColor = "#f77772"
    a = 4
    savedata()
    checkbtntheme()
})
thBtn5.addEventListener("click",function(){
    body.style.backgroundColor = "#87D579"
    container.style.backgroundColor = "#a9e892"
    a = 5
    savedata()
    checkbtntheme()
})
in_sec.value = parseInt(insec)
in_min.value = parseInt(inmin)





//// Timer-Over
setInterval(function(){
    if(seconds==0){
        rainBgm.pause()
        m=0
        s=0
        min.innerHTML = "0"+m
        sec.innerHTML = "0"+s
        timerClock.play()
        clearInterval(timerLoop)
    }
},1)





//// Music
if( b==0 ){
    checkbox11.checked = false
        toggleBtn1.style.backgroundColor = "rgb(170, 170, 170)"
        if(startBtn1.innerHTML == "PAUSE"){
            rainBgm.pause()
        }
}
else if( b==1 ){
    checkbox11.checked = true
        toggleBtn1.style.backgroundColor = container.style.backgroundColor
        if(startBtn1.innerHTML == "PAUSE"){
            rainBgm.play()
        }
}
if( c==0 ){
    checkbox12.checked = false
        toggleBtn2.style.backgroundColor = "rgb(170, 170, 170)"
        spotifyBox.style.display = "none"
}
else if( c==1 ){
    checkbox12.checked = true
        toggleBtn2.style.backgroundColor = container.style.backgroundColor
        spotifyBox.style.display = "flex"
}

toggleBtn1.addEventListener("click",function(){
    if(checkbox11.checked == false){
        checkbox11.checked = true
        checkbox12.checked = false
        spotifyBox.style.display = "none"
        toggleBtn2.style.backgroundColor = "rgb(170, 170, 170)"
        c = 0
        b = 1
        savedata01()
        toggleBtn1.style.backgroundColor = container.style.backgroundColor
        if(startBtn1.innerHTML == "PAUSE"){
            rainBgm.play()
        }
    
    }
    else{
        checkbox11.checked = false
        toggleBtn1.style.backgroundColor = "rgb(170, 170, 170)"
        b = 0
        savedata01()
        if(startBtn1.innerHTML == "PAUSE"){
            rainBgm.pause()
        }
    }
})
toggleBtn2.addEventListener("click",function(){
    if(checkbox12.checked == false){
        checkbox12.checked = true
        c = 1
        b = 0
        checkbox11.checked = false
        rainBgm.pause()
        savedata01()
        toggleBtn1.style.backgroundColor = "rgb(170, 170, 170)"
        toggleBtn2.style.backgroundColor = container.style.backgroundColor
        spotifyBox.style.display = "flex"
    
    }
    else{
        checkbox12.checked = false
        toggleBtn2.style.backgroundColor = "rgb(170, 170, 170)"
        c = 0
        savedata01()
        spotifyBox.style.display = "none"
    }
})


//// hide setting icon
if(d==0){
    checkbox13.checked = false
    toggleBtn3.style.backgroundColor = "rgb(170, 170, 170)"
    seticon.classList.remove("seticon1")
    seticon.classList.add("seticon")
}
if(d==1){
    checkbox13.checked = true
    toggleBtn3.style.backgroundColor = container.style.backgroundColor 
    seticon.classList.remove("seticon")
    seticon.classList.add("seticon1")
    d = 1
}
toggleBtn3.addEventListener("click",function(){
    if(checkbox13.checked == false){
        checkbox13.checked = true
        toggleBtn3.style.backgroundColor = container.style.backgroundColor 
        seticon.classList.remove("seticon")
        seticon.classList.add("seticon1")
        d = 1
        savedata01()
    }
    else{
        checkbox13.checked = false
        toggleBtn3.style.backgroundColor = "rgb(170, 170, 170)"
        seticon.classList.remove("seticon1")
        seticon.classList.add("seticon")
        d = 0
        savedata01()
    }
})


///advbtn on click
advbtn.addEventListener("click",function(){
    advsetting.classList.toggle("advsetting1")
    advsetting.classList.toggle("advsetting")
    setBtn.style.rotate = "0deg"
    setBtn.style.transition = "300ms"
    setBtn.classList.add("s")
    settingBox.classList.toggle("setting")
    settingBox.classList.toggle("setting1")
})
savebtn.addEventListener("click",function(){
    advsetting.classList.toggle("advsetting1")
    advsetting.classList.toggle("advsetting")
    if(startBtn1.innerHTML == "PAUSE"){
        clearInterval(timerLoop)
        startBtn1.innerHTML = "START"
        rainBgm.pause()
    }
    m = in_min.value
    s = in_sec.value
    inmin = parseInt(in_min.value)
    insec = parseInt(in_sec.value)
    savedata01()
    let x = (parseInt(in_min.value)*60)+ parseInt(in_sec.value)
    seconds = x
    if(s<10){
        s = "0" + s
    }
    if(m<10){
        m = "0" + m
    }
    min.innerHTML = m
    sec.innerHTML = s
})

////Local storage
function savedata(){
    localStorage.setItem("theme",a)
}
function savedata01(){
    localStorage.setItem("music_Off",b)
    localStorage.setItem("Spotify",c)
    localStorage.setItem("hideset",d)
    localStorage.setItem("inmin",inmin)
    localStorage.setItem("insec",insec)
}