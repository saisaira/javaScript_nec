fetch("json_data/data.json")
.then(res=> {
    return res.json()
})
.then(d=>{
    detail(d.details);
    other(d.multipleData);
})
var root=document.getElementById("root");

function detail(cse){
var n=document.createElement("h1");
n.setAttribute("class","card");
n.style.width="20%"
n.textContent=cse.Na;
root.appendChild(n);


var m=document.createElement("p");
m.setAttribute("class","text-info");
m.textContent=cse.mobile;
root.appendChild(m);

}

function other(r){
var m=document.createElement("ul");
root.appendChild(m);
for (var i = 0; i < r.length; i++) {
    var li=document.createElement("li");
    li.textContent=r[i].name; 
    li.setAttribute("class","bg-dark")
    li.style.color="#fff"
    m.appendChild(li); 
    var li1=document.createElement("li");
    li1.textContent=r[i].mobile; 
    m.appendChild(li1);  
}

}


