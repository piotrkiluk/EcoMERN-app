import data from './Data.js'

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

              {data.products.map(({name, _id, image, price, rating} )=> (

                <div key={_id} className="card">
                    <a href={`/product/${_id}`}>
                        <img 
                          className="medium" 
                          src={image} 
                          alt={name}
                        />
                    </a>
                    <div className="card-body">
                        <a href={`/product/${_id}`}>
                            <h2>{name}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">{price} zł</div>
                    </div>
                </div>

                ))
              }

            </div>
        </main>
        <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
