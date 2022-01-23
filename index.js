//Jornada do Herói - O Senhor dos Anéis
/*O Anel de Sauron deve ser destruído pelos corajosos hobbits Frodo e Sam, pois a existência do anel pode causar a ruína de toda a terra média, devido ao seu grande poder. A missão de Frodo e Sam, dois pequenos hobbits do Condado, é destruír o anel na montanha de perdição. Para isso eles contam com a ajuda de uma pequena sociedade, chamada de Sociedade do Anel.
*/

/*1- Todos os membros participaram da missão?
2- Os membros da sociedade resistiram a tentação de usar o anel?
3- Todos os membros da sociedade sobreviveram a missão?
4- Os inimigos foram todos derrotados?
5- O anel foi destruído na montanha da perdição?
*/ 
/**
0 respostas Sim: Você falha miseravelmente.
1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações. */

const prompt = require("prompt-sync")();

let resp1 = prompt("1- Todos os membros participaram da missão?: ");
    if(resp1.toLowerCase() == 'sim'){
        resp1 = '1';
    }else if(resp1.toLowerCase() == 'nao'){
        resp1 = '0';
    }else{
        console.log("Resposta inválida! Reinicie o programa!")
    }

let resp2 = prompt("2- Os membros da sociedade resistiram a tentação de usar o anel?: ");
    if(resp2.toLowerCase() == 'sim'){
        resp2 = '1';
    }else if(resp2.toLowerCase() == 'nao'){
        resp2 = '0';
    }else{
        console.log("Resposta inválida! Reinicie o programa!")
    }

let resp3 = prompt("3- Todos os membros da sociedade sobreviveram a missão?: ");
    if(resp3.toLowerCase() == 'sim'){
        resp3 = '1';
    }else if(resp3.toLowerCase() == 'nao'){
        resp3 = '0';
    }else{
        console.log("Resposta inválida! Reinicie o programa!")
    }

let resp4 = prompt("4- Os inimigos foram todos derrotados?: ");
    if(resp4.toLowerCase() == 'sim'){
        resp4 = '1';
    }else if(resp4.toLowerCase() == 'nao'){
        resp4 = '0';
    }else{
        console.log("Resposta inválida! Reinicie o programa!")
    }

let resp5 = prompt("5- O anel foi destruído na montanha da perdição?: ");
    if(resp5.toLowerCase() == 'sim'){
        resp5 = '1';
    }else if(resp5.toLowerCase() == 'nao'){
        resp5 = '0';
    }else{
        console.log("Resposta inválida! Reinicie o programa!")
    }

    let totResp = Number(resp1) + Number(resp2) + Number(resp3) + Number(resp4) + Number(resp5);

    console.log(resp1);
    console.log(resp2);
    console.log(resp3);
    console.log(resp4);
    console.log(resp5);
    console.log(totResp);
    
    if(totResp == 0){
        console.log("A sociedade fracassou miserávelmente!");
    }else if(totResp > 0 && totResp <=2){
        console.log("A sociedade falhou, mas os membros conseguiram fugir da situação!");
    }else if(totResp == 3){
        console.log("A sociedade chegou perto de conseguir alcançar seu objetivo, mas acabou falhando por pouco.")
    }else if(totResp == 4){
        console.log("Depois de muito esforço a sociedade conquista seu objetivo, embora não de maneira perfeita.")
    }else if(totResp == 5){
        console.log("A sociedade triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações. ")
    }





