const express = require('express');

const app = express()

app.use(express.json())

let mangas = [
    {
        id:  1,
        price: 100,
        name: 'jujustu kaisen',
    },
    {
        id:  2,
        price: 500,
        name: 'demon slayer',
    },
    {
        id:  3,
        price: 1000,
        name: 'boku dake ga inai machi',
    },
    {
        id:  4,
        price: 2000,
        name: 'Osaka',
    },
    
]
app.get('/mangas',(req,res)=>{
    if(req.query.show=="all"){
        return res.json(mangas)
    }
    if(req.query.price == "500"){
        const result = mangas.filter((manga)=>manga.price<=500)
        console.log(result)
        return res.json(result)
    }


    if(req.query.price == "1500"){
        const result = mangas.filter((manga)=>manga.price<=1500)
        return res.json(result)
    }
    if(req.query.name='jujustu kaisen'){
        console.log(req.query.name)
        const result = mangas.filter((manga)=>manga.name == 'jujustu kaisen')
        return res.json(result)
    }
    console.log(req.query)
    return res.json(mangas)
})

app.post('/mangas', (req,res)=>{
    const manga = req.body
    mangas.push(manga)

    res.json(mangas)
})

app.listen(8000,()=>{
    console.log('server is listening')
})