//Improts
const express = require('express')
const express= express ()
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//AddEventList
menu.addEventListener('click',function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
})

//Static Files
app.use(static('public'))
app.use('/css',static(__dirname + 'public/css'))
app.use('/js',static(__dirname +'public/js'))
app.use('/img',static(__dirname + 'publuc/img'))

// Set Views
app.set('views', './views')
app,set('views engine', 'ejs')

app.get('',(req, res) => {
    res.render('index', { text:'This is EJS' })
})

app.get('/about',(req, res) => {
    res.render('about', { text:'About Page' })
})