"use strict"
const starterData = ["Книги", "Eloquent JavaScript", "JavaScript: The Definitive Guide", "Learning JavaScript Design Patterns",
			"Effective JavaScript", "Документация", "https://developer.mozilla.org", "https://262.ecma-international.or                         g/6.0/", "туториалы", "https://www.w3schools.com/js/", "https://javascript.info/"];

const glossaryData = ["await", "break", "case", "catch", "class", "const", "continue", "default", "delete", "do",
                	"else", "enum", "export", "extends", "false", "finally","for", "function", "if", "import", "in", "instanceof", "let", "new"];

const usageData = ["await\n async function f4() { try {\n const z = await Promise.reject(new Error(rejected!));\n} catch (e) {\nconsole.error(e); // Error: rejected!}\n}\n", "break\nfor (let i = 0; i < 10; i++) {  \nif (i === 3) { break; }\ntext += The number is  + i + <br>;}"];

class helpModel
{
	#dataSet;
	#delayTime;
	#output;
	constructor()
	{
		this.#dataSet = new Set();
		this.#delayTime = 6000;
		this.#output = document.getElementById("output");
	}
	dataSetInit(data)
	{
		for (const e of data)
			this.#dataSet.add(e);
	}
        run(heading)
        {
                let content = heading;
                for (const item of this.#dataSet)
                        content += `<p>${item}</p>`;
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
		for (const item of this.#dataSet)
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

let starterButton = document.getElementById("starterButton");
let glossaryButton = document.getElementById("glossaryButton");
let usageButton = document.getElementById("usageButton");


let starter = new helpModel();
starter.dataSetInit(starterData);

let glossary = new helpModel();
glossary.dataSetInit(glossaryData);

let usage = new helpModel();
usage.dataSetInit(usageData);

function runStarter()
{
	starterButton.addEventListener('click', starter.run('<h2>Список книг, туториалов и ссылки на официальную документацию: </h2><br>'));
}

function runGlossary()
{
	glossaryButton.addEventListener('click', glossary.representAsATable('<h2>Список ключевых слов используемых языком JavaScript: </h2><br>'));
}

function runUsage()
{
	usageButton.addEventListener('click', usage.run('<h2>Примеры использования ключевых слов и конструкций языка JavaScript: </h2>'));
}
