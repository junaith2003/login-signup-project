import express from 'express';
const app = express();
import cors from "cors"

const users = []

const checkEmailInDB = (email) => {
    return users.find((user) => user.email === email)
}

const emailPasswordMiddleware = (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password are required!" })
    }

    next()

}

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Junaith')

})

app.post("/user", emailPasswordMiddleware, (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password are required!" })
    }

    const existingUser = checkEmailInDB(email)

    if (existingUser) {
        return res.status(400).json({ message: "User already exists!" })
    }

    const newUser = {
        email,
        password
    }

    users.push(newUser)

    return res.status(201).json({ message: "User created successfully!" })

})

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!existingUser) {
    return res.status(400).json({ message: "Invalid email or password!" });
  }

  return res.status(200).json({ message: "Login successful!" });
});


app.listen(8000, () => {
    console.log("Server Started...")
})