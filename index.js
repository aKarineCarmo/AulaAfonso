const express = require("express");
const app = express();

app.get("/pessoa/:nome/:idade", (req, res) => {
  const { nome, idade } = req.params;

  res.status(200).json({
    mensagem: `Nome: ${nome}! Idade: ${idade}!`
  });

});


app.listen(3011, () => {
  console.log("NOME servidor está ligado");
});