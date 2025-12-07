const HeroSection = () => {
 return(
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERO TO HELP 
                YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERO TO HELP 
                YOU WITH OUR SHOES.
            </p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Catogery</button> 
            </div>

            <div className="shopping">
                 <p>Also Avaliable On</p>
            </div>

            <div className="brand-icons">
               <img src="public/images/amazon-logo.svg" alt="amazon-logo" />
               <img src="public/images/flipkart-logo.svg" alt="flipkart-logo" />
            </div>

        </div>

        <div className="hero-image ">
            <img src="public/images/shoes.png" alt="shoes-image" />
        </div>
    </main> 
    );
};

export default HeroSection;