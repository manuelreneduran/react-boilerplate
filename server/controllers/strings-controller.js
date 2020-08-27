var strings = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mimicUsingDB = (ms, strings) => {
  //meant to mimic random error events
  const randomInt = getRandomInt(0, 10);
  const randomDBError = randomInt < 2;
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      return randomDBError ? reject(new Error('DB Error')) : resolve(strings);
    }, ms);
  });
};

exports.getAll = (req, res) => {
  mimicUsingDB(1250, strings)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).send(err));
};

exports.addOne = (req, res) => {
  mimicUsingDB(1250, strings)
    .then(strings => {
      strings.unshift(req.body.data.string);
      return strings;
    })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).send(err));
};
