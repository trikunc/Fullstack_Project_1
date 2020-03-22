const express = require('express')
const router = express.Router()

// All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New Authors Route
router.get('/new', (req, res) => {
    res.render('authors/new')
})

// Create Authors Route
router.get('/', (req, res) => {
    res.send('Create')
})

module.exports = router