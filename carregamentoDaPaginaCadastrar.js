//metodo de ediçao
//metodo que importa outro arquivo js

document.write(unescape("%3Cscript src='editar.js' type='text/javascript'%3E%3C/script%3E"));
document.write(unescape("%3Cscript src='ajax.js' type='text/javascript'%3E%3C/script%3E"));
document.write(unescape("%3Cscript src='cadastrar.js' type='text/javascript'%3E%3C/script%3E"));

$(document).ready(function () {
    var valor;
    var valorEscolhido;
    url = location.href;
    console.log(url);
    console.log("entrou aki");
    var parametroDaUrl = url.split("?")[1];

    // verifica se algum parametro foi passado pela url
    if (parametroDaUrl !== undefined) {

        console.log("dentro do if: " + parametroDaUrl);
        parametroDaUrl = parametroDaUrl.split("=")[1];
        console.log(parametroDaUrl);

        var id = parametroDaUrl;
        console.log("valor do id" + id)
        //faz a busca no banco de dados, buscando o objeto pelo id, o segundo parametro e uma funcao no caso estou chamando a funçao editar
        getPorId(id, editar);

    }
    else {
        $('#btnCadastrar').click(function () {
            var pessoa;
            
            var Pessoa = cadastrar(pessoa);
            console.log("Objeto a ser inserido no banco :" + Pessoa)
            Pessoa = JSON.parse(Pessoa);
            console.log("nome do cara"+Pessoa.nome);
            console.log(Pessoa);
            if (Pessoa.nome == "" || Pessoa.telefone == "" || Pessoa.Nascimento =="" || Pessoa.CPF == "" || Pessoa.email == "" || Pessoa.RG == "" || Pessoa.Cep == ""){
                alert("campos obrigatórios não preenchidos");
            }else{
                Pessoa = JSON.stringify(Pessoa);
            post(Pessoa);
            }
        });
    }
})