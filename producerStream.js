// produces streamable objects of numbers
var util = require('util');
var Readable = require('stream').Readable;
util.inherits(produceStream, Readable);

// our readable stream that pushes out objects
function produceStream(options) {
	if (!options) {
		options = {};
	}
	options.objectMode = true;
	Readable.call(this, options);
	this._i = 0;
}

module.exports = produceStream;

// produces streamable objects of numbers
produceStream.prototype._read = function() {

	if(this._i < 10) {
		this.push( {number: this._i} );
		this._i++;
	}
	else { this.push(null); }
}
