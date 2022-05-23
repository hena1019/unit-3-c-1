function homepage(){
    window.location.href="./index.html"
}

var data=JSON.parse(localStorage.getItem("products")) || []
var i=0
console.log(data.type)
data.forEach(function(element,index)
{

    var parent = document.createElement("div")
    var img = document.createElement("img")
    img.src= element.image
    img.style.width="90%"
    var type = document.createElement("h1")
    type.innerText = element.type
    var desc = document.createElement("p")
    desc.innerText = element.desc
    var price = document.createElement("p")
    price.innerText = element.price
    var btn = document.createElement("button")
    btn.innerText = "DELETE"
    btn.addEventListener("click", function (event) {
      event.target.parentNode.remove()
      deletefun(index)
    })
    parent.append(img,type, desc, price,btn)
    contain.append(parent)
  })

  function deletefun(index) 
  {
    data.splice(index,1);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
  }


