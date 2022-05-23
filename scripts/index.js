//store the products array in localstorage as "products"
// document.querySelector("#products").addEventListener("submit",myfunc)

function storage1(t,d,p,i)
{
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function myfunc()
{
     event.preventDefault();
     let form=document.querySelector("#products")
     let type=form.type.value
     let desc=form.desc.value
     let price=form.price.value
     let image=form.image.value
     let item=new storage1(type,desc,price,image);
     let data=JSON.parse(localStorage.getItem("products")) || []
     data.push(item);
     localStorage.setItem("products",JSON.stringify(data));
     console.log(item)
     window.location.href="inventory.html"
}