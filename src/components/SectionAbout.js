import firstImage from '../images/image-about-dark.jpg';
import secondImage from '../images/image-about-light.jpg'
function SectionAbout() {
    return <div className='container-fluid m-0 p-0' id="about"><div className="row about-section d-flex flex-column flex-md-row m-0 p-0">
        <div className="col m-0 p-0">
            <img src={firstImage} alt="" className='d-block h-100 w-100' />
        </div>
        <div className="col-md-5 px-5 py-3 mt-4 p-md-5 px-md-5 my-md-auto">
            <h2 className='myHeader text-uppercase fw-bold mb-4'>About our furniture</h2>
            <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <div className="col  m-0 p-0">
            <img src={secondImage} alt="" className='d-block h-100 w-100' />
        </div>
    </div></div>
}
export default SectionAbout;