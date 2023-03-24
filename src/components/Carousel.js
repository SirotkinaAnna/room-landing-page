
import CarouselInner from './CarouselInner'
function Carousel() {
    //const myCarousel = document.querySelector("#carouselExampleControls");

    return <div role="article" id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="false" data-wrap="false" data-interval="false" >
        <div className="carousel-inner">
            <div class="carousel-item active">
                <CarouselInner myClass='imgFirst'>
                    <h1>Discover innovative ways to decorate</h1>
                    <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
                </CarouselInner>
            </div>
            <div class="carousel-item">
                <CarouselInner myClass='imgSec'>
                    <h1>We are available all across the globe</h1>
                    <p>With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p>
                </CarouselInner>
            </div>
            <div class="carousel-item">
                <CarouselInner myClass="imgThird"><h1>Manufactured with the best materials</h1>
                    <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p>
                </CarouselInner>


            </div>
        </div>

    </div>

}
export default Carousel