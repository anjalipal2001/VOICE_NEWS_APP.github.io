import React from 'react';
import { Grid, Grow, Typography} from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';



// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
 import CardActions from '@material-ui/core/CardActions';
 import CardContent from '@material-ui/core/CardContent';
 import CardMedia from '@material-ui/core/CardMedia';
// //  import Button from '@material-ui/core/Button';
//  import Typography from '@material-ui/core/Typography';
 
const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' ,image:'https://static8.depositphotos.com/1008504/984/i/600/depositphotos_9843276-stock-photo-the-word-news.jpg'},
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment,  Sports, Technology', text: 'Give me the latest Technology news', image:`https://mir-s3-cdn-cf.behance.net/project_modules/disp/11311d55602741.560991265fd22.jpg` },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, ...', text: 'What\'s up with PlayStation 5',image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCD52RzrdZ3B2HkUys_C1HQPG_ve1MdMB0KQ&usqp=CAU` },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time...', text: 'Give me the news from CNN', image:`https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/1280px-BBC_News.svg.png`}
];
const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      
       <Grow in>
      
           
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
      //        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
      //         <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
      //           <Typography variant="h5" component="h5">{infoCard.title}</Typography>
      //           {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
      //           <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
      //         </div>
      //       </Grid> 

            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
            <CardContent  className={classes.card}>
            <CardMedia
                className={classes.media}
                 image={infoCard.image}
                
              />
            

                <Typography gutterBottom variant="h5" component="h4">
                {infoCard.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {infoCard.text}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {infoCard.info}
                </Typography>
              </CardContent>
              </Grid>
             
          ))};  


          
        </Grid> 
      </Grow>

         );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
