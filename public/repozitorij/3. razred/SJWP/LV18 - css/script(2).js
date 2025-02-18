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
