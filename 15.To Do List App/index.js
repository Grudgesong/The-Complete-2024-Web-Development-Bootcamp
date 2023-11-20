import express from "express";
import bodyParser from "body-parser";

const app= express();
const port = 3000;
var newItems=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    const options= { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today= new Date();
    const currentDay= today.toLocaleDateString("en-US", options);
    res.render("index.ejs", {day: currentDay, newListItems: newItems});
});

app.post('/submit', (req,res)=>{
    var newItem= req.body.newItem;
    newItems.push(newItem);
    res.redirect('/');
});

// app.post('/update/:id', (req, res) => {
//     const taskId = req.params.id;
//     if (taskId >= 0 && taskId < newItems.length) {
//         newItems[taskId].completed = !newItems[taskId].completed;
//         res.json({ success: true, message: 'Task status updated' });
//     } else {
//         res.status(404).json({ success: false, message: 'Task not found' });
//     }
// });

// app.delete('/delete/:id', (req, res) => {
//     const taskId = req.params.id;
//     if (taskId >= 0 && taskId < newItems.length) {
//         newItems.splice(taskId, 1);
//         res.json({ success: true, message: 'Task deleted' });
//     } else {
//         res.status(404).json({ success: false, message: 'Task not found' });
//     }
// });

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});