var strings = ['blah'];

exports.getAll = async (req, res) => {
  res.json(strings);
};

exports.addOne = async req => {
  console.log('added one');
  strings.push(req.body.data.string);
  console.log(strings);
};
