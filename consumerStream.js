// our writeable stream that consumes objects
var stream = require('stream');
var util = require('util');

function consumeStream (options) {
	if (!options) {
		options = {};
	}
	options.objectMode = true;
	stream.Writable.call(this, options);
}
util.inherits(consumeStream, stream.Writable);

consumeStream.prototype._write = function (chunk, encoding, done) {
	// chunk.number gets incremented
	++chunk.number;
	console.dir(chunk);
	done();
};
module.exports = consumeStream;
