import express from 'express'
import heroRoutes from './hero.routes.js'
const router = express.Router()

/**
 * @openapi
 * '/login/register':
 *  post:
 *     tags:
 *     - Admin
 *     summary: Create an Admin account
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - Email
 *              - Password
 *            properties:
 *              Email:
 *                type: email
 *                default: kalisa@yahoo.com
 *              password:
 *                type: string
 *                default: hsakjani291mj
 *     responses:
 *      200:
 *        description: Good 
 *      401:
 *        description: Access Denied
 *      404:
 *        description: Not Found
 */
/**
 * @openapi
 * '/login':
 *  post:
 *     tags:
 *     - Admin
 *     summary: Login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - Email
 *              - Password
 *            properties:
 *              Email:
 *                type: email
 *                default: kalisa@yahoo.com
 *              password:
 *                type: string
 *                default: hsakjani291mj
 *     responses:
 *      200:
 *        description: Good + jwt token
 *      401:
 *        description: Access Denied
 *      404:
 *        description: Email Not Found
 */
router.get('/healthcheck', (req, res) => res.sendStatus(200))

router.use(heroRoutes)

export default router
