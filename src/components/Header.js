import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, 
    Button, Toolbar, Typography, Icon } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CryptoState } from '../CryptoContext';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';




const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "magenta",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
        marginLeft: -18,
        
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
                        marginTop: 5,
                        marginBottom: 30,
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
                        cursor: "pointer",
                    }}> 
            
          
                </Typography>
                </Toolbar>
                <Button variant="contained" color="primary" href="/#exolix"  style={{
                            position: "absolute",
                            top: "50px",
                            right: "25px",
                            width: 120,
                            height: 50,
                            paddingBottom: 15,
                            textAlign: "center",
                            paddingTop: 15,
                            marginTop: 10,
                            color: "black",
                            backgroundColor: "gold",
                            fontWeight: "bold"                     
                }}>
                NON-KYC Exchange!
                </Button>
                <Select variant='outlined'
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "25px",
                            display: "flex",
                            width: 100,
                            height: 40,
                            marginLeft: "80%",
                            marginBottom: 25,
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
