#CookieManager
Classe que tem como objetivo simplificar o gerenciamento de cookies ou seja criar, editar e excluir cookies ao chamar de uma função.
##Uso:
Primeiramente se cria uma instancia da classe(```var cm = new CookieManager();```), após isso você já pode utilizar os métodos da classe que são: **set**, **get** e **remove**. Veja o uso da cada um a seguir: 

###set:
```
//recebe como parametros o nome do cookie, o valor do cookie e tempo de vida do mesmo em dias
cm.set('cookieTeste','valorTeste');
```

###get:
```
//recebe como parametro apenas o string com o nome do cookie desejado
cm.get('cookieTeste');
//retornara o string do cookie EX: 'g=HUEBR expires=Thu, 01 Jan 2015 00:00:00 UTC' ou false caso o cookie não exista.
```

###remove:
```
//recebe como parametro apenas o string com o nome do cookie a ser excluido
cm.remove('cookieTeste');
//retornara o valor booleano... true caso o cookie tenha sido excluido e false caso o cookie por algum motivo não tenha sido excluido 
```


** *Importante:**
o usuario deve estar ciente que os cookies estão atrelados aos dominios e assim entender as limitações da classe ou seja só se pode gerenciar os cookies do dominio da aplicação.

[por Douglas Santos](http://douglas.com.br)
