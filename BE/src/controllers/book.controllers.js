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
        return res.status(200).json({ message: "Book added successfully!" , newBook });


    } catch (err) {
        console.log("error in adding books", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

