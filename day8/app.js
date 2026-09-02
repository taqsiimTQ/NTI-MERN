import { myApi } from "./apiModule.js"

var url = "https://jsonplaceholder.typicode.com/posts"
let out = document.getElementById("output")

function makeCardStuff(t, err, res) {
  if(err) {
      out.innerHTML="<h3 style='color:red'>"+t+" Failed</h3><p>"+err+"</p>"
      return
  }

  var parsed = JSON.parse(res)
  var h = "<h3>"+t+" Successful</h3><div class='cards-container'>"
  
  var arr = []
  if(Array.isArray(parsed)){
    arr = parsed
  } else {
    arr.push(parsed)
  }

  if(Object.keys(parsed).length == 0){
    h += "<div class='card' style='border-left:5px solid red'><h4>Deleted</h4><p>no content</p></div>"
  } else {
      for(var i=0; i<arr.length; i++) {
          let item = arr[i]
          h += "<div class='card'><h4>" + (item.title ? item.title : "no title") + "</h4><p>" + (item.body?item.body:"no body") + "</p><div class='card-footer'><span>ID: " + item.id + "</span><span>User: " + item.userId + "</span></div></div>"
      }
  }
  h = h + "</div>"
  out.innerHTML = h
}

document.getElementById("btn-get").addEventListener("click", function(){
    out.innerHTML="<p>wait...</p>"
    myApi.get(url+"?_limit=6", function(e, r){
        console.log("got data", r)
        makeCardStuff("GET", e, r)
    })
})

document.getElementById("btn-post").addEventListener("click",()=>{
  out.innerHTML="<p>wait...</p>"
  var d = { title: "test", body: "test body", userId: 123 }
  myApi.post(url, d, function(e, r){
    makeCardStuff("POST", e, r)
  })
})

document.getElementById('btn-put').addEventListener('click',function(){
   out.innerHTML="<p>wait...</p>"
   let ud = { id:1, title:"update", body:"updated", userId: 1 }
   myApi.put(url+"/1", ud, (e,r)=>{
     makeCardStuff("PUT", e, r)
   })
})

document.getElementById("btn-delete").addEventListener("click", function() {
    out.innerHTML="<p>wait...</p>"
    myApi.delete(url+"/1", function(e,r){
        makeCardStuff("DELETE", e, r || "{}")
    })
})
