import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // Lista usuarios
// router.get('/:id', userController.show); // Lista usuario

// ok
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/* regras
index -> lista todos usuarios -> GET
store/create -> cria outro usuario -> POST
delete -> apaga um usuarios -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PACTH(altera somente um valor) ou PUT(altera obj inteiro)
*/
