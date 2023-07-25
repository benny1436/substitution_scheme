const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

function rot13(strs) {

    var new_str = ""

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for (var i = 0; i < strs.length; i++) {
        letters.forEach((letter,index)=>{
            //console.log(letter,letters[(index + 13) % 26])
            if(strs[i] === letter){
                new_str += letters[(index + 13) % 26]
            }
        })
    }

    return new_str;

};


app.get('/enc',(req, res)=>{
    res.render('index')
})

app.post('/enc',(req, res)=>{
    console.log(req)
    const text = req.body.text
    const result = rot13(text.toUpperCase())

    res.render('index',{result: `<h1 class="mt-4">Result: ${result}</h1>`, text: text})
})





app.listen(3000,(port)=>{
    console.log(`Server running at port ${3000}`)
})