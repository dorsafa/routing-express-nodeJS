const express = require ('express')
const app = express()
app.listen(3000, (err)=>{
    if(err) console.log(err)
    else console.log('server is running on port 30000')
})

// app.use(express.static(__dirname+'/public'))
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/home.html')
})
app.get('/our-services', (req,res) => {
    res.sendFile(__dirname + '/public/our-services.html')
})
app.get('/contact', (req,res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

let dateNow = new Date().getHours()
console.log('date now :',dateNow)

app.get('/', (req,res) => {
    if (dateNow>17 && dateNow<8) {
        res.sendFile(__dirname + '/public/notOpen.html')
    } else {
        res.sendFile(__dirname + '/public/home.html' )
    }
})