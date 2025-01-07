var express = require('express');
var router = express.Router();
var Book = require('../models/Book');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Book.find({}, (err, user) => {
    if (err) return res.json(err);
    res.status(200).json(user);
  });
  res.status(200).json();
});
router.get('/:id', (req, res, next) => {
  Book.findById(req.params.id, (err, user) => {
    if (err) return res.json(err);
    res.status(200).json(user);
  });
});
router.post('/', (req, res, next) => {
  Book.create(req.body, (err, user) => {
    if (err) return res.json({ ms: err });
    res.status(200).json(user);
  });
});
router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  Book.findByIdAndUpdate(id, (err, user) => {
    if (err) return res.json(err);
    res.status(200).json(user);
  });
});
router.get('/:id/delete', (req, res, next) => {
  Book.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) return res.json(user);
    res.status(201).json(user);
  });
});

module.exports = router;
