# Obrasci - B

---
#### [WEB stranica](https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV08%20-%20html/obrasci%20-%20B.html)
---

### obrasci - B.html
```html
<!DOCTYPE html>
<html lang="hr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obrazac za ime i prezime</title>
    <script>
        function handleSubmit(event)
        {
            event.preventDefault();
            const ime = document.getElementById('ime').value;
            const prezime = document.getElementById('prezime').value;
            alert('Ime: ' + ime + '\nPrezime: ' + prezime);
        }
    </script>
</head>

<body>

    <form onsubmit="handleSubmit(event)">
        <label for="ime">Ime:</label>
        <input type="text" id="ime" name="ime" required>
        <br><br>

        <label for="prezime">Prezime:</label>
        <input type="text" id="prezime" name="prezime" required>
        <br><br>

        <input type="submit" value="Pošaljite">
    </form>

</body>

</html>
```