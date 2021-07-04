const express = require('express')
const path = require('path')
const users = require('./user') // ไปนำไฟล์ user
const app = express()


app.get('/' , (req,res) => {
    // res.send('Hello world') ส่งข้อมูล string
    res.sendFile(path.join(__dirname, 'public' , 'main.html'))
    // ส่งข้อมูลเป็น file html
})

//middleware ==> func. ที่ใช้ในการจัดการ request object(req),response object(res),next()

const logger = (req,res,next) => {
    console.log(req.protocol,'://',req.get('host'),req.originalUrl)
    next()
}
app.use(logger)

// var id = window.location.href
// var arrid = id.split(":")

// เลือก user ทั้งหมด
app.get('/user/id' , (req,res) => {
    res.json(users)
})


app.use(express.static(path.join(__dirname , 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('server is running on port' , PORT))
