const getMiki=document.getElementById('Miki')
const getChris=document.getElementById('Chris')
const getMomo=document.getElementById('Momo')

const changeMiki =() => {
    getMiki.src="img/miki2.jpg"}

const changeChris = () => {
    getChris.src="img/Chris2.jpg"
}
const changeMomo = () => {
    getMomo.src="img/momo2.jpg"
}

getMiki.addEventListener("click", changeMiki);
getChris.addEventListener("click", changeChris);
getMomo.addEventListener("click", changeMomo);

