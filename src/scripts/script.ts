const getMiki: HTMLImageElement | null = document.getElementById('Miki') as HTMLImageElement | null;
const getChris:HTMLImageElement|null=document.getElementById('Chris') as HTMLImageElement|null;
const getMomo = document.getElementById('Momo') as HTMLImageElement | null;


const changeMiki = () => {
    if (getMiki) {
        getMiki.src = "img/miki2.jpg";
    }
};

const changeChris = () => {
    if (getChris){
    getChris.src="img/Chris2.jpg"
}
}

const changeMomo = () => {
    if(getMomo){
    getMomo.src="img/momo2.jpg"
}
}



getMiki?.addEventListener("click", changeMiki);
getChris?.addEventListener("click", changeChris);
getMomo?.addEventListener("click", changeMomo);



