
const http = require('http')

const server = http.createServer((req, res)=>{
//console.log(req)
if(req.url === '/'){
    res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end('This is the about page')
}
res.end(`
<h1>OOPSS!
</h1>
<p>We cant seem to find the page you are looking for</p>
<a href = "/">Back home page</a>
`)
})


server.listen(5000)