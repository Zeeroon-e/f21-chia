const btn = document.getElementById("btn-1");
const dialogrutan = document.getElementsByClassName("dialogruta");


btn.addEventListener("click", function () {
    console.log("clicked");
    hideBox();
    
});

const hideBox = () => {
    dialogrutan[0].style.display = 'none'
}
