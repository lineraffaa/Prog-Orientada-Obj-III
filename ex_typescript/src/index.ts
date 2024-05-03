import Cliente from "./Cliente"
import Endereco from "./Endereco"
import Produto from "./Produto"
import Telefone from "./Telefone"
import Venda from "./Venda"

var cliente = new Cliente(); 
var endereco = new Endereco();
var produto = new Produto();
var venda = new Venda();
var telefone = new Telefone();

cliente.nome = "A"
cliente.cpf = 123423
cliente.endereco = endereco
cliente.telefone[0] = telefone
cliente.sexo = "F"
cliente.data_nascimento = 14032007

endereco.rua = "Caldas"
endereco.cidade = "Guarapuava"
endereco.estado = "pr"
endereco.numero = 20

telefone.ddd = "42"
telefone.numero = 9902635
telefone.tipo = "Celular"

venda.codigo = 1252537
venda.data = 19082024
venda.produtos[0] = produto 

produto.codigo = 1252537
produto.descricao = "camisa"
produto.valor = 100 

console.log(cliente.nome,"\n", cliente.cpf, "\n", cliente.data_nascimento, "\n", cliente.sexo)
console.log(endereco.rua, "\n", endereco.cidade, "\n", endereco.estado, "\n", endereco.numero)
console.log(telefone.ddd, "\n", telefone.numero, "\n", telefone.tipo)
console.log(venda.codigo,"\n",venda.data)
console.log(produto.codigo,"\n", produto.descricao,"\n", produto.valor,"\n", venda.CalcularValor())






