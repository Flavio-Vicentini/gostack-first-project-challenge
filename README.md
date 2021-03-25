![folder](https://github.com/Flavio-Vicentini/gostack-primeiro-projeto-node/blob/master/assets/to_readme/folder_gostack.png)
# Primeiro Projeto com Node
Projeto desenvolvido para treinar os conhecimentos adquiridos do BootCamp GoStack da RocketSeat. A aplicação tem a finalidade de armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagens dessas transações.

O desafio era implementar as seguintes rotas:
1. POST /transactions: A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas).
2. GET /transactions: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito.

E assim passar nos testes automatizados:

- should be able to create a new transaction: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criada.

- should be able to list the transactions: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- should not be able to create outcome transaction without a valid balance: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: { error: string }

---

## Features

*NodeJs* -
*Typescript* -
*ESLint* -
*Prettier*
