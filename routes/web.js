import express from 'express'
import { libraryController } from '../controllers/libraryController.js'
const router = express.Router()

router.get('/',libraryController.index)
router.get('/student',libraryController.student)
router.get('/admin',libraryController.admin)
router.get('/books',libraryController.books)
router.get('/search', libraryController.search)
router.get('/action/:action/:id',libraryController.action)
router.get('/books_manage',libraryController.checkrq)
router.get('/all_books',libraryController.allBooks)
router.get('/create',libraryController.create)
router.post('/store',libraryController.store)
router.get('/edit/:id',libraryController.edit)
router.post('/update/:id',libraryController.update)
router.get('/delete/:id',libraryController.delete)

export default router


