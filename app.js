//default focus for menu when page loads
document.querySelector(".menu1").classList.add('active')





// start of Events For clicking Menu Buttons

// start functions for toggling opacity

function toggle_opacity_1(class_name){
    document.querySelector(class_name).style.cssText="opacity:1;z-index:100;"
};

function toggle_opacity_0(){
    document.querySelector(".aboutme").style.cssText="opacity:0;z-index:0;"
    document.querySelector(".myprojects").style.cssText="opacity:0;z-index:0;"
    document.querySelector(".mycertificates").style.cssText="opacity:0;z-index:0;"
    document.querySelector(".contactme").style.cssText="opacity:0;z-index:0;"
    // document.querySelector(".credits").style.cssText="opacity:0;"
};

// end of function for toggling opacity

// menu item focus function

function focus_item(cl){
    for(i=1;i<5;i++){
        if ((".menu"+ i) == cl ){
            document.querySelector(".menu"+ i).classList.add('active');
        }
        else{
            document.querySelector(".menu"+i).classList.remove('active');
        }
    }
}

document.querySelector(".menu1").addEventListener("click",()=>{
    toggle_opacity_0();
    toggle_opacity_1(".aboutme");
    focus_item('.menu1');
    
    

});

document.querySelector(".menu2").addEventListener("click",()=>{
    toggle_opacity_0();
    toggle_opacity_1(".myprojects");
    focus_item('.menu2');

});

document.querySelector(".menu3").addEventListener("click",()=>{
    toggle_opacity_0();
    toggle_opacity_1(".mycertificates");
    focus_item('.menu3');

});

document.querySelector(".menu4").addEventListener("click",()=>{
    toggle_opacity_0();
    toggle_opacity_1(".contactme");
    focus_item('.menu4');

});

// end of events for clicking menu buttons

//  timer 

var sec = 0;
var min = 0;
var hour = 0;

function mytimer(){
    sec+=1;
    document.querySelector(".s").innerHTML=sec;
    
    if (sec==60){
        min += 1;
        sec = 0;
    }
    if (min==60){
        hour+=1;
        min = 0;
    }
    if (hour==24){
        hour = 0
    }
    
    console.log(s)
    document.querySelector(".m").innerHTML=min;
    

}

myinterval = setInterval(()=>{
    sec+=1;
    document.querySelector(".s p").innerHTML=sec;

    if (sec==60){
        min+=1;
        document.querySelector(".m p").innerHTML=min;
        sec=0
    }

    if (min==60){
        hour+=1;
        document.querySelector(".h p").innerHTML=hour;
    }

    if (hour==24){
        hour=0;
    }

},1000);

// end of timer

// click event to display profile card

document.querySelector(".click-to-view").addEventListener("click",()=>{
    document.querySelector(".content").style.cssText="opacity:.1; pointer-events:none;";
    
    document.querySelector(".card-wrapper").style.cssText="opacity:1;z-index:101;";
    restore();
})

document.querySelector(".fa-xmark").addEventListener("click",()=>{
    document.querySelector(".content").style.cssText="opacity:1;pointer-events:all";
    
    document.querySelector(".card-wrapper").style.cssText="opacity:0;z-index:0";
})


// end of profile card event

// event to display mail id

function mail_view(){
    document.querySelector(".td-icons").style.cssText="flex-wrap:wrap;";
    document.querySelector(".pp-intro").style.cssText="width:141.5%;";
    document.querySelector(".intro").style.cssText="margin-right:10%;";
    document.querySelector(".mail-id").style.cssText="display:inline;";
    document.querySelector(".fa-xmark").style.cssText="right:-45%;";
}

function restore(){
    document.querySelector(".td-icons").style.cssText="flex-wrap:wrap;";
    document.querySelector(".pp-intro").style.cssText="width:100%;";
    document.querySelector(".mail-id").style.cssText="display:none;";
    document.querySelector(".fa-xmark").style.cssText="right:-1%;";
    document.querySelector(".intro").style.cssText="margin-right:0;";
}


document.querySelector(".fa-envelope").addEventListener("click",mail_view)

// scrolling aboutme section

const abt = document.querySelector(".aboutme")

abt.addEventListener("wheel",function(e) {
    if (e.deltaY>0){
        abt.scrollTop+=100;
        e.preventDefault();
    }
    else{
        abt.scrollTop-=100;
        e.preventDefault();
    }
})