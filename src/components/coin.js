import React from 'react';

function Coin({name, icon, price, symbol, website,rank, twitter,details}) {
    

    return (
        <div className='coin'>
            <h1>{name}</h1>
            <a href= {website} target="_blank" rel='noreferrer'><img src={icon} alt='coins-icon' /></a>
            
            <h3>Rank: {rank}</h3>
            <h3>Price: {price}</h3>
            <h3>Symbol: {symbol}</h3>
            <div className='icon'>
                <a href= {twitter} target="_blank" rel='noreferrer'> 
                    <img className='twittericon' alt='twitter-icon'
                        src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'/>
                </a>        
                <a href= {details} target="_blank" rel='noreferrer'> 
                    <img className='detailsicon' alt='details-of-the-coins'
                        src='https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png'/>
                </a>

            </div>
            

            
        </div>
    )
}

export default Coin;
