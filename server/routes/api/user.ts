import { Router } from 'express';
import { pseudoLogin, lnurlLogin } from '../../controllers/user';

const router = Router();

router.get('/login-lnurl', lnurlLogin);
router.get('/lnurl', pseudoLogin);

export default router;