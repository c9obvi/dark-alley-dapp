import { Container, createTheme, LinearProgress, TableContainer, 
TextField, ThemeProvider, Typography, 
TableHead, Table, TableRow, TableCell, TableBody, makeStyles} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { numberWithCommas } from './Banner/Carousel';

const CoinsTable = () => {
const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const history = useHistory()

    const { currency, symbol } = CryptoState();

    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList(currency));

        setCoins(data);
        setLoading(false);

    };

    console.log(coins);

    useEffect(() => {
        fetchCoins()
    }, [currency]);

    const darkTheme = createTheme({
        palette: {
            primary: {
            main: "#fff",
        },
        type: "dark",
     },
    });

    const handleSearch = () => {        
        return coins.filter((coin) => (
            coin.name.toLowerCase().includes(search) || 
            coin.symbol.toLowerCase().includes(search)
        ))
    }

const useStyles = makeStyles(() => ({
  row:{
      backgroundColor: "#16171a",
      cursor: "pointer",
       "&:hover": {
           backgroundColor: "#131111",
       },
      fontFamily: "Montserrat",
  },
  pagination:{
      "& .MuiPaginationItem-root": {
          color: "magenta"
      },
  },

}));

const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
        <Container style={{ textAlign: "center"}}>
           <Typography
            variant='h4'
            style={{
                margin: 18,
                fontFamily: "Montserrat"
            }}>
                Crypto Currency by Market Cap
            </Typography>
            <TextField 
            label="Search For a Crypto Asset.." 
            variant="outlined"
            style={{marginBottom: 20, width: "100%"}}
            onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer class="data-table">
                {
                    loading ? (
                        <LinearProgress style={{ backgroundColor: "magenta" }}/>
                    ) : (
                        <Table>
                               <TableHead style={{ backgroundColor: "magenta"}}>
                                <TableRow>
                                        {["coin", "Price", "24H Change",].map((head) => (
                                        <TableCell
                                            style={{
                                                color: "black",
                                                fontWeight: "700",
                                                fontFamily: "Montserrat",
                                                textAlign: "auto",
                                                size: "small",
                                            }}  
                                          key={head}
                                          align={head === "Coin" ? "" : "center"}
                                          >
                                              {head}
                                        </TableCell> ))}
                                </TableRow>
                            </TableHead>
                                <TableBody>
                                    {handleSearch()
                                    .slice((page - 1)*10,(page - 1)* 10 +10)
                                    .map((row) => {
                                        const profit = row.price_change_percentage_24h > 0;
                                        return (
                                        <TableRow 
                                             onClick={() => history.push('/coins/${row.id}')}
                                             className={classes.row}
                                             key={row.name}               
                                            >
                                            <TableCell 
                                                component="th" 
                                                scope="row"
                                                style={{
                                                    display: "flex",
                                                    gap: 5,
                                                }}
                                                >
                                                    <img 
                                                        src={row.image}
                                                        alt={row.name}
                                                        height="50"
                                                        style={{marginBottom: 10}}
                                                        />
                                                        <div
                                                        style={{ display: "flex", flexDirection: "column"}}
                                                        >
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontSize: 22,
                                                                }}
                                                            >
                                                                {row.symbol}
                                                            </span>
                                                            <span style={{ color: "darkgrey", fontSize:15}}>{row.name}</span>
                                                        </div>
                                            </TableCell>
                                            <TableCell
                                                align='ceneter' style={{textAlign:"center"}}>
                                                {symbol}{""}{numberWithCommas(row.current_price.toFixed(2  ))}
                                            </TableCell>
                                            <TableCell
                                             align='right'
                                             style={{
                                                 color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                 fontWeight: 500,
                                                 textAlign: "center"
                                             }}
                                            >
                                                {profit && "+"}
                                                {row.price_change_percentage_24h.toFixed(2)}%
                                            </TableCell>
                                            {/* <TableCell 
                                            align='center' style={{textAlign:"center"}}>
                                            {symbol}{""}
                                            {numberWithCommas(
                                                row.market_cap.toString().slice(0, -6)
                                            )}
                                            M
                                            </TableCell> */}
                                        </TableRow>
                                        )
                                    })}
                                </TableBody>
                        </Table>
                    )}
                </TableContainer>
                <Pagination
                    style={{
                        padding: 20,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center"
                    }}
                    classes={{ul: classes.pagination }}
                    count={(handleSearch()?.length/10).toFixed(0)}
                onChange={(_, value) => {
                    setPage(value);
                    window.scroll(0, 450);
                }}
                />
            </Container>
        </ThemeProvider>
    )
};

export default CoinsTable;
// #EEBC1D gold color for table head