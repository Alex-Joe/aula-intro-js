//Para visualizar os exemplos você deve retirar as tags de comentário: //  e  /* */
/*Dever desativar as partes do código dos exemplos principalmente os que causarão 
conflitos com as tags citadas acima*/


 //      Como dentro do HTML  
 //  alert("meu primeiro aviso javaScript");        


		/* é possivel trabalhar com variáveis
       a variável "nome" recebe o valor "Luiz Gonzaga" ou
	   seja uma string definido pelas aspas */

 var frase = "Japão é o melhor time do mundo";
 var nome = "Luiz Gonzaga";
 var nome2 = "Pedro Paulo";
 var idade1 = 31;                  // observe que está sem aspas e é considerado um número "inteiro"
 var idade2 = 26;                  // apenas com exemplos para entender melhor   ||  e não  "string"
 var n1 = 5;
 var n2 = 7;
 var idade3 = "31";               // aqui é considerado "string" devido ás aspas.
 var idade4 = "26";               // observe o 3º e 4º exemplos.
 
 //exemplo com "alert"
 
// alert ("Bem Vindo " + nome)

/* nesse caso não se esqueça de dar um espaço
após o "Bem Vindo" antes de concatenar*/

//segundo exemplo

//alert (nome + " tem " + idade);

//novamente não se esqueça dos espaços observe: "tem" = " tem "
// senão ficará tudo grudado exemplo: nometem31
 
 //terceiro exemplo
 
 //alert (idade1 + idade2);      //aqui é realizado uma soma, considerando como número inteiro = 31+26=57
 
 //quarto exemplo
 
 //alert (idade3 + idade4);         //aqui um número é colocado ao lado do outro como uma "string" um texto = 31+26= 3126
 
 /*
 outra coisa interessante é que para visualisar no navegador
 sem ser com a "alert" é usar "console.log()" e observar na aba do cliente
 no Inspecionar Elemento do navegador na aba console ctrl+shift+I ou com o
 botão esquerdo do mouse "inspecionar elemento"
 */
 
 /* Exemplo
 
 console.log(idade1 + idade2);
 console.log("são as idades de " + nome + " e " + nome2 + " somadas ");
 console.log(n1 * n2);                           //É possivel fazer outras contas, nesse caso é uma multiplicação.
  ()
 
 
 console.log(frase.replace ("Japão","Brasil"));  //Comando " .replace" substitui um conteudo declarado em uma variável,
                                                //nesse caso Japão foi substituido por Brasil.
												 
console.log(frase.toUpperCase());             // coloca tudo maiúsculo, e toLowerCase tudo minúsculo.

 */
 
 /*
                                   //Exemlos Array e dicionário
								   
							   
	var lista= ["Pêra", "Uva", "Maçã"];
    var lista2= ["Violão", "Guitarra", "Teclado"];		
	console.log (lista);                             //Assim como em outras listas o Valor começa em Zero
	console.log (lista[2] + " " + lista[0]);        // Esse código retorna Maçã e Pêra.
	        
	lista.push ("Salada-Mista");                     // ".push" usado para adicionar elemento a lista, interessante
	console.log (lista);                            // que não afetou o código na linha 72 apesar de o console listar
	                                               // que há uma mudança abaixo.
										 
	lista.pop ();                                   // ".pop" remove o último elemento na lista.
    console.log (lista);                           // removeu Salada-Mista.
    lista.pop ();                                 // nessa linha remove também a maçã.
	console.log (lista);                         //interessante que não afeta a lista toda desde a linha 72
	                                            //as alterações vão ocorrendo na ordem da edição.
												
								//observação: (lista) retorna: 0:Pêra  , 02: Uva , 03: Maçã 				
							//Exemplos Transformando array em string
							
	console.log (lista2);
	lista2.push ("Contra-Baixo");
	console.log (lista2);
	 console.log (lista2.length);                 //mostra a quantidade de itens na lista.
	console.log  (lista2.reverse());               // mostra os itens de forma invertida de trás pra frente.
	
	console.log(lista2);
	console.log(lista2.toString());                          //observe que no console agora é mostrado como texto
    console.log (lista2.join(" - "));		     // "join" modifica a divisão, nesse exemplo as vírgulas foram subistituidas.
                                                // exemplo: violão - guitarra -  |antes era violão, guitarra,...	
  */
   
  
  /*
 
                                    //Exemplos Dicionário
									
	var fruta ={nome: "Maçã", cor: "Vermelha"};
	console.log (fruta);                           // retorna {nome: "maçã" , cor: "Vermelha"}
	
	console.log (fruta.nome);                      // sendo mais específico , retorna Maçã.
	
	                                //É possível adicionar mais dados
									
	var celulares = [{marca: "Sansung", modelo: "Galaxy-S8"}, 
	                 {marca: "Motorola", modelo: "Moto-Z3"}];
    console.log (celulares);					 
	console.log (celulares[1].modelo);
	console.log (celulares[0].modelo);     //mesmo processo anterior porém agora indicando a posição.
	                                       // mostra: Moto-Z3 e Galaxy-S8.
										   
							    //observação: (fruta) retorna | nome: Maçã , cor: Vermelha
                               // tem uma diferença da lista, mas é possível fazer uma lista de dicionários
                              //como no exemplo dos celulares. 							   
	*/
	
	                                  
									  //condicionais, laços de repetição e date
/*									  
 var idade = prompt ("Qual a sua idade? ");
 if (idade >= 18) {
	 console.log ("Maior de idade");
 }                                                //condicioanal, pergunta a idade e dar um alerta
 else {
	 alert ("Menor de idade");
 };
 */
 
                                   
								      //Laços de repetição
/*								
var count = 0;
while (count <=5){
	console.log (count);              // Conta 1, 2 ,3 ... 
//	count = count + 1                  // cout = count + 1 pode ser substituido por count++ que é a mesma coisa
    count++;
};
*/

/*
var count;                             //outra estrutura utilizando "for" ao invés de "while"
for(count=0; count<= 10; count++){
	console.log (count);  
};
*/

                                     //data | Alguns exemplos

var d = new Date();
console.log (d);
console.log (d.getMonth()+1);           // a contagem "mês" começa do zero então é necessario somar +1
console.log (d.getMinutes());           // minutos
console.log (d.getHours());
console.log (d.getDay());
