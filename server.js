var app = require('express')(); 
app.set('port',8080)

var reactapi = require('./api/connect')

app.get('/', (req, res) =>{  res.send(' / 루트요청 있었음'); })
app.use('/api',reactapi)

var time = Date.now();
app.listen(app.get('port'), () =>{
    console.log(time, '콘솔에서 시간으로 확인해보면 바로 알게됨');
})