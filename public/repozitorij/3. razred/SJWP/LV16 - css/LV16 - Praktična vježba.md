# LV16 - Praktična vježba

---
#### [WEB stranica](https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV16%20-%20css/styles.html)
---

### styles.html
```html
<!DOCTYPE html>
<html lang="hr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LV16 - Praktična vježba | Citati</title>

    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div class="quotes">
        <p class="q1">
            <q>Believe you can and you're halfway there.</q> - Theodore Roosevelt
        </p>
        <p class="q2">
            <q>The only person you are destined to become is the person you decide to be</q> - Ralph Waldo Emerson
        </p>
        <p class="q3">
            <q>The question isn't who is going to let me; it's who is going to stop me.</q> - Ayn Rand
        </p>
        <p class="q4">
            <q>Winning is not a sometime thing; it's an all the time thing.</q> - Vince Lombardi
        </p>
        <p class="q5">
            <q>Believe in yourself and all that you are. Know that there is something inside you that is greater than
                any
                obstacle.</q> - Christian D. Larson
        </p>
    </div>
</body>

</html>
```

### index.css
```css
body {
    font-family: system-ui, -apple-system, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f6f6ff;
    height: 100vh;
    width: 100%;
    overflow: hidden;
}

.quotes {
    width: 100%;
    height: 100%;

    position: relative;
}

.quotes p {
    padding: 30px;
    margin: 0;
}


.q1 {
    position: absolute;
    top: 10%;
    left: 5%;
    max-width: 20%;
    font-style: normal;
    font-size: smaller;
    background: linear-gradient(45deg, #ff9a9e, #fad0c4);
    color: yellow;
    text-align: left;
    border: 1px solid red;
    padding: 20px;
    border-radius: 10px;
}

.q2 {
    position: absolute;
    top: 45%;
    left: 40%;
    max-width: 30%;
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
    font-size: small;
    background: #fff url('https://cdn.britannica.com/56/65056-050-9E0FABF2/Ralph-Waldo-Emerson-1860.jpg') no-repeat center;
    background-size: cover;
    color: black;
    text-align: left;
    border: 5px double green;
    border-radius: 1px;
    padding: 20px;
    opacity: 0.7;
}

.q3 {
    position: absolute;
    bottom: 15%;
    left: 10%;
    max-width: 25%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: medium;
    background: #333;
    color: white;
    text-align: center;
    border: 1px solid #444;
    border-radius: 25px;
    padding: 20px;
    opacity: 0.6;
}

.q4 {
    position: absolute;
    top: 5%;
    right: 10%;
    max-width: 30%;
    font-family: "Lucida Console", "Courier New", monospace;
    font-style: oblique;
    font-size: larger;
    background: radial-gradient(circle, #76b852, #8dc26f);
    color: purple;
    text-align: right;
    border: 3px dotted blue;
    border-radius: 5px;
    padding: 20px;
}

.q5 {
    position: absolute;
    bottom: 5%;
    right: 5%;
    max-width: 25%;
    font-family: Tahoma, Verdana, sans-serif;
    text-decoration: underline;
    font-size: large;
    background-color: #ffe599;
    color: blue;
    text-align: right;
    padding: 20px;
    opacity: 0.9;
}
```