import { Router } from 'express';

const router = Router();

import { indexHome } from '../controllers/index.controllers';

router.route('/')
    .get(indexHome);

export default router;