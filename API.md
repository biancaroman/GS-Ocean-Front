# Endpoints da Aplicação

A aplicação possui diversos endpoints para realizar operações de cadastro, login e gerenciamento de usuários e ONGs.

## Cadastro de ONGs e Usuários 
## (Endpoints utilizados na página CadastroOngs.js e CadastroUsuario.js)

### POST /usuarios.json

Este endpoint é utilizado para cadastrar tanto usuários comuns quanto ONGs. Os dados enviados no corpo da requisição são nome, email, telefone, senha, tipo (indicando se é uma ONG ou usuário comum), e para ONGs, também há o campo adicional de descrição e aprovado (que indica se a ONG foi aprovada).

Exemplo de requisição para cadastro de ONG:

```javascript
axios.post('https://oceanovivo-41843-default-rtdb.firebaseio.com/usuarios.json', {
  nome: 'Nome da ONG',
  email: 'email@daong.com',
  telefone: '(99)99999-9999',
  endereco: 'Endereço da ONG',
  descricao: 'Descrição da ONG',
  senha: 'senha123',
  aprovado: false,
  tipo: 'ong'
})
.then(response => {
  console.log('Formulário de cadastro enviado com sucesso!');
})
.catch(error => {
  console.error('Erro ao realizar cadastro:', error);
});
```

Retorno em caso de sucesso:
```json
{
  "status": "OK",
  "message": "Formulário de cadastro enviado com sucesso!"
}
```

Exemplo de requisição para cadastro de usuário comum:

```javascript
axios.post('https://oceanovivo-41843-default-rtdb.firebaseio.com/usuarios.json', {
  nome: 'Nome do Usuário',
  email: 'email@dousuario.com',
  telefone: '(99)99999-9999',
  senha: 'senha123',
  tipo: 'usuario_comum'
})
.then(response => {
  console.log('Usuário cadastrado com sucesso!');
})
.catch(error => {
  console.error('Erro ao realizar cadastro:', error);
});
``` 

## Login de ONGs e Usuários (Endpoint utilizado na página Login.js)

### GET /usuarios.json

Este endpoint é utilizado para obter a lista de usuários cadastrados no sistema. A resposta contém um objeto JSON com as informações de todos os usuários, onde cada chave é o ID do usuário e os valores são objetos contendo nome, email, telefone e tipo de usuário.
Verificando o tipo de usuário, caso o login seje bem sucedido cada usuario sera direcionado para suas respectivas páginas (podendo ser usuário comum, ongs ou administradores)

Obs: O administrador não possue cadastro, sendo de responsalidade do nosso próprio sistema cadastra-los, por este motivo, possue um json fixo para fins de teste: 

```json
"adm": {
    "email": "admin1@gmail.com",
    "nome": "Administrador Um",
    "senha": "admin1234",
    "tipo": "administrador"
  }
``` 

Exemplo de requisição:

```javascript
axios.get('https://oceanovivo-41843-default-rtdb.firebaseio.com/usuarios.json')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao realizar login:', error);
  });
```

Retorno:
```json
{
  "1": {
    "nome": "Usuário 1",
    "email": "usuario1@example.com",
    "telefone": "(99) 99999-9999",
    "tipo": "usuario_comum"
  },
  "2": {
    "nome": "ONG 1",
    "email": "ong1@example.com",
    "telefone": "(88) 88888-8888",
    "tipo": "ong"
  },
  // Outros usuários...
}
```

## Administrador (Endpoints utilizados na página Administracao.js)

### GET /ongs.json

Este endpoint é utilizado para obter a lista de ONGs cadastradas no sistema. A resposta é similar ao endpoint de usuários, mas com informações específicas das ONGs, como nome, email, telefone, endereço, descrição e se foi aprovada.

Exemplo de requisição:
```javascript
axios.get('https://oceanovivo-41843-default-rtdb.firebaseio.com/ongs.json')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

Retorno: 
```json
{
  "1": {
    "nome": "ONG 1",
    "email": "ong1@example.com",
    "telefone": "(99) 99999-9999",
    "endereco": "Endereço da ONG 1",
    "descricao": "Descrição da ONG 1",
    "aprovado": true
  },
  "2": {
    "nome": "ONG 2",
    "email": "ong2@example.com",
    "telefone": "(88) 88888-8888",
    "endereco": "Endereço da ONG 2",
    "descricao": "Descrição da ONG 2",
    "aprovado": false
  },
  // Outras ONGs...
}
```

### PUT /ongs/{ongId}.json

Este endpoint é utilizado para aprovar uma ONG específica com o ID {ongId}, alterando seu status para aprovado no banco de dados. O corpo da requisição contém apenas o campo "aprovado" com o valor "true". 

Exemplo de requisição:

```javascript
axios.put('https://oceanovivo-41843-default-rtdb.firebaseio.com/ongs/123.json', { aprovado: true })
  .then(response => {
    console.log('ONG aprovada com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao aprovar a ONG:', error);
  });
```

Retorno em caso de sucesso:
```json
{
  "status": "OK",
  "message": "ONG aprovada com sucesso!"
}
```

### DELETE /ongs/{ongId}.json

Este endpoint é utilizado para remover uma ONG específica com o ID {ongId} do banco de dados.

Exemplo de requisição:

```javascript
axios.delete('https://oceanovivo-41843-default-rtdb.firebaseio.com/ongs/123.json')
  .then(response => {
    console.log('ONG removida com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao remover a ONG:', error);
  });
```

Retorno em caso de sucesso:
```json
{
  "status": "OK",
  "message": "ONG removida com sucesso!"
}
```
