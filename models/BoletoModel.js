const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boletoSchema = Schema({
    nome: String,
    cpf: String,
    mes: Number,
    valor: Number,
    tipo: String
});

module.exports = mongoose.model("Boleto", boletoSchema);