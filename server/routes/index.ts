import { Router, Request, Response } from 'express';
const router = Router();
import api from './api';

router.get("/", (req: Request, res: Response): void => {
    res.send("This is the index route")
});

router.use('/api', api);

// 404 route
router.all('*', (req: Request, res: Response): void => {
    const errorMessage = {
        message: 'You are hitting a wrong route, find the valid routes below',
        endpoints: {
            login: 'POST /api/auth/login'
        },
        success: false
    }
res.status(404).json(errorMessage)
})

export default router;