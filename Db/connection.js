import mongoose from "mongoose";

const con = async (db_url)=>{
    try {
        const db_option ={
            dbName:'Library-management'
        }
        await mongoose.connect(db_url,db_option)
        console.log('connection successfully!')
    } catch (error) {
        console.log(error)
    }
}

export default con