const data = [

obj1 = {
    userName : "Ali Alaeddine",
    userPicture :"/assets/rnb.jpeg", 
    heading: "An Extended Break From the Rat Race Has Changed My Life",
    description:"10 lessons learned that I never want to lose",
    date: "Dec3",
    time: "4 min read",
    about: "react",
    state: "popular on Medium"
},
obj2 = {
    userName : "Ali Alaeddine",
    userPicture: "/assets/rnb.jpeg", 
    heading: "An Extended Break From the Rat Race Has Changed My Life",
    description:"10 lessons learned that I never want to lose",
    date: "Dec3",
    time: "4 min read",
    about: "react",
    state: "popular on Medium"
},
obj3 = {
    userName : "Ali Alaeddine",
    userPicture: "/assets/rnb.jpeg",
    heading: "An Extended Break From the Rat Race Has Changed My Life",
    description:"10 lessons learned that I never want to lose",
    date: "Dec3",
    time: "4 min read",
    about: "react",
    state: "popular on Medium"
},
obj4 = {
    userName : "Ali Alaeddine",
    userPicture: "/assets/rnb.jpeg",
    heading: "An Extended Break From the Rat Race Has Changed My Life",
    description:"10 lessons learned that I never want to lose",
    date: "Dec3",
    time: "4 min read",
    about: "react",
    state: "popular on Medium"
},
obj5 = {
    userName : "Ali Alaeddine",
    userPicture: "/assets/rnb.jpeg",
    heading: "An Extended Break From the Rat Race Has Changed My Life",
    description:"10 lessons learned that I never want to lose",
    date: "Dec3",
    time: "4 min read",
    about: "react",
    state: "popular on Medium"
},
obj6 = {
    userName : "Ali Alaeddine",
    userPicture: "/assets/rnb.jpeg",
    heading: "An Extended Break From the Rat Race Has Changed My Life",
    description:"10 lessons learned that I never want to lose",
    date: "Dec3",
    time: "4 min read",
    about: "react",
    state: "popular on Medium"
},
]


// const look = function(data){
//     for( let i = 0; i<data.length; i++){
        
//     }
// }

const page = function(){
    let container = document.getElementsByClassName("row border-top")
    for( let i = 0; i<data.length; i++){    
    const inhalt = `
    <div id="left-page " class="col-8 mt-5 border-right">
                <div class="row topic no-gutters">
                    <div class="col-8">
                        <div id="user">
                            <img src="/assets/rnb.jpeg" alt="" class="userpic">
                            <span class="d-inline">${data[i].userName}</span>
                        </div>
                        <div id="heading">
                            ${data[i].Heading}
                        </div>
                        <div id="description">
                            <span class="description">
                                ${data[i].description}
                            </span>
                            <div id="info" class="row ">
                                <div id="date" class="col-9 pl-0 mr-auto">
                                    <div class="d-inline">${data[i].date}</div>
                                    <div class="d-inline ">
                                        <span>.</span>
                                    </div>
                                    <div class="d-inline">${data[i].time}</div>
                                    <div class="d-inline ">
                                        <span>.</span>
                                    </div>
                                    <div class="d-inline">${data[i].about}</div>
                                    <div class="d-inline ">
                                        <span>.</span>
                                    </div>
                                    <div class="d-inline">${data[i].state}</div>
                                   </div> 
                                    <div class="col-2">
                                        <i><img src="/assets/icons8-bookmark-64.png" class="info-icon mr-2"></i>
                                        <i><img src="/assets/ellipsis-icon-9.jpg" class="info-icon ml-1"></i>
                                    </div>
                            </div>
                        </div>


                    </div>
                    <div  class="col-4 align-middle pl-2">
                        <img src="/assets/1_eGhp-DL21v3bYIrnTburew.jpeg" class="image-topic">
                    </div>

                </div>

            </div>
    `
    container[0].innerHTML +=inhalt
    }
}

window.onload = function(){
    page()
}
