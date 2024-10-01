import mongoose from 'mongoose'

const librarySchema = new mongoose.Schema({
    book_name:{type:String,required:true},
    code:{type:String,required:true},
    book_author:{type:String,required:true},
    status:{type:String,required:true},
})

const libraryModel = mongoose.model('student',librarySchema)

export {libraryModel}