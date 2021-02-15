//  // var h1=document.getElementById("root") 
// //  parent element
//  var container=document.querySelector("#root")
//  // child element
//  var card=document.createElement("div");
// card.setAttribute("id","card");
// container.appendChild(card)
// // sub child of parent
// var image=document.createElement("img");
// image.src="./images/man.svg"
// image.alt="Image"
// image.style.width="20%"
// card.appendChild(image)
// var name1=document.createElement("h2")
// name1.textContent="Rajesh"
// card.appendChild(name1)
// var mobile=document.createElement("h6")
// mobile.textContent="9789798543"
// card.appendChild(mobile)


function loadJSON(file,callback){
    var ajax=new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true);
    ajax.onreadystatechange=()=>{
        if(ajax.readyState ===4 && ajax.status===200){
            callback(ajax.responseText);
        }
    }
    ajax.send();
}

loadJSON("json_data/data.json",(text)=>{
    var d=JSON.parse(text);
    console.log(d);
    detail(d.details);
    other(d.multipleData);


});
var root=document.getElementById("root");

function detail(cse){
var n=document.createElement("h1");
n.setAttribute("class","name");
n.textContent=cse.Na;
root.appendChild(n);

var m=document.createElement("p");
m.setAttribute("class","name");
m.textContent=cse.mobile;
root.appendChild(m);

}

function other(r){
var ul=document.createElement("ul");
root.appendChild(ul);
for (let i = 0; i < r.length; i++) {
    var li=document.createElement("li");
    li.textContent=r[i].name; 
    ul.appendChild(li); 
    var li1=document.createElement("li");
    li1.textContent=r[i].mobile; 
    ul.appendChild(li1);  
}

}





