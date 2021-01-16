import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux'
import ProductModel from '../models/ProductModel'
import PostModel from '../models/PostModel'
import Carousel from '@brainhubeu/react-carousel';



const Home = (props) => {


    return (
        <div className="row">

            <div className="row">
                <div className="banner">
                    <div className="banner-search" >
                        <h1>Have a good exparience</h1>
                        <div className="banner-searchBar" >
                            <input type="text" placeholder="Search..." />
                            <SearchIcon
                                className="icon"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row poster-banner">
                <img src="/images/pet_banner.webp" alt="pet_banner" />
                <img src="/images/pet_banner.webp" alt="pet_banner" />
            </div>

            <div className="row carousel-a">
                <div className="carousel-inner">
                    <h4>How to order from Future Shop ?</h4>
                    <Carousel

                        autoPlay={3000}
                        animationSpeed={1000}
                        infinite
                    >
                        <img src="/images/slide-2.webp" />
                        <img src="/images/slide-1.webp" />
                        <img src="/images/slide-3.webp" />
                    </Carousel>
                </div>
            </div>

            <div className="row carousel-a">
                <div className="carousel-inner">
                    <h4>products</h4>
                    <Carousel
                        arrows
                        slidesPerPage={2}
                        animationSpeed={1000}
                        infinite
                    >
                        {props.products.map(product=>(
                            <div className="col-md-6">
                                {<ProductModel product={product} />}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="row carousel-a">
                <div className="carousel-inner">
                    <h4>Posts</h4>
                    <Carousel
                        arrows
                        slidesPerPage={2}
                        animationSpeed={1000}
                        infinite
                    >
                        {props.posts.map(post=>(
                            <div className="col-md-6">
                                {<PostModel post={post}/>}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

        </div>
    );
}

const mapToStateFromProps = state => ({
    posts: state.posts,
    products: state.products
})

export default connect(mapToStateFromProps)(Home);

