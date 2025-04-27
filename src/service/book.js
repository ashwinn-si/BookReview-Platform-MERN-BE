const bookModel = require("../model/bookModel")
const bookImageModel = require("../model/bookImageModel")
const reviewModel = require("../model/reviewModel")

//multer setup
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const allBookDetails = async(data) => {
    const bookDetails = await bookModel.find({}).select(["-__v"]);
    return {data : bookDetails};
}

const addBook = async (data) => {
    const {name, author, category} = data
    
    const existingBook = await bookModel.findOne({name: name, author: author})
    
    if (existingBook) {
        throw new Error('Book already exists')
    }
    
    const newBook = new bookModel({
        name: name,
        author: author,
        category: category,
    })
    
    const bookId = await newBook.save()
    return {bookId: bookId._id}
}

const addBookImage = async (data) => {
    const {id, buffer, mimetype} = data
    
    if(!buffer || !mimetype) {
        throw new Error('Image is required')
    }
    
    const newImage = new bookImageModel({
        image : {
            data: buffer,
            mimeType: mimetype,
        },
        bookId: id,
    })
    
    await newImage.save()
}

const getBookDetails = async(data) => {
    const {id} = data
    
    const [bookDetails, bookReviews, bookImageData] = await Promise.all([
        bookModel.findById(id).select(["-__v", "-_id"]),
        reviewModel
            .find({ bookId: id })
            .select("-__v -_id")
            .populate({
                path: "userId",
                select: "name email -_id"
            }),
        bookImageModel.findOne({ bookId: id }).select(["-__v", "-_id","-bookId"]),
    ]);
    
    return {bookDetails, bookReviews, bookImageData};
}

const deleteBook = async(data) => {
    const {id} = data
    await  Promise.all([
        bookModel.deleteOne({_id: id}),
        bookImageModel.deleteMany({bookId: id}),
        reviewModel.deleteMany({bookId: id}),
    ]);
}

const deleteAllBooks = async(data) => {
    await bookModel.deleteMany({})
}

module.exports = {
    allBookDetails,
    addBook,
    getBookDetails,
    deleteBook,
    addBookImage,
    deleteAllBooks,
};