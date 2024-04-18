const BoletoModel = require("../models/BoletoModel");

class BoletoController{
    static async cadastrar(req, res){
        if(req.body._id == ''){ //cadastrar
                const novoBoleto = new BoletoModel ({
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    mes: req.body.mes,
                    valor: req.body.valor,
                    tipo: req.body.tipo
                })
                await novoBoleto.save();
                res.redirect("/boletos?s=1");
        }else{ //atualizar
                const id = req.body._id;
                const boletoUpdate = {
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    mes: req.body.mes,
                    valor: req.body.valor,
                    tipo: req.body.tipo
                }
                await BoletoModel.findOneAndUpdate({_id:id}, boletoUpdate);
                res.redirect("/boletos?s=3");
        }
        }
    static async relatorio(req, res){
        const status = req.query.s;
        const VBoletos = await BoletoModel.find();
        res.render("boleto/relatorio", {VBoletos, status});
}
    static async detalhar(req, res){
        const id = req.params.id;
        const c = await BoletoModel.findOne({_id:id});
        res.render("boleto/detalhar", {c});
}
    static cadastrarRender(req, res){
        const status = req.query.s;
        let boletoUpdate = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            mes: req.body.mes,
            valor: req.body.valor,
            tipo: req.body.tipo
        };
        if(req.session.boleto==null){
            res.render("boleto/cadastrar", {boletoUpdate, status});
        }else{
            res.render("/");
        }
    }

    static async deletar(req, res){
        const id = req.params.id;
        await BoletoModel.findOneAndDelete({_id:id});
        res.redirect("/boletos?s=2");
    }
    static async atualizar(req, res){
        const status = req.query.s;
        const id = req.params.id;
        const boletoUpdate = await BoletoModel.findOne({_id:id});
        res.render("boleto/cadastrar", {boletoUpdate, status});
    }
}

module.exports = BoletoController;