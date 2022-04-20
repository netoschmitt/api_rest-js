import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/* regras

index -> lista todos usuarios -> GET

store/create -> cria outro usuario -> POST

delete -> apaga um usuarios -> DELETE

show -> mostra um usuario -> GET

update -> atualiza um usuario -> PACTH(altera somente um valor) ou PUT(altera obj inteiro)

*/
