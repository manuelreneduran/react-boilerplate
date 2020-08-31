const strings = [];

const mimicUsingDB = (ms, strings) =>
  new Promise(function(resolve) {
    setTimeout(() => resolve(strings), ms);
  });
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
