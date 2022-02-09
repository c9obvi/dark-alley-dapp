import { Container, makeStyles, Typography } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';
import React from 'react';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner:{
        backgroundImage: "url(./banner3.jpg)",
        backgroundPosition: "center"
    },
    bannerContent: {
        height: 300,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
        alignItems: "center"

    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}));

const Banner = () => {

  const classes = useStyles()
    
  return <div className={classes.banner}>
      <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography 
                    variant='h3'
                    style={{
                        fontWeight: "bold",
                        marginBottom: 5,
                        fontFamily: "Montserrat",
                    }}> 
                        CRYPTO, DeFi, Metals & NFTs
                </Typography>
                <Typography 
                    variant='subtitle2'
                    style={{
                        color: "white",
                        fontWeight: "light",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}> 
                        All of your degeneracies in one place
                </Typography>
            </div>
            <Carousel/>
      </Container>


  </div>;
};

export default Banner;
