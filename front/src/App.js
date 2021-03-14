import React from 'react'
import data from './Data'
import Product from './Components/Product'

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a href="/Home">HOME</a>
                <a href="/About">O NAS</a>
                <a href="/Contact">KONTAKT</a>
                <a href="/Shop">SKLEP</a>
            </div>
            <div>
                <img className="imageMadelineLogo" src="./images/Madeline-logo-slider.png" alt="Madeline"/> 
            </div>
            <div>
                <a href="/Cart">Cart</a>
                <a href="/SignIn">Sign In</a>
            </div>
        </header>
        
        <main>
            <div className="row center">   
              {data.products.map((product)=> (

                    <Product 
                        key={product._id} 
                        product={product}>
                    </Product>

                ))
              }
            </div>
        </main>
        <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
