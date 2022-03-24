import express from 'express'
import {
  getHeroesHandler,
  addHeroHandler,
  deleteHeroHandler,
  editHeroHandler,
} from '../controllers/hero.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/blogs':
 *  get:
 *     tags:
 *     - Blog
 *     summary: Get all blogs
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  Title:
 *                    type: string
 *                    default: ALTP 7
 *                  Body:
 *                    type: string
 *                    default: Andela Technical Leadership program
 *                  Date&Time:
 *                    type: Date
 *                    default: date.(now)
 *       400:
 *         description: Bad request
 */

/**
 * @openapi
 * '/blogs/{id}':
 *  get:
 *     tags:
 *     - Blog
 *     summary: Get one specific blog
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  Title:
 *                    type: string
 *                    default: ALTP 7
 *                  Body:
 *                    type: string
 *                    default: Andela Technical Leadership program
 *                  Date&Time:
 *                    type: Date
 *                    default: date.(now)
 *       400:
 *         description: Bad request
 */


router.get('/api/heroes', getHeroesHandler)

/**
 * @openapi
 * '/blogs':
 *  post:
 *     tags:
 *     - Blog
 *     summary: Create a blog (You have to login first and get the JW token)
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - Title
 *              - Body
 *            properties:
 *              Title:
 *                type: String
 *                default: ATLP 7
 *              Body:
 *                type: string
 *                default: Andela Technical leadership program
 *     responses:
 *      200:
 *        description: Good 
 *      401:
 *        description: Access Denied
 *      404:
 *        description: Not Found
 */
router.post('/api/hero', addHeroHandler)

/**
 * @openapi
 * '/blogs/{id}':
 *  patch:
 *     tags:
 *     - Blog
 *     summary: Modify a blog (You have to login first and get the JW token)
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - Title
 *              - Body
 *            properties:
 *              Title:
 *                type: string
 *                default: The previous
 *              Body:
 *                type: string
 *                default: the previous body
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/hero', editHeroHandler)

/**
 * @openapi
 * '/blogs/{id}':
 *  delete:
 *     tags:
 *     - Blog
 *     summary: Remove blog by id (You have to login first and get the JW token)
 *     parameters:
 *      - blog: id
 *        in: path
 *        description: The id of the blog
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/hero/:id', deleteHeroHandler)
/**
 * @openapi
 * '/comment':
 *  post:
 *     tags:
 *     - Blog
 *     summary: Post a comment on a specific blog by using it's id (No login required)
 *     parameters:
 *      - Blogid: id
 *        in: path
 *        description: The id of the blog
 *        required: true
 *      - Comment: string
 *        in: path
 *        description: comment on the blog
 *        required: true
 *     responses:
 *      201:
 *        description: created
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
 router.post('/api/hero/:id', addHeroHandler)
 /**
 * @openapi
 * '/blogs/{id}':
 *  delete:
 *     tags:
 *     - Blog
 *     summary: Remove blog by id (You have to login first and get the JW token)
 *     parameters:
 *      - blog: id
 *        in: path
 *        description: The id of the blog
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.get('/api/hero/:id', getHeroesHandler)
/**
 * @openapi
 * '/comment/{id}':
 *  get:
 *     tags:
 *     - Blog
 *     summary: get a comments of a specific blog by using it's id (No login required)
 *     parameters:
 *      - Comment: string
 *        in: path
 *        description: The comments of the blog with this id
 *        required: true
 *     responses:
 *      200:
 *        description: ok
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
 router.delete('/api/hero/:id', addHeroHandler)
 /**
 * @openapi
 * '/message':
 *  post:
 *     tags:
 *     - Blog
 *     summary: Send a message to the blog owner (No login required)
 *     parameters:
 *      - Email: email
 *        in: path
 *        description: The email of the user
 *        required: true
 *      - Message: string
 *        in: path
 *        description: The message from user
 *        required: true
 *     responses:
 *      201:
 *        description: created
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.post('/api/hero/:id', addHeroHandler)
/**
  router.delete('/api/hero/:id', addHeroHandler)
 /**
 * @openapi
 * '/message':
 *  get:
 *     tags:
 *     - Blog
 *     summary: Get messages from users (login is required)
 *     parameters:
 *      - Email: email
 *        in: path
 *        description: The email of the user
 *        required: true
 *      - Message: string
 *        in: path
 *        description: The message from user
 *        required: true
*      - dates: string
 *        in: path
 *        description: date and time message has been sent
 *        required: true
 *     responses:
 *      201:
 *        description: created
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.post('/api/hero/:id', addHeroHandler)
/**
 * @openapi
 * '/subcribe':
 *  post:
 *     tags:
 *     - Blog
 *     summary: Post a comment on a specific blog by using it's id (No login required)
 *     parameters:
 *      - Email: email
 *        in: path
 *        description: The email of the user
 *        required: true
 *     responses:
 *      201:
 *        description: created
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
 router.delete('/api/hero/:id', addHeroHandler)

export default router
