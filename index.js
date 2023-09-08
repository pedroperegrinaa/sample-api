const express = require('express');
const app = express();
const port = 3000; // Escolha a porta que desejar

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// Inicie o servidor na porta especificada
app.listen(port, () => {
  console.log(`A API está rodando em http://localhost:${port}`);
});
