# trabalho_individual_mod5

Explicação:

O array propriedades irá armazenar as propriedades de CSS inseridas pelo usuário.
A mensagem "Digite uma propriedade de CSS (ou 'SAIR' para terminar):" é exibida no console para orientar o usuário.
O evento data é registrado no objeto process.stdin para capturar a entrada do usuário.
O dado digitado pelo usuário é convertido em string e tratado (trim) para remover possíveis espaços em branco.
Se o usuário digitar "SAIR", a mensagem "Lista de propriedades ordenadas:" é exibida no console, seguida da lista ordenada (sort) das propriedades separadas por uma quebra de linha (join).
O processo é finalizado (process.exit()).
Caso contrário, a propriedade é adicionada ao array propriedades.
