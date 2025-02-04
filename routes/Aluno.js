import aluno from "../controllers/Aluno";

router.get('/', PessoaController.index);
router.get('/cadastrar', PessoaController.cadastrar);

export default aluno;