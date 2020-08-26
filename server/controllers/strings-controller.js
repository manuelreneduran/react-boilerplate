const strings = [];

exports.getAll = async (req, res) => {
  setTimeout(() => {
    res.json(strings);
  }, 3000);
};

exports.addOne = async (req, res) => {
  setTimeout(() => {
    strings.unshift(req.body.data.string);
    res.status(200).send('success');
  }, 2500);
};
