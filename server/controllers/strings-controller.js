const strings = [];

exports.getAll = async (req, res) => {
  res.json(strings);
};

exports.addOne = async (req, res) => {
  strings.unshift(req.body.data.string);
  res.status(200).send('success');
};
