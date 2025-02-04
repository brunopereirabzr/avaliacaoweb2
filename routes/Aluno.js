import alunoController from "../controllers/AlunoController.js";

router.get('/', alunoController.index);
router.get('/cadastrar', alunoController.cadastrar);

export default aluno;