import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));

const data = [
    {
        fname: "Jujutsu Kaisen",
        genre: "Action",
        power: "Martial Arts, Spirits",
        protagonist: "Yuji Itadori",
        antagonist: "Sukuna",
        evil_power: "Curse Energy",
        seasons: 3,
        rank: 2,
        name : "one"
    },
    {
        fname: "Demon Slayer",
        genre: "Action, Thriller",
        power: "Natural Elements, Sword Techniques",
        protagonist: "Kamado Tanjiro",
        antagonist: "Muzan",
        evil_power: "Blood Demon Art",
        seasons: 4,
        rank: 1,
        name : "two"
    },
    {
        fname: "One Punch Man",
        genre: "Action, Comedy",
        power: "Superhuman Powers",
        protagonist: "Saitama",
        antagonist: "Evil God",
        evil_power: "Random",
        seasons: 3,
        rank: 3,
        name : "three"
    }
];

app.use(express.static("public"));


let values = null;

app.get("/" , (req,res)=>{
    res.render("index.ejs" , {Data : values});
})

app.post("/Home" , (req,res)=> {
    switch (req.body.name) {
        case "one":
            values = data[0];
            break;
        case "two":
            values = data[1];
            break;
        case "three":
            values = data[2];
    }
    res.redirect("/");
});

app.listen(port , ()=>{
    console.log(`The server is activated at the port  ${port}`)
});