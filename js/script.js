const allFilterItems= document.querySelectorAll('.filter-items');
const allFilterBtns= document.querySelectorAll('.filter-btn');

allFilterBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        showFilterContent(btn);
    })
})
function showFilterContent(btn){
  allFilterItems.forEach((item)=>{
    btn.classList.add('active-btn')
    if(item.classList.contains(btn.id)){
        item.style.display="block"
    }
  })
}