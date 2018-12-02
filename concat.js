const cc = require('concat-stream')
process.stdin.pipe(cc((body) => {
	console.log(body.toString().split('').reverse().join(''));
}))