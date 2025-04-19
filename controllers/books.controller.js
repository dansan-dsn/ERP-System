
const users = [ 
    {
        userName: "Aditya Gupta",
        userEmail: "aditaya@gmail.com",
        userAge: "22",
        userUniqueId: '1'
    },
    {
        userName: "Vanshita Yadav",
        userEmail: "sachin@gmail.com",
        userAge: "22",
        userUniqueId: '2'
    },
    {
        userName: "Sachin Jaiswal",
        userEmail: "sachin@gmail.com",
        userAge: "22",
        userUniqueId: '3'
    },
]

const addBooks = (req, res) => {
    const inputUserName = req.body.userName
    const inputUserEmail = req.body.userEmail
    const inputUserAge = req.body.userAge
    const inputUniqueId = req.body.userUniqueId

    users.push(
        {
            userName: inputUserName,
            userEmail: inputUserEmail,
            userAge: inputUserAge,
            userUniqueId: inputUniqueId
        }
    )
    res.render('index', {data: users})
}

const getBooks = (req, res) => {
    res.render('index', {data: users})
}

const updateBooks = (req, res) => {
    const inputUserName = req.body.userName
    const inputUserEmail = req.body.userEmail
    const inputUserAge = req.body.userAge
    const inputUniqueId = req.body.userUniqueId
    var j = 0
    users.forEach(user => {
        
        if(user.userUniqueId === inputUniqueId) {
            user.userName = inputUserName
            user.userEmail = inputUserEmail
            user.userAge = inputUserAge
        }
        j = j + 1
    })
    res.render('index', {data: users})
}

const deleteBooks = (req, res) => {
    const deleteUser = req.body.userName
    var j = 0; 
    users.forEach(user => {
        j += 1
        if(user.userName == deleteUser) {
            users.splice((j-1), 1)
        }
    })
    res.render('index', {data: users})
}

module.exports = {
 addBooks,
 getBooks,
 updateBooks,
 deleteBooks
}