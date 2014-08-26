var stream = require('stream');
var util = require('util');

// our writeable stream that consumes objects
function consumeStream (options) {
	if (!options) {
		options = {};
	}
	options.objectMode = true;
	stream.Writable.call(this, options);
}
util.inherits(consumeStream, stream.Writable);
consumeStream.prototype._write = function (chunk, encoding, done) {
	console.log(chunk);
	done();
};
module.exports = consumeStream;
