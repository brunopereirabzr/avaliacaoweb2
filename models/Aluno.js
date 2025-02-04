import banco from '../config/banco.js';

const Aluno = banco.sequelize.define(){
    nome:{
        type:banco.Sequelize.STRING(100)
    },
    telefone:{
        type:banco.Sequelize.INTEGER(15)
    },

    email:{
        type:banco.Sequelize.STRING(100)
    },
    nota:{
        type:banco.Sequelize.INTEGER(15)
    },
    situacao:{
        type:banco.Sequelize.STRING(100)
    }
}

export default Aluno;