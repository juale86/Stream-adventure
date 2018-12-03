var spawn = require('child_process').spawn
var dup = require('duplexer2')

module.exports = function(cmd, args){
	var command = spawn(cmd, args);
	return dup(command.stdin, command.stdout);
}