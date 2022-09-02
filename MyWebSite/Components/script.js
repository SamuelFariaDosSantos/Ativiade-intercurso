let time = 4000,
    index = 0,
    images = document.querySelectorAll(".slides img"),
    maxlenght = images.length;

function NextImage(){

    images[index].classList.remove("Select");

    index++;

    console.log(index);

    if (index >= maxlenght){
        index = 0;
    }

    images[index].classList.add("Select");
}

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    if (scroll >= 400){
        this.document.querySelector(".return-up").style.marginRight = "10px";
    }

    else{
        this.document.querySelector(".return-up").style.marginRight = "-100px";
    }
});

function start(){
    setInterval(() => {
        NextImage();
    }, time)
}

window.addEventListener("load", start);