const fs= require('fs');
const path="./dir.js";

const fsReadFile = fs.createReadStream(path);
console.log(fsReadFile);
/*
{
_readableState : {
      objectMode: false,
      highWaterMark: 65536,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: null,
      ended: false,
      endEmitted: false,
      reading: false,
      sync: true,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
  readable: true,
  domain: null,
  _events: { end: [Function] },
  _eventsCount: 1,
  _maxListeners: undefined,
  path: './dir.js',
  fd: null,
  flags: 'r',
  mode: 438,
  start: undefined,
  end: Infinity,
  autoClose: true,
  pos: undefined,
  bytesRead: 0
}
*/

/*有的方法*/
console.log(fsReadFile.__proto__);//ReadStream
console.log(fsReadFile.__proto__.__proto__);//Readable
console.log(fsReadFile.__proto__.__proto__.__proto__);//Stream
console.log(fsReadFile.__proto__.__proto__.__proto__.__proto__);//EventEmitter
console.log(fsReadFile.__proto__.__proto__.__proto__.__proto__.__proto__);//Object
/*
{
  open: [Function],
  _read: [Function],
  _destroy: [Function],
  close: [Function]
}

*/
