var Producer = require('./producerStream.js');
var Consumer = require('./consumerStream.js');

var producer = new Producer();
var consumer = new Consumer();

producer.pipe(consumer);
