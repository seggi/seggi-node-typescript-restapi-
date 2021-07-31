import Router from 'express';
import { signup, signin, profile } from '../controllers/auth.controllers';


const router = Router();

router.get("/signup", signup);router.get("/", signup);
router.get("/signin", signin);
router.get("/profile", profile);

export default router;