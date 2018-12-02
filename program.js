// Ej 2
//const fs = require('fs')
//fs.createReadStream(process.argv[2]).pipe(process.stdout);

// Ej 3
//process.stdin.pipe(process.stdout);

// Ej 4
//const th = require('through2');
//const stream = th(write, end);
//
//function write(buffer, encoding, next){
//	this.push(buffer.toString().toUpperCase());
//	next();
//}
//
//function end(done){
//	done();
//}
//
//process.stdin.pipe(stream).pipe(process.stdout);

// Ej 5
//var split = require('split');
//var through2 = require('through2');
//var lineN = 0;
//process.stdin
//    .pipe(split())
//    .pipe(through2(function (line, _, next) {
//    	if(lineN %2 == 0)
//        	console.log(line.toString().toLowerCase());
//        else 
//        	console.log(line.toString().toUpperCase());
//        lineN++;
//        next();
//    }))
//;

// Ej 7
//const http = require('http')
//const th = require('through2')
//
//function write(buffer, _, next){
//	this.push(buffer.toString().toUpperCase());
//	next();
//}
//const server = http.createServer((req,res) => {
//	if(req.method == 'POST'){
//		req.pipe(th(write))
//			.pipe(res)
//	}
//	else
//		res.end('Método no permitido')
//});
//server.listen(process.argv[2])

// Ej 8:
//const request = require('request')
//const r = request.post('http://localhost:8099')
//process.stdin.pipe(r).pipe(process.stdout)

// Ej 9:
//var ws = require('websocket-stream');
//var stream = ws('ws://localhost:8099');
//stream.write('hello\n');

// Ej 10:
