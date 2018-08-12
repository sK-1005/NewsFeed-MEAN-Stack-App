const router = require('express').Router();

const News = require('../models/news');

router.post('/', (req, res, next) => {
    
//  console.log(req.body);
    let news = new News();
    
    news.id = req.body.id;
    news.title = req.body.title;
    news.user = req.body.user;
    news.time = req.body.time;
    news.time_Ago = req.body.time_ago;
    news.comments_count = req.body.comments_count;
    news.url = req.body.url;
    news.domain = req.body.domain;
    news.points = req.body.points;
    
    News.findOne({title: req.body.title}, (err, existingNews) => {
        if(existingNews){
            res.json({
                success: false,
                message: 'News Already present'
            });
        }else{
            news.save();
    
            res.json({
               success: true,
               message: 'News saved to DataBase'
            });
        }
    });
});

router.get('/', (req, res, next) => {
    
    News.find({}, (err, existingFeeds) => {
       res.json({
           success: true,
           existingFeeds: existingFeeds
            }); 
        });
    });

module.exports = router;