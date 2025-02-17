function tekst()
{
    document.getElementById("btn1").classList.add("activated");
    document.getElementById("btn2").classList.remove("activated");

    const captions = document.querySelectorAll(".caption");
    const images = document.querySelectorAll(".image");


    captions.forEach(caption =>
    {
        caption.style.visibility = "visible";
    });

    images.forEach(image =>
    {
        image.style.visibility = "hidden";
    });
}

function slike()
{
    document.getElementById("btn2").classList.add("activated");
    document.getElementById("btn1").classList.remove("activated");

    const captions = document.querySelectorAll(".caption");
    const images = document.querySelectorAll(".image");

    captions.forEach(caption =>
    {
        caption.style.visibility = "hidden";
    });

    images.forEach(image =>
    {
        image.style.visibility = "visible";
    });
}

tekst();