import { libraryModel } from "../models/library.js"

class libraryController{
    static index = async (req,res) =>{
        res.render('index',{title:'Home'})
    }

    static student = async (req,res) =>{
        res.render('student',{title:'student'})
    }

    static admin = async (req,res) =>{
        res.render('admin',{title:'admin'})
    }

    static books = async (req,res) =>{
        try {
            const bookdata = await libraryModel.find() 
            res.render('books',{title:'books',bookdata})
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static create = async(req,res) =>{
        res.render('create',{title:'Create Book'})
    }

    static store = async(req,res) =>{
        try {
            const {book_name,code,book_author} = req.body

            const book = new libraryModel({
                book_name:book_name,
                code:code,
                book_author:book_author,
                status:"Available"
            })
            await book.save()
            res.redirect('all_books')
        } catch (error) {
            res.redirect('/')
        }
    }

    static edit = async(req,res) =>{
       try {
        const bookdata = await libraryModel.findById(req.params.id)
        res.render('edit',{title:'update Book',bookdata})
       } catch (error) {
        req.redirect('all_books')
       }
    }

    static update = async (req,res) =>{
        try {
            await libraryModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/all_books')
        } catch (error) {
            console.log(error) 
            res.redirect(`/edit/${req.params.id}`)
        }
    }

    static delete = async (req,res) =>{
        try {
            await libraryModel.findByIdAndDelete(req.params.id)
            res.redirect('/all_books')
        } catch (error) {
            console.log(error)
            res.redirect('/all_books')
        }
    }

    static allBooks = async (req,res) =>{
        try {
            const bookdata = await libraryModel.find() 
            res.render('all_books',{title:'books',bookdata})
        } catch (error) {
            console.log(error)
            res.redirect('all_books')
        }
    }

    static search = async (req, res) => {
        const searchQuery = req.query.query;
        try {
            const books = await libraryModel.find({
                $or: [
                    { book_name: { $regex: searchQuery, $options: 'i' } },
                    { code: { $regex: searchQuery, $options: 'i' } },
                    { book_author: { $regex: searchQuery, $options: 'i' } }
                ]
            });
            res.json(books);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'An error occurred while searching' });
        }
    }

    static checkrq = async (req,res) =>{
        try {
            const bookdata = await libraryModel.find({status:"Requested"}) 
            res.render('checkreq',{title:'requests',bookdata})
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static action = async (req,res) =>{
        try {
            await libraryModel.findByIdAndUpdate(req.params.id,{status:req.params.action})
            res.redirect('/')
        } catch (error) {
            console.log(error) 
            res.redirect(`/books`)
        }
    }

}

export {libraryController}