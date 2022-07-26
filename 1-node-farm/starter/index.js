const fs = require("fs");
const http = require("http");
const url = require("url");

///////////////////////////////////
// FILES

// Blocking Code
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("The file has been written!");

// Non-Blocking Code
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     if(err) return console.log("Error: There Was an Explosion!");

//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         console.log(data2);
//         fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//             console.log(data3);

//             fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//                 console.log("Your file has been written.");
//             });
//         });
//     });
// });

// console.log("We will read the file!");


//////////////////////////////////
// SERVER

const APIString = fs.readFileSync("./dev-data/data.json", "utf-8");
const APIObject = JSON.parse(APIString);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/" || pathName === '/overview')
    {
        res.end("This is the OVERVIEW");
    }
    else if (pathName === "/product")
    {
        res.end("This is the PRODCUT");
    }
    else if (pathName === "/api")
    {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(APIString);
    }
    else
    {
        res.writeHead(404, {
            "Content-Type": "text/html",
            "my-own-header": "nice-header"
        });
        res.end("<h1>This page could not be found!</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
});