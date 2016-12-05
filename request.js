'use strict';
const http = require('http');

export default function request(url) {
  return new Promise(resolve => {
    http.get({ path: url }, res => {
      let data = '';
      res.on(data, _data => data += data);
      res.on('end', () => resolve(data));
    })
  })
}