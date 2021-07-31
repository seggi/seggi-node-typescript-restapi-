import { Router } from "express";

const router = Router()

import { createUser, deleteUser, getUser, getUsers, updateUser,  } from "../controllers/user.controller";


router.get('/', getUsers);

router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser)



export default router;

