let post = document.querySelector(".post");
let name0 = document.querySelector(".name0");
let caption = document.querySelector(".caption");
let postbtn = document.querySelector(".postbtn");
let update=document.querySelector(".update")

let EditStor;




let arr = [];

postbtn.addEventListener("click", () => {
  if (!name0.value) {
    name0.value = "";
    name0.placeholder = "Please enter your name";
    name0.style.borderColor = "red";

  } else if (!caption.value) {
    caption.value = "";
    caption.placeholder = "Please write a caption";
    caption.style.borderColor = "red";

  } else {
    arr.push({
      name0: name0.value,
      caption: caption.value,
    });

    post.innerHTML=""

    show();


    name0.value = "";
    caption.value = "";
    name0.placeholder = "Enter Your Name";
    caption.placeholder = "Write Something";
    name0.style.borderColor = "";
    caption.style.borderColor = "";

    
    
  }
  
});


update.addEventListener("click",()=>{
  

  arr[EditStor].name0=name0.value
  arr[EditStor].caption=caption.value
  
  post.innerHTML=""

  show()


  update.style="display:none"
  postbtn.style="display:inline-block"

    name0.value = "";
    caption.value = "";
  
})




function show() {
  arr.map((item) => {
    post.innerHTML += `<div class="card" style="width: 18rem">
    <div class="card-body">
    <h5 class="card-title">${item.name0}</h5>
    <p class="card-text">${item.caption}</p>
    <button class="btn btn-primary edit">Edit</button>
    <button class="btn btn-danger delete">Delete</button>
    </div>
    </div>`;
  });

  let deleteBtn=document.querySelectorAll(".delete")
  let convertdeleteBtn=Array.from(deleteBtn)
  
  convertdeleteBtn.map((item,index)=>{
    item.addEventListener("click",()=>{
      arr.splice(index,1)
      post.innerHTML=""
      show()
      
    })


  })
  let edit=document.querySelectorAll(".edit")
  let editBtn=Array.from(edit)
  editBtn.map((item,index)=>{
    item.addEventListener("click",()=>{
      // console.log(arr[index].name0);

      name0.value=arr[index].name0
      caption.value=arr[index].caption

      EditStor=index

      update.style="display:inline-block"
      postbtn.style="display:none"

      
      
    })
  })

}

