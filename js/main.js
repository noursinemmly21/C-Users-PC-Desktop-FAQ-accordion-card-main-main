
let questions=document.getElementsByClassName("questions");

[...questions].forEach((e)=>{
  e.addEventListener("click",(el)=>{
    let item=el.currentTarget
    /*or write
      let item=el.currentTarget.closest(".questions")
    */ 
    console.log(item)
    item.children[1].classList.toggle("text_hidden")
    item.children[0].children[0].classList.toggle("text_bold")
    item.children[0].children[1].classList.toggle("text_bold")
    item.children[0].children[1].classList.toggle("rotate")
  })
})
