import  express from 'express';

const app = express();
app.use(express.json())

//rota principal
const cliente = [
    {id: 1,nome: "Bruno",cpf: "123.456.789-11"},
    {id: 2,nome: "Renato",cpf: "123.456.789-11"},
]

const funcionarios = [
    {id: 1,nome: "Lucas",cpf:"123.456.789-17"},
    {id: 2,nome: "Pedro",cpf:"123.456.789-19"}
]



app.get('/', (req,res)=> {
    res.status(200).send("Pagina Inicial")
})


app.post('/cliente', (req,res) =>{
    cliente.push(req.body)
    res.status(200).send("Cliente cadastrado com sucesso!")
})

app.get('/cliente', (req,res) =>{
    res.status(200).json(cliente)
})

app.post('/funcionarios', (req,res) =>{
    funcionarios.push(req.body)
    res.status(200).send("Funcionario cadastrado com sucesso!")
})

app.get('/funcionarios', (req,res)=> {
    res.status(200).json(funcionarios)
})


export default app

