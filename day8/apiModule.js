export const myApi={
get:function(u,cb){
var x = new XMLHttpRequest()
  x.open( "GET",u,true);
   x.onload=function(){
    if(x.status==200){
        cb(null,x.responseText)
    }else{
    cb("Error: "+x.status)
    }
   }
   x.send()
},
post:(url, data, callback)=>{
    let xhr=new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type","application/json")
    xhr.onload=()=> {
       if(xhr.status === 201 || xhr.status == 200){
           callback(null,xhr.responseText)
       }else{
            callback("Error: "+xhr.status);
       }
    }
    xhr.send(JSON.stringify(data))
},
put:function(url,data, cb){
var xhr=new XMLHttpRequest()
xhr.open("PUT",url,true)
xhr.setRequestHeader('Content-type','application/json')
xhr.onload = function() {
if(xhr.status==200) cb(null,xhr.responseText)
else cb('Error: '+xhr.status)
};
xhr.send(JSON.stringify(data));
},
delete:function(u,c){
let req=new XMLHttpRequest()
req.open('DELETE',u,true)
req.onload=function(){
if(req.status===200){
c(null,req.responseText)
}else{
c('Error: '+req.status)
}
}
req.send()
}
}
