let nav =
    '    <ul>\n' +
    '        <li>\n' +
    '            <a href="index.html">Strona Główna</a>\n' +
    '        </li>\n' +
    '        <li><a href="kontakt.html">Kontakt</a></li>\n' +
    '    </ul>'

let navbarElem = document.querySelector(".navbar");

let foot =
    '        <div class="center">\n' +
    '            Copyrights &copy; Kamil Rękas | 2021\n' +
    '        </div>\n';
let footElem = document.querySelector(".footer");

navbarElem.innerHTML = nav;
footElem.innerHTML = foot;
