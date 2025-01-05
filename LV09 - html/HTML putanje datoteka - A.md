# HTML putanje datoteka - A

---
#### [WEB stranica](https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV09%20-%20html/HTML%20putanje%20datoteka%20-%20A.html)
---

### HTML putanje datoteka - A.html
```html
<!DOCTYPE html>
<html lang="hr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Popis stvari koje bih stavio na popis Svetom Nikoli">
    <meta name="author" content="Niko Josipović">
    <title>Popis stvari za Svetog Nikolu</title>
    <link rel="stylesheet" href="HTML putanje datoteka - A.css">
</head>

<body>
    <header>
        <h1>Popis stvari za Svetog Nikolu</h1>
    </header>

    <section>
        <div class="item">
            <h3>Knjiga iz kombinatorike</h3>
            <img src="images/Niko Josipović/knjiga1.png" alt="Knjiga iz kombinatorike" class="item-image">
            <a href="https://knjiga.hr/kombinatorika-klasicna-i-moderna-dragos-cvetkovic-1/" target="_blank">Nabavi
                ovdje!</a>
        </div>

        <div class="item">
            <h3>Knjiga iz linearne algebre</h3>
            <img src="images/Niko Josipović/knjiga2.jpg" alt="Knjiga iz linearne algebre" class="item-image">
            <a href="https://www.njuskalo.hr/matematika-literatura/linearna-algebra-oglas-45174984"
                target="_blank">Nabavi ovdje!</a>
        </div>

        <div class="item">
            <h3>Knjiga iz kompleksne analize</h3>
            <img src="images/Niko Josipović/knjiga3.jpg" alt="Knjiga iz kompleksne analize" class="item-image">
            <a href="https://element.hr/proizvod/kompleksna-analiza/" target="_blank">Nabavi ovdje!</a>
        </div>
    </section>
</body>

</html>
```

### HTML putanje datoteka - A.css
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

header {
    color: black;
    text-align: center;
    padding: 15px;
}

section {
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
}

h2 {
    color: black;
}

.item {
    flex-direction: row;
    padding: 15px;
    margin: 10px 0;
    text-align: center;
}

.item-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    display: block;

    border-radius: 8px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
}

a {
    color: #0077cc;
    font-weight: bold;
    text-decoration: none;
    padding: 5px;
}

a:hover {
    color: #0268b1;
}
```