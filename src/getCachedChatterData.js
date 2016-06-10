import cacheChatterData from './cacheChatterData';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const id = opts.id;
      const item = cacheChatterData.get(id);
      opts.cacheChatterData = item;
      resolve(opts);
    })
}
