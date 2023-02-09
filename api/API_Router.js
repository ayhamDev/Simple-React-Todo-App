const express = require("express")
const db = require("softdb")("db")

const Todo = db.collection("Todo")

const api = express.Router()


api.get("/todo",async (req,res) => {
    const { id,pin } = req.query
    if(!pin || !id) return res.status(404).send({ err: "You Have to Enter The Pin and the ID of the Room"})

    const doc = await Todo.doc(id).get()
    
    if(doc && doc?.pin == pin) {
        res.json(doc)
    }
    else {
        res.status(404).send({ err: "You Have to Enter The Pin and the ID of the Room"})
    }
})

api.post("/create-room", async (req,res) => {
    const { pin } = req.query
    const name = req.body.name
    if(!pin || !name) return res.status(404).send({ err: "You Have to Enter The Pin and the ID of the Room"})

    const doc = await Todo.add({
        name,
        pin,
        TodoItem : []
    })

    res.json(doc)
})

api.post("/addTodo", async (req,res) => {
    const { id, pin } = req.query
    const data = req.body.data

    if(!pin || !id) return res.status(404).send({ err: "You Have to Enter The Pin and the ID of the Room"})
    if(!data.title || !data.decs ) return res.status(404).send({ err: "You Have to Enter The title and the Description of the Todo"})
    const doc = await Todo.doc(id).get()
    if(doc.pin == pin) {
        const results = await Todo.doc(id).update({
            TodoItem: [{...data},...doc.TodoItem]
        })
        res.json(results)
    }
    else {
        res.send({ err: "The room pin is not correct" })
    }

})

api.post("/updateToDo", async (req,res) => {
    const { ID, pin , data} = req.body

    const doc = await Todo.doc(ID).get()
    if(doc.pin == pin) {
        const results = await Todo.doc(ID).update({
            TodoItem: data
        })
        
        res.json(results)
    }
    else {
        res.send({ err: "The room pin is not correct" })
    }

})
module.exports = api