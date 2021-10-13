
Projeto Desenvolvido Pelo Lucas Orestes Fabris

Esse projeto é sobre o tema de Yu-Gi-Oh - Apresenta dados sobre algumas cartas

Projeto postado em: https://github.com/Lucas-OF28/provappw2.git
Projeto rodando em: https://dashboard.heroku.com/apps/recuperacaolucasfabris

Neste Projeto foram implementadas três rotas get que foram propostas pelo professor mediador da disciplina de PPW II.

1- A Primeira rota get retorna uma lista com todos os itens. A lista
pode ser filtrada para conter apenas objetos que possui o valor
repassado. Podendo limitar também os itens da lista.

Utilizando: /api/usuarios?limite=5 -- utilizado para limitar os objetos retornados pela api, foi desenvolvido uma verificação por motivo dos dados serem uma quantidade mínima, logo caso sejá passado um quantidade que não possua na api retorna uma mensagem de erro ao cliente.

            /api/usuarios -- para retornar todos os objetos da lista.

            /api/usuarios?nome=Kariboh -- para retornar os dados apenas da carta filtrada pelo seu nome(O mesmo pode ser utilizado para tipo, ATK, DEF, nivel)

2- Retorna um objeto aleatorio da lista.

            /api/usuarios/random 

3- Essa rota possibilita o usuario buscar um objeto a partir do seu tipo, a partir desta busca é retornado o objeto(s) que possuem o determinado tipo.

Para a implementação dessa rota foi necessário a aplicação de mais de um GET para retornar os dados.

            EX: /usuarios/dragao -- Para filtrar penas as cartas que possuem o tipo dragao.