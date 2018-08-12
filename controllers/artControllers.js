const Art = require('../models/art');

exports.index = (req, res) => {
  Art.find()
    .then(art => res.status(200).send(art))
    .catch(err => res.status(500).send(err));
};

exports.show = (req, res) => {
  Art.findById({
    _id: req.params.id,
  })
    .then(art => res.status(200).send(art))
    .catch(err => res.status(500).send(err));
};

exports.create = (req, res) => {
  console.log(req.body.file);
  if (!req.files) return res.status(500).send('No file were uploaded.');

  let image = req.files.file;

  let uploadLocation = `../public/art/${image.name}`;

  image.mv(uploadLocation, () => {
    err ? res.status(500).send(err) : res.send('File uploaded');
  });

  Art.create({
    artName: req.body.artName,
    imgURL: uploadLocation,
    description: req.body.description,
    price: req.body.price,
    artist: {
      name: req.body.name,
      born: req.body.born,
      died: req.body.died,
      nationality: req.body.nationality,
    },
  })
    .then(() => res.status(200).send({ message: 'art added' }))
    .catch(err => res.status(500).send(err));
};

exports.update = (req, res) => {
  Art.update(
    {
      _id: req.params.id,
    },
    {
      artName: req.body.artName,
      imgURL: req.body.imgURL,
      description: req.body.description,
      price: req.body.price,
      artist: {
        name: req.body.name,
        born: req.body.born,
        died: req.body.died,
        nationality: req.body.nationality,
      },
    },
  )
    .then(() => res.status(200).send({ message: 'art updated' }))
    .catch(err => res.status(500).send(err));
};

exports.delete = (req, res) => {
  Art.deleteOne({
    _id: req.params.id,
  })
    .then(() => res.status(200).send({ message: 'art deleted' }))
    .catch(err => res.status(500).send(err));
};
