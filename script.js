// DOM - Document object model
// querySelector - Определенный селектор аркылуу аркылу чыгарып берет 
// innerHTML - Добовляет контент через JS
// innerText - 

const Rectangle = () => {
    let div = document.getElementById(`Rectangle`)
      div.style.borderRadius=`15px`
      div.style.width=`600px`
      div.style.height=`250px`
      div.style.backgroundColor=`green`
      


}
const Circle = () => {
    let div = document.getElementById(`Circle`)
  div.style.borderRadius=`50%`
      div.style.width=`250px`
      div.style.height=`250px`
      div.style.backgroundColor=`blue`
}
const Square = () => {
    let div = document.getElementById(`Square`)
  div.style.borderRadius=`10px`
      div.style.width=`280px`
      div.style.height=`280px`
      div.style.backgroundColor=`red`
}
