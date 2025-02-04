import Aluno from "../models/Aluno";

class aluno{
    index = async function(req, res){
        let aluno = await aluno.findAll()
        res.render('index', {alunos: alunos})
    }

    cadastrar = function(re,res){
        res.render('cadastro')
    }
}

export default aluno