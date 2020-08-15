import React from 'react'
import '../css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__banner" src="https://media1.faz.net/ppmedia/aktuell/wirtschaft/1810603092/1.5693605/top1_page_wide-retina/konsum-unter-regenbogen.jpg" alt="" />
            {/* Product id,title,price,rating,image */}
            <div className="home__products">
                <Product
                    id="12321341"
                    title="Nintendo Switch"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
                <Product
                    id="12321341"
                    title="Nintendo SwitchIJU THITHITHTOITI"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
                <Product
                    id="12321341"
                    title="Nintendo Switch"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
                <Product
                    id="12321341"
                    title="Nintendo Switch NDFJNDF"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
                <Product
                    id="12321341"
                    title="Nintendo Switch NFDGNIJGJKDFGDFG"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
               
                <Product
                    id="12321341"
                    title="Nintendo Switch"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
                <Product
                    id="12321341"
                    title="Nintendo Switch MKLDSFK"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
                <Product
                    id="12321341"
                    title="Nintendo Switch NKJDNJDKFS"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
                <Product
                    id="12321341"
                    title="Nintendo Switch NCJKSDFNJDSF"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
                <Product
                    id="12321341"
                    title="Nintendo Switch  NC,XNCJKZXNCJKXZC"
                    price={448}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg"
                />
            </div>


        </div>
    )
}

export default Home
