import { popularProducts, galleries } from '../database.test';

import '/public/css/home-style.css'

const HomePage = () => {
  return (
    <>
        <div className="bg-img" id="home">
            <div className="title">
                <h1>Dev Coffee</h1>
            </div>
        </div>
        <article>
            <section className="popular" id="popular">
                <h2>Popular</h2>
                <div className="popular-menu">
                    {popularProducts.map(product => (
                    <div className="menu-container">
                        <img src={product.img} alt="" />
                        <div className="content-container">
                            <p className="name-menu">{product.name}</p>
                            <button className="price-menu">${product.price}</button>
                        </div>
                    </div>
                    ))}
                </div>
            </section>  
            <section className="about" id="about">
                <div className="about-content">
                    <img src='/assets/about.jfif' />
                    <div className="content">
                        <h2>About</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum odio dolores 
                            blanditiis architecto molestiae quo aspernatur. Aspernatur, quasi doloribus perferendis, 
                            laboriosam architecto repudiandae possimus quisquam distinctio commodi, reprehenderit ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum odio dolores 
                            blanditiis architecto molestiae quo aspernatur. Aspernatur, quasi doloribus perferendis, 
                            laboriosam architecto repudiandae possimus quisquam distinctio commodi, reprehenderit ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum odio dolores 
                            blanditiis architecto molestiae quo aspernatur. Aspernatur, quasi doloribus perferendis, 
                            laboriosam architecto repudiandae possimus quisquam distinctio commodi, reprehenderit ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum odio dolores 
                            blanditiis architecto molestiae quo aspernatur. Aspernatur, quasi doloribus perferendis, 
                            laboriosam architecto repudiandae possimus quisquam distinctio commodi, reprehenderit ipsa.
                        </p>
                    </div>
                </div>
            </section>
            <section className="gallery" id="gallery">
                <div className="gallery-container">
                    {galleries.map(gallery => (
                        <div className="gallery-content">
                            <img src={gallery.img} alt="" />
                        </div>
                    ))}
                </div>
            </section>
        </article>        
    </>
  );
}

export default HomePage;