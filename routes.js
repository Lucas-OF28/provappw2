const express = require('express')
const router = express.Router()
const dados = require('./dados.json')

function geraUsuario(){

    const pos = Math.floor(Math.random()*5)

    const usuario = {
        nome: dados[pos].nome,
        tipo: dados[pos].tipo,
        ATK: dados[pos].ATK,
        DEF: dados[pos].DEF,
        nivel: dados[pos].nivel
    }
    return usuario
}

router.get('/usuarios/random', function(req, res){
    let usuario = geraUsuario()
   res.json(usuario)

})
    router.get('/usuarios', function(req, res){
        var obs=[];
        var limite=req.query.limite
        if(limite!=undefined){
            console.log("aaaaa")
            if(limite>=6){
                res.send("Error: Limite Inváido");
            }
            if(limite==1){
                obs.push(dados[0])
                res.json(obs)
            }else if(limite=='2'){
                i=0;
                while(i!=2){
                    obs.push(dados[i])
                    i++;
                }
                res.json(obs);
            }
            else if(limite=='3'){
                i=0;
                while(i!=3){
                    obs.push(dados[i])
                    i++;
                }
                res.json(obs);
            }
            else if(limite=='4'){
                i=0;
                while(i!=4){
                    obs.push(dados[i])
                    i++;
                }
                res.json(obs);
            }else{
                i=0;
                while(i!=5){
                    obs.push(dados[i])
                    i++;
                }
                res.json(obs);
            }
        }else{
            if(Object.keys(req.query).length != 0){
                var nome=req.query.nome
                var tipo=req.query.tipo
                var ATK=req.query.ATK
                var DEF=req.query.DEF
                var nivel=req.query.nivel
                for(let i=0;i<=4;i++){
                if(dados[i].nome==nome){
                    obs.push(dados[i]);
                }if(dados[i].tipo==tipo){
                    obs.push(dados[i]);
                }if(dados[i].ATK==ATK){
                    obs.push(dados[i]);
                }if(dados[i].DEF==DEF){
                    obs.push(dados[i]);
                }if(dados[i].nivel==nivel){
                    obs.push(dados[i]);
                }
                }
                res.json(obs);
            }else{
                res.json(dados);
            }
        }

       
    })

    // Essa parte do código faz referência ao ponto 3 da avaliação, na qual é proposto o cliente buscar um objeto a partir do tipo posto no objeto, portanto a partir desta busca é retornado o objeto(s) que possuem o determinado tipo.


    router.get('/usuarios/dragao',(req,res)=>{
        var obs=[]
        for(var i=0;i<=4;i++){
            if(dados[i].tipo=="dragao"){
                obs.push(dados[i])
            }
        }
        res.json(obs)
    })

    router.get('/usuarios/mago',(req,res)=>{
        var obs=[]
        for(var i=0;i<=4;i++){
            if(dados[i].tipo=="mago"){
                obs.push(dados[i])
            }
        }
        res.json(obs)
    })

    router.get('/usuarios/machine',(req,res)=>{
        var obs=[]
        for(var i=0;i<=4;i++){
            if(dados[i].tipo=="machine"){
                obs.push(dados[i])
            }
        }
        res.json(obs)
    })

    router.get('/usuarios/demonio',(req,res)=>{
        var obs=[]
        for(var i=0;i<=4;i++){
            if(dados[i].tipo=="demonio"){
                obs.push(dados[i])
            }
        }
        res.json(obs)
    })
module.exports = router;
