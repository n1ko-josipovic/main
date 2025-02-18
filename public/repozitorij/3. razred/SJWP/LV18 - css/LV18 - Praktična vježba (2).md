# LV18 - Praktična vježba (2)

---
#### [WEB stranica](https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV18%20-%20css/index(2).html)
---

### index(2).html
```html
<!DOCTYPE html>
<html lang="hr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalender veljača 2025</title>
    <link rel="stylesheet" href="styles(2).css">
</head>

<body>
    <header>
        <h1>Veljača 2025</h1>
    </header>

    <table id="calendar">
        <thead>
            <tr>
                <th>Pon</th>
                <th>Uto</th>
                <th>Sri</th>
                <th>Čet</th>
                <th>Pet</th>
                <th>Sub</th>
                <th>Ned</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <script src="script(2).js"></script>
</body>

</html>
```

### styles(2).css
```css
body {
    background-color: #f4f7fc;
    font-family: Arial, sans-serif;
}

header {
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
}

table {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 50%;
    border-collapse: collapse;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

th,
td {
    padding: 12px;
    text-align: center;
    font-size: 15px;
}

th {
    background-color: #0056b3;
    color: white;
}

td {
    border-bottom: 1px solid #e0e0e0;
}

td:nth-child(even) {
    font-weight: bold;
}

tr {
    background-color: white;
    transition: all 0.5s ease;
}

tr:hover {
    background-color: #e3f2fd;
}

@media screen and (max-width: 768px) {
    table {
        width: 90%;
    }

    th,
    td {
        font-size: 13px;
        padding: 8px;
    }
}
```

### script(2).js
```js
document.addEventListener("DOMContentLoaded", function ()
{
    const calendarBody = document.querySelector('#calendar tbody');

    const month = 1;
    const year = 2025;

    const prviDan = new Date(year, month, 1);
    const zadnjiDan = new Date(year, month + 1, 0);

    const PrviDan = prviDan.getDay();
    const brojDana = zadnjiDan.getDate();

    let calendarHTML = '';
    let x = 1;

    for (let i = 0; i < 6; i++)
    {
        let row = '<tr>';

        for (let j = 0; j < 7; j++)
        {
            if (i === 0 && j < PrviDan)
            {
                row += '<td></td>';
            } else if (x > brojDana)
            {
                break;
            } else
            {
                row += `<td>${x}</td>`;
                x++;
            }
        }

        row += '</tr>';
        calendarHTML += row;

        if (x > brojDana) break;
    }

    calendarBody.innerHTML = calendarHTML;
});
```