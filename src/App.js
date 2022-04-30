import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Coin from './components/coin';
import Clock from 'react-live-clock';

function App() {

  const [listOfCoins, setListOfCoins] = useState([]);
  
  const [searchword, setSearchword] = useState("");


  useEffect (() =>{
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response)=> {
        console.log(response.data)
        setListOfCoins(response.data.coins);
        
        
      }
    );
  }, []);


  const filteredCoins = listOfCoins.filter((coin) =>{
    return coin.name.toLowerCase().includes(searchword.toLowerCase());

    
  });


  return (
    <div className="App">
      
      
      <div className="cryptoHeader">

        <div className='title'>
          <h1>Real-time Cryptocurrency </h1>
        </div>
        
        <div className='timer1'> 
          <Clock
            format={'DD MMMM YYYY, dddd, h:mm A '}
            timezone={'America/Chicago'}
            ticking={true}/>
           (US)
        </div>
        
        <div className='timer2'>           
          <Clock
            format={'DD MMMM YYYY, dddd, h:mm A '}
            ticking={true}/>
          (MY)
         </div>

        <input type="text" placeholder="Search for coin..." 
          onChange= {(event) => setSearchword(event.target.value)}>
        </input>

      </div>

      
      <div className="cryptoContent">
        {filteredCoins.map((coin) => {

          return (
            <Coin 
              rank= {coin.rank}
              name = {coin.name} 
              icon={coin.icon} 
              price = {coin.price} 
              symbol = {coin.symbol} 
              website = {coin.websiteUrl}
              twitter = {coin.twitterUrl}
              details ={coin.exp[0]}
            />
      

          );
        })}
        
        </div>
        <div className='projectname'>
        © Tao project 2022
        </div>
        
    </div>

  );
}

export default App;
