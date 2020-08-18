import React ,{useState,useEffect} from 'react'
import '../css/Home.css';
import Product from './Product';
import {db}  from '../firebase';

function Home() {

    const [products, setProducts] = useState([]);
    // Runs code in specific conditions   
    useEffect(() => {
        db.collection('products').onSnapshot(snapshot =>{
            setProducts(snapshot.docs.map(doc=>doc.data()));
        })
    }, []);

    return (
        <div className="home">
            <img className="home__banner" src="https://media1.faz.net/ppmedia/aktuell/wirtschaft/1810603092/1.5693605/top1_page_wide-retina/konsum-unter-regenbogen.jpg" alt="" />
            {/* Product id,title,price,rating,image */}
            <div className="home__products">
                {
                    products.map(product =>
                        (<Product
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            imgUrl={product.imgUrl}
                        />))

                }
            </div>
            

        </div>
    )
}

export default Home
