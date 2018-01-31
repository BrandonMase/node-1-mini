let books = [{
    id: 34,
    title: "Deep Blue Sea",
    author:"Brandon"
}];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { title, author } = req.body;

        books.push({ id, author, title });
        id++;

        res.status(200).send(books);
    },

    read: (req, res) => {
        res.status(200).send(books);
    },

    update:( req, res ) => {
        const updateID = req.params.id;
        let index = books.findIndex( book => book.id == updateID );
    
        books[ index ] = {
          id: books[ index ].id,
          title: req.body.title || books[ index ].title,
          author: req.body.author || books[ index ].author
        };
    
        res.status(200).send( books );
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        let bookID = books.findIndex(book => book.id === deleteID);

        books.splice(bookID, 1);
        res.status(200).send(books);
    }
}