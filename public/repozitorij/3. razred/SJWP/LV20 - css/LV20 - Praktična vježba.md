# LV20 - Praktična vježba

---
#### [WEB stranica](https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV20%20-%20css/index.html)
---

### index.html
```html
<!DOCTYPE html>
<html lang="hr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prometni Znakovi</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <h1>Vrste prometnih znakova</h1>
        <div class="uvod">
            <p>Prometni znakovi čine vitalni dio cestovne infrastrukture, osmišljeni da osiguraju fluidan i siguran
                prometni tok. Njihova primarna namjena je trostruka: preventivno upozoravaju na potencijalne opasnosti,
                jasno definiraju dozvoljene i zabranjene radnje te pružaju orijentacijske podatke svim korisnicima
                prometnica. Bez njihovog prisustva, moderni prometni sustav bio bi neizvediv.</p>
        </div>
    </header>

    <nav id="izbornik">
        <a href="#upozorenja" class="nav-link">⚠️ Znakovi upozorenja</a>
        <a href="#zabrane" class="nav-link">🚫 Znakovi zabrane</a>
        <a href="#smjera" class="nav-link">↪️ Znakovi smjera kretanja</a>
    </nav>

    <section id="upozorenja">
        <h2><a href="#izbornik">Znakovi upozorenja</a></h2>
        <div class="upozorenje clearfix">
            <img src="slike/upozoravajuci.jpg" class="left">
            <p>Ova kategorija znakova ima preventivnu ulogu, upozoravajući vozače na moguće opasnosti i izazove na
                nadolazećem dionici ceste. Uobičajeni primjeri uključuju upozorenja na oštre zavoje, spuštene rubnjake,
                sklizak kolnik tijekom vlažnog vremena, te prisutnost djece u blizini školskih zona. Karakteristični po
                svom
                trokutastom obliku i žutoj podlozi, ovi znakovi zahtijevaju trenutnu pažnju i prilagodbu vozačkog
                ponašanja.
            </p>
            <p>Primjerice, znak "Opasni zavoj" uvijek se postavlja na odgovarajućoj udaljenosti prije samog zavojta,
                dajući vozačima dovoljno vremena za smanjenje brzine. Praksa pokazuje da pravodobna reakcija na ove
                znakove može spriječiti do 40% težih prometnih nesreća.</p>
        </div>
    </section>

    <section id="zabrane">
        <h2 style="clear:left"><a href="#izbornik">Znakovi zabrane</a></h2>
        <div class="zabrane clearfix">
            <img src="slike/zabrana.jpg" class="right">
            <p>Znakovi zabrane predstavljaju jasne pravne naredbe koje definiraju ograničenja u prometnom toku.
                Najprepoznatljiviji među njima su znakovi zabrane ulaza, zabrane parkiranja i ograničenja brzine. Svaki
                od ovih znakova ima specifičnu zonu djelovanja koja počinje od mjesta postavljanja znaka do sljedećeg
                raskrižja ili znaka koji poništava prethodnu zabranu.</p>
            <p>Primjerice, znak "Zabrana parkiranja" s vremenskim ograničenjem od 8-18h znači da se u tom periodu
                nikakvo vozilo ne smije ostaviti na tom području, dok izvan navedenog vremenskog okvira parkiranje
                postaje dopušteno. Kršenje ovih znakova može rezultirati ne samo novčanim kaznama već i odvozom vozila u
                deponij.</p>
        </div>
    </section>

    <section id="smjera">
        <h2 style="clear:right"><a href="#izbornik">Znakovi smjera kretanja</a></h2>
        <div class="smjera clearfix">
            <img src="slike/smjer.png" class="left">
            <p>Informativni znakovi služe kao putokaz za vozače, pružajući ključne podatke o smjeru vožnje,
                udaljenostima do važnih odredišta i karakteristikama prometnice. Autoceste su označene plavom pozadinom,
                dok se brze ciste prepoznaju po zelenoj podlozi. Ovi znakovi često sadrže brojeve cesta, šifre izlaza i
                kilometarske udaljenosti do gradova.</p>
            <p>Posebno su važni na kompleksnim čvorovima gdje se odvaja više smjerova istovremeno. Na primjer, znak na
                autocesti A1 koji pokazuje smjer prema Splitu i Dubrovniku uvijek se postavlja 2 km prije samog izlaza,
                dajući vozačima dovoljno vremena za sigurno promijeniti traku.</p>
        </div>
    </section>

    <p class="footer">&copy; Tekst je AI generiran</p>
</body>

</html>
```

### styles.css
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    max-width: 800px;
    margin: 0 auto;
}

p {
    font-size: clamp(0.7em, 2vw, 1em);
}

h1 {
    text-align: center;
    color: black;
    font-size: clamp(2.5em, 2vw, 3em);
    margin-top: 15px;
}

.uvod {
    margin: 20px 0;
    padding: 20px;
}

.uvod p {
    text-align: justify;
}

nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    text-align: center;
    padding: 10px;
}

nav a {
    font-size: clamp(0.7em, 2vw, 1em);
    font-weight: 700;
}

nav a:hover {
    color: orange;
}

nav ul {
    padding: 10px 0 0 10px;
}

h2 {
    text-align: center;
}

a {
    text-decoration: none;
}

section {
    padding: 20px;
}

section h2 {
    margin: 20px 0;
}

section img {
    max-width: 30%;
    display: block;
    height: auto;
    border: orange 5px dotted;
    border-radius: 10px;
    margin: 10px;
}

section p {
    padding: 10px;
    text-align: justify;
}

.left {
    float: left;
}

.right {
    float: right;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.footer {
    text-align: center;
    margin: 10px;
}
```