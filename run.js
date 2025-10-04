"use strict"

const starterData = [
        ["Книги : ", " "], ["Eloquent JavaScript : ", `<a href="https://eloquentjavascript.net/">Eloquent JavaScript</a>`],
        ["JavaScript: The Definitive Guide : ", "<a href=\"https://pepa.holla.cz/wp-content/uploads/2016/08/JavaScript-The-Definitive-Guide-6th-Edition.pdf\">JavaScript: The Definitive Guide</a>"], ["Learning JavaScript Design Patterns : ", "<a href=\"https://cdn.bookey.app/files/pdf/book/en/learning-javascript-design-patterns.pdf\">Learning JavaScript Design Patterns</a><br>"],
        ["Документация : ", ""], ["Официальный сайт веб-разработки : ", "<a href=\"https://developer.mozilla.org\">Официальный сайт Mozilla</a>"]
                ];

const glossaryData = [
                ["await : ", "Оператор await используется для ожидания окончания Promise. Может быть использован только <br>внутри async function или на верхнем уровне модуля.<br><br>"], ["break : ", "Оператор break прерывает выполнение текущего цикла, оператора множественного выбора switch или блочного выражения с меткой. <br>Выполнение кода продолжается с конструкции, следующей за прерванной.<br><br>"], ["switch : ", "Инструкция switch сравнивает выражение со случаями, перечисленными внутри неё, а затем выполняет соответствующие инструкции.<br><br>"], ["try..catch : ", "Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch.<br><br>"], ["class : ", "Class expression это способ определения класса в ECMAScript 2015 (ES6). Схожий с function expressions, class expressions <br>может быть именованным либо не иметь имени. Если он именованный, то его имя доступно только внутри класса.<br> JavaScript классы используют прототипно-ориентирование наследование.<br><br>"], ["const : ", "Значение констант не может быть изменено новым присваиванием, а также не может быть переопределено. <br>Константы (const) подчиняются области видимости уровня блока так же, как переменные, объявленные с использованием ключевого слова let.<br><br>"], ["continue : ", "Инструкция continue прерывает выполнение текущей итерации текущего или отмеченного цикла, и продолжает его выполнение на следующей итерации."]
                    ];


const usageData = [
        ["await ожидает разрешения Promise и возвращает полученное значение.<br><br>", "<img src=\"await.png\" style=\"width=500px;height:500px\">"]];


class helpModel
{
        #data;
        #delayTime;
        #output;
        constructor(iterableData)
        {
                this.#data = new Map(iterableData);
                this.#delayTime = 15000;
                this.#output = document.getElementById("output");
        }
        run(heading)
        {
                let content = heading;
                for (const [key, value] of this.#data.entries())
                        content += `<pre>${key} ${value}</pre>`;
                this.#output.innerHTML = content;
                setTimeout(() => {
                        this.#output.style.display = "none";
                }, this.#delayTime)
                this.#output.style.display = "";
        }
        representAsATable(heading)
        {
                let content = heading, i;
                content += '<table><tr>';
                i = 0;
                for (const item of this.#data)
                {
                        content += `<td>${item}</td>`;
                        i++;
                        if (i % 2 === 0)
                        {
                                content += '</tr><tr>';
                                continue;
                        }
                }
                content += '</table>';
                this.#output.innerHTML = content;
                setTimeout(() => {
                        this.#output.style.display = "none";
                }, this.#delayTime)
                this.#output.style.display = "";
        }
};

const starterButton = document.getElementById("starterButton");
const glossaryButton = document.getElementById("glossaryButton");
const usageButton = document.getElementById("usageButton");

const starter = new helpModel(starterData);

function runStarter()
{
        starterButton.addEventListener('click', starter.run('<h2>Список книг, туториалов и ссылки на официальную документацию: </h2><br>'));
}

const glossary = new helpModel(glossaryData);

function runGlossary()
{
        glossaryButton.addEventListener('click', glossary.run('<h2>Список ключевых слов используемых языком JavaScript: </h2><br>'));
}

const usage = new helpModel(usageData);


function runUsage()
{
        usageButton.addEventListener('click', usage.run('<h2>Примеры использования ключевых слов и конструкций языка JavaScript: </h2>'));
}

