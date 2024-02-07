let insert=require("./insert");
let update=require("./update");
let remove=require("./delete");
let {searchAll,searchById}=require("./search");
let express=require("express");
let app=express();
var cors = require('cors');


app.listen(5000);
app.use(cors());
app.use(express.json());

  


app.get("/",async (req,resp) => {
    let data=await searchAll();
    resp.send(data);
});
app.get("/:id",async (req,resp) => {
    let data=await  searchById(req.params.id);
    resp.send(data);
});

app.post("/", async (req,resp) => {
    console.log('##inside post apis')
    let data=await insert(req.body);
    resp.send(data);
});

app.put("/:id", async (req,resp) => {
    let result=await update(req.params.id,req.body);
    resp.send(result);
});

app.delete("/:id",async (req,resp) => {
    if(!req.params.id)
    {
        resp.send(`invalid id : ${id}`);
    }
    let data=await remove(req.params.id);
    resp.send(data);
});

