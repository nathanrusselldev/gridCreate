const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
      res.render('homepage', {
        logged_in: req.session.logged_in
      });
  });

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/signup', (req, res) => {
  res.render('userCreate')
})

router.get('/profile/:id', async (req, res) => {
  
})

router.get('/createGrid', (req, res) => {
  res.render('createGrid')
})
router.get('/grid', (req,res) => {
  res.render('grid')
})

module.exports = router;

