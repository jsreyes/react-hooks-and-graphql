const user = {
    _id: "1",
    name: "Javier",
    email: "jreyes@belatrixsf.com",
    picture: "https://cloudinary.com/example"
}

// We said to Query that returns and User Object
module.exports = {
    Query: {
        me: () => user
    }
}