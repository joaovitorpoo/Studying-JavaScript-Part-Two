fetch('https://api.openbrewerydb.org/breweries').then(
    Response => Response.json()
).then(
    data => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            criarLinha(data[index]);
        }
    }
)

function criarLinha(dados){
    let corpoTabela = document.querySelector("table");
    var linha = document.createElement("tr");

    var campo1 = document.createElement("td");
    var campo2 = document.createElement("td");
    var campo3 = document.createElement("td");
    var campo4 = document.createElement("td");
    var campo5 = document.createElement("td");
    var campo6 = document.createElement("td");
    var campo7 = document.createElement("td");
    var campo8 = document.createElement("td");
    var campo9 = document.createElement("td");
    var campo10 = document.createElement("td");
    var campo11 = document.createElement("td");
    var campo12 = document.createElement("td");
    var campo13 = document.createElement("td");

    var text1 = document.createTextNode(dados.id);
    var text2 = document.createTextNode(dados.name);
    var text3 = document.createTextNode(dados.brewery_type);
    var text4 = document.createTextNode(dados.street);
    var text5 = document.createTextNode(dados.city);
    var text6 = document.createTextNode(dados.state);
    var text7 = document.createTextNode(dados.postal_code);
    var text8 = document.createTextNode(dados.country);
    var text9 = document.createTextNode(dados.longitude);
    var text10 = document.createTextNode(dados.latitude);
    var text11 = document.createTextNode(dados.phone);
    var text12 = document.createTextNode(dados.website_url);
    var text13 = document.createTextNode(dados.updated_at);

    campo1.appendChild(text1);
    campo2.appendChild(text2);
    campo3.appendChild(text3);
    campo4.appendChild(text4);
    campo5.appendChild(text5);
    campo6.appendChild(text6);
    campo7.appendChild(text7);
    campo8.appendChild(text8);
    campo9.appendChild(text9);
    campo10.appendChild(text10);
    campo11.appendChild(text11);
    campo12.appendChild(text12);
    campo13.appendChild(text13);

    linha.appendChild(campo1);
    linha.appendChild(campo2);
    linha.appendChild(campo3);
    linha.appendChild(campo4);
    linha.appendChild(campo5);
    linha.appendChild(campo6);
    linha.appendChild(campo7);
    linha.appendChild(campo8);
    linha.appendChild(campo9);
    linha.appendChild(campo10);
    linha.appendChild(campo11);
    linha.appendChild(campo12);
    linha.appendChild(campo13);

    corpoTabela.appendChild(linha);

}
