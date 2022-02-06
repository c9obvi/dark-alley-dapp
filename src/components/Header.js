import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CryptoState } from '../CryptoContext';
import { HashLink as Link } from 'react-router-hash-link';


const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "magenta",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
        
    },
    xButton: {
        color: "gold",
        fontWeight: "bold",
        margin: -25,

    }
    // exchange: {
    //     flex: 1,
    //     color: "white",
    //     fontFamily: "Montserrat",
    //     fontWeight: "bold",
    //     cursor: "pointer",
    // }
}))

const Header = () => {

    const classes = useStyles();

    const history = useHistory();

    const { currency, setCurrency } = CryptoState();

    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    return( 
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container >
                <Toolbar>
                    <Typography 
                    onClick={() => history.push('/')}
                    className={classes.title}
                    variant='h4'
                    style={{
                        marginTop: 1,
                        marginBottom: 10,
                        paddingTop: 20,
                        fontFamily: "Montserrat",
                    }}>
                    Dark Alley
                    </Typography>
                    <Typography 
                    onClick={() => history.push('/')}
                    className={classes.exchange} 
                    variant='subtitle2'
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: "light",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                        cursor: "pointer"
                    }}> 
            
            <Link smooth to={'/#exolix'}  style={{
                            display: "flex",
                            width: "100%",
                            height: 40,
                            marginLeft: "14%",
                            color: "gold",
                            paddingTop: "45px",
                            position: "relative",
                            left: "12px"
                }}>
                 NON-KYC Exchange
            </Link>
          
                </Typography>
                </Toolbar>

                <Select variant='outlined'
                        style={{
                            position: "absolute",
                            top: "5px",
                            right: "12px",
                            display: "flex",
                            width: 100,
                            height: 40,
                            marginLeft: "80%",
                            marginBottom: 15,
                }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)} >
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={"CAD"}>CAD</MenuItem>
                </Select> 

            </Container>
        </AppBar>
        </ThemeProvider>
    )
};

export default Header;
