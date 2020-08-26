const strings = ['blah'];

exports.getAll = async (req, res) => {
  res.json(strings);
};

exports.addOne = async req => {
  console.log('added one');
  console.log(req.body.string);
};
