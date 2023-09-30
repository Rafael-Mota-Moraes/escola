import { Router } from 'express';
import alunoController from '../controllers/AlunoCotroller';

const router = Router();

router.get('/', alunoController.index);

export default router;
