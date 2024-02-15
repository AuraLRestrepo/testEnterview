'use strict'
import { dataCharts, dataMinutes, dataTables } from './data.js';

const querySelectorTag = (selector) => {
    let tag = document.querySelector(selector);
    return tag;
}
const convertLocale = (num) => {
    let num1 = num.toLocaleString();
    return num1;
}

const concatLeyend = (date, variable) => {
    let dateConvert = date < '2024-02-16' && 'last month';
    let concat = `+ ${variable}% from ${dateConvert}`;
    return concat;
}

const titleRevenue = querySelectorTag('.card-titles.revenue');
const titleSubscript = querySelectorTag('.card-titles.subscriptors');
const titleMinutes = querySelectorTag('.card-titles.minutes');
const titleTable = querySelectorTag('.card-titles.tables')

const dataNumericRevenue = querySelectorTag('.card_num.revenue');
const dataNumericSubscript = querySelectorTag('.card_num.subscriptors');

const leyendRevenue = querySelectorTag('.card-leyend.revenue');
const leyendSubscript = querySelectorTag('.card-leyend.subscriptors');
const leyendMinutes = querySelectorTag('.card-leyend.minutes');
const leyendTable = querySelectorTag('.card-leyend.tables');

const datatable = querySelectorTag('.table_body');
const seletedRow = querySelectorTag('.selected_rows');
const lengthRow = querySelectorTag('.length_rows');

titleRevenue.innerHTML = dataCharts[0].title;
titleSubscript.innerHTML = dataCharts[1].title;
titleMinutes.innerHTML = dataMinutes.title;
titleTable.innerHTML = dataTables.title;

dataNumericRevenue.innerHTML = `$${convertLocale(dataCharts[0].value)}`;
dataNumericSubscript.innerHTML = `+${convertLocale(dataCharts[1].value)}`;

leyendRevenue.innerHTML = concatLeyend(dataCharts[0].date, dataCharts[0].variable);
leyendSubscript.innerHTML = concatLeyend(dataCharts[1].date, dataCharts[1].variable);
leyendMinutes.innerHTML = dataMinutes.leyend;
leyendTable.innerHTML = dataTables.subtitle;

const rows = dataTables.values.map(row =>     `
    <tr>
        <td><input type="checkbox" name="checkbox" id="" class="form-control"></td>
        <td>${row.status}</td>
        <td>${row.email}</td>
        <td> $${convertLocale(row.amount)}.00</td>
        <td>
            <span class="material-symbols-outlined">
                more_horiz
            </span>
        </td>
    </tr>
`
).join('');

datatable.innerHTML = rows;

// after imprint data tables
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let selectedCount = 0;
seletedRow.innerHTML = selectedCount;
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            selectedCount++;
        } else {
            selectedCount--;
        }
        seletedRow.innerHTML = selectedCount;
    });
});

lengthRow.innerHTML = checkboxes.length;








