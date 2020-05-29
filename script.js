let receita = {
    titulo: "Macarronada",
    porcoes: 2,
    ingredientes: ["Macarrao","Bacon","Molho de tomate", "cebolinha"]
}

console.log(receita.titulo);
console.log(receita.porcoes);
console.log("Ingredientes:");
for (let index = 0; index < receita.ingredientes.length; index++) {
    console.log(receita.ingredientes[index]);
}

livros = [{titulo: "O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios", autor: "Charles Duhigg", livroLido: true},
{titulo: "PROCRASTINAÇÃO: Guia científico sobre como parar de procrastinar", autor: "Lilian Soares", livroLido: false},
{titulo: "Mais Esperto que o Diabo: O mistério revelado da liberdade e do sucesso", autor: "Napoleon Hill", livroLido: true},
{titulo: "Pai Rico, Pai Pobre", autor: "Robert T. Kiyosaki", livroLido: true}];

for (let index = 0; index < livros.length; index++) {
    console.log("Livro: "+livros[index].titulo+" Autor: "+livros[index].autor);
}

for (let index = 0; index < livros.length; index++) {
    if (livros[index].livroLido) {
        console.log("Você já leu este livro "+livros[index].titulo+" - Autor "+livros[index].autor);
    } else {
        console.log("Você não leu este livro "+livros[index].titulo+" - Autor "+livros[index].autor);
    }
}