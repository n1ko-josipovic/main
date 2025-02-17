# LV19 - Praktična vježba

---
#### [WEB stranica](https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV19%20-%20css/index.html)
---

### index.html
```html
<!DOCTYPE html>
<html lang="hr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sigmar&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <title>LV19 - Praktična vježba</title>
</head>

<body>
    <div class="choice">
        <button id="btn1" onclick="tekst()" class="activated">TEKST</button>
        <button id="btn2" onclick="slike()">SLIKE</button>
    </div>
    <div class="container">
        <h1>ZABRANJEN PROLAZ</h1>
    </div>
    <div class="images">
        <figure>
            <img class="image" src="images/1.jpg" alt="1">
            <figcaption class="caption">Papige</figcaption>
        </figure>
        <figure>
            <img class="image" src="images/2.jpg" alt="2">
            <figcaption class="caption">Sova</figcaption>
        </figure>
        <figure>
            <img class="image" src="images/3.jpg" alt="3">
            <figcaption class="caption">Vrabac</figcaption>
        </figure>
        <figure>
            <img class="image" src="images/4.jpg" alt="4">
            <figcaption class="caption">Split</figcaption>
        </figure>
        <figure>
            <img class="image" src="images/5.png" alt="5">
            <figcaption class="caption">Zadar</figcaption>
        </figure>
        <figure>
            <img class="image" src="images/6.jpg" alt="6">
            <figcaption class="caption">Zagreb</figcaption>
        </figure>

    </div>

    <script src="script.js"></script>
</body>

</html>
```

### styles.css
```css
* {
    margin: 0;
    padding: 0;
    margin-bottom: 50px;
}

.choice {
    display: inline;
    margin-top: 50px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

button {
    width: 5rem;
    height: 2.5rem;
    border: navy;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: lightblue;
}

button.activated {
    background-color: navy;
    color: white;
}

h1 {
    font-family: "Sigmar", serif;
    text-align: center;
    font-size: 10vw;
    color: red;
    opacity: 0.5;
}

.images {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px;
    margin: 10px;
}

.images figure {
    margin: 0;
}

.images figure img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: opacity 0.5s, transform 0.5s, filter 0.5s;
}

.images figure img:hover {
    transform: scale(0.95);
    filter: grayscale(100%);
    opacity: 0.75;
}

.images figure figcaption {
    font-family: "Sigmar", serif;
    text-align: center;
    position: relative;
    bottom: 10em;
    font-size: clamp(2rem, 2vw, 10rem);
    color: red;
}

@media (max-width: 600px) {
    .images {
        grid-template-columns: 1fr;
    }
}
```

### script.js
```js
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
```