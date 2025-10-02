const Book = require('../models/Book');
const cloudinary = require('../config/Cloudinary');

exports.addBook = async (req, res) => {
    try {
        const { title, author, description, isbn, publicationDate,
            publisher, language, price, category, tags, discountPrice, stock, available, coverImages,
            pdfUrl, pages } = req.body;

        if (!title || !author || !description || !isbn || !publisher || !stock || !coverImages || !pages) {
            return res.status(400).json({ message: "Credentials require" });
        }
        const existingBook = await Book.findOne({ title, isbn });
        if (existingBook) {
            return res.status(409).json({ message: "Title is already exists" });
        }

        const newBook = new Book({
            title, author, description, isbn, publicationDate,
            publisher, language, price, category, tags, discountPrice, stock, available, coverImages,
            pdfUrl, pages
        });
        if (!newBook) {
            return res.status(400).json({ message: "Bad request" });
        }
        await newBook.save();
        return res.status(200).json({ message: "Book added successfully!", newBook });


    } catch (err) {
        console.log("error in adding books", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

exports.getBook = async (req , res) =>{
    try{
        const book = await Book.find({});
        if(!book){
            return res.status(404).json({message:"Book not found"});
        }
        return res.status(200).json({message:"Fetch book successfully" , book});
    }catch(err){
        console.log("Error in getBook", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.getBookById = async (req,res) =>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"Id not  found"});
        }
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).json({message:"BookId not found"});
        }
        return res.status(200).json({message:"Fetch BookById successfully" , book});
    }catch(err){
        console.log("Error in getBookById", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.deleteBookById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "id not found" });
        }
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: "BookId not found" });
        }
        res.status(200).json({ message: "Book deleted successfully", book });

    } catch (err) {
        console.log("Error in deleteBookById", err);
        res.status(500).json({ message: "Internal server error" });
    }
}