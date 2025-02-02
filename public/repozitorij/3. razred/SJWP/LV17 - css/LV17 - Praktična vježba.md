# LV17 - Praktična vježba

---
#### [WEB stranica](https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV17%20-%20css/index.html)
---

### index.html
```html
<!DOCTYPE html>
<html lang="hr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dječja priča</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="container">
        <h1>Priča, pričica...</h1>
        <p class="story-text">
            Jutros je <i class="fas fa-sun"></i> obasjao malu drvenu
            <i class="fas fa-home house"></i> na rubu šume. U kućici je živio dječak po imenu Pero koji je krenuo u šumu
            tražiti
            <i class="fas fa-carrot"></i> za svog zeca. Usput je slušao cvrkut <i class="fas fa-dove"></i> i
            gledao kako se <i class="fas fa-tree"></i> njišu na vjetru. Iznenada je pronašao malog
            <i class="fas fa-cat"></i> koji se zaglavio u grmu. Pero ga je oslobodio
            i odveo kući gdje ga je nahranio <i class="fas fa-cookie"></i> i <i class="fas fa-milk"></i>. Od tada su
            postali nerazdvojni!
        </p>
    </div>
</body>

</html>
```

### styles.css
```css
body {
    font-family: 'Comic Sans MS', cursive;
    background-color: #f0f9ff;
    line-height: 1.6;
}

.container {
    max-width: 600px;
    padding: 10px 30px 30px 30px;
    border-radius: 15px;

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

h1 {
    text-align: center;
    color: #e91e63;
    font-size: clamp(1.3rem, 6vw, 2.5rem);
    margin-bottom: 35px;
}

.story-text {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    color: #333;
    text-align: justify;

    outline: 3px dashed #ff9800;
    outline-offset: 10px;
}
```