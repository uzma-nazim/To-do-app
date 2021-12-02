function additems() {
 



    var get = document.getElementById("myinput");
    if(get.value ===""){
        alert("invalid")
    }
    else{

        var ul = document.getElementById("Second-main");
        var li = document.createElement("li");
        var tex= document.createTextNode(get.value);
        var div = document.createElement("div");
        var btndiv = document.createElement("div");
        li.setAttribute("id","li2")
        ul.setAttribute("class","ul")
    
       
        li.appendChild(tex);
        ul.appendChild(div);
        div.appendChild(li)
        div.appendChild(btndiv)
       

        div.setAttribute("id","ulinput");    
        get.value = "";
    

        //delete buuton
    
    
        var del = document.createElement("button");
         del.innerHTML = '<i class="fas fa-times"></i>';
        del.setAttribute("onclick", "del(this)");
        del.setAttribute("class","delbtn");
        btndiv.appendChild(del);
    
        // edit button
    
    
        var edit = document.createElement("button");
        edit.innerHTML = '<i class="far fa-edit"></i>';
        edit.setAttribute("onclick", "edit(this)");
        edit.setAttribute("class" ,"editbtn");
        edit.setAttribute("id","disab")
        btndiv.appendChild(edit);
    
    
        //tick button
        var tick = document.createElement("button");
        tick.innerHTML = '<i class="fas fa-check"></i>';
        tick.setAttribute("onclick", "done(this)");
        tick.setAttribute("id","delete");
        btndiv.appendChild(tick);
        
     
        
    }
   

}
function done(t){
   
  var a = t.parentNode.parentNode.firstChild;
  a.setAttribute("class","done");
  var b = document.getElementById("disab");
  b.disabled = true;

}

function del(d) {

    d.parentNode.parentNode.remove()
 
}

function edit(e) {
    
    var a = e.parentNode.parentNode.firstChild.innerHTML;
    var take = prompt("Edit the text",a);
    e.parentNode.parentNode.firstChild.innerHTML = take;

}

function deleteAll(e){

    var get = document.getElementById("Second-main");

    get.innerHTML = "";


}
