import { Router } from "express";
import user from "../controllers/users";
import encrypt from "../middleware/encrypt";

const usersRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 * tags:
 *   name: Users
 * /user/register:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 */
usersRouter.post("/register", encrypt.hashPassword, user.create);

export default usersRouter;
