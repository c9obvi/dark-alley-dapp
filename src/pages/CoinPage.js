import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinPage = () => {
   const { id } = useParams();
   const [coin, setcoin] = useState();

   const {currency, symbol} = CryptoState();

    const fetchCoin = async () => {
        const { data } = await axios.get(SingleCoin(id));

        setcoin(data);
    };

console.log(coin);

useEffect(() => {
    fetchCoin();
}, []);

    return (<div> Coin Info! </div>);
};

export default CoinPage;
