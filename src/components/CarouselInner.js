import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { HiArrowLongRight } from 'react-icons/hi2';

function CarouselInner({ myClass, children }) {

    return <div className='row m-0 p-0 '>
        <div className='col-md-7 m-0 p-0 position-relative' id={myClass}>

            <div className='d-block d-md-none position-absolute bottom-0 end-0'>
                <button class="btn btn-dark prevNext rounded-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <AiOutlineLeft />
                </button>
                <button class="btn btn-dark prevNext rounded-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <AiOutlineRight />
                </button>
            </div>

        </div>
        <div className='col-md-5 myRow divTwo d-flex flex-column m-0 p-0'>
            <div className="mx-auto mb-5 mb-md-0 mt-md-5 innerText">
                {children}
                <button className="btn btn-outline-light m-0 p-0 myButton border-0">SHOP NOW <HiArrowLongRight /></button>
            </div>
            <div className='d-none d-md-block mt-auto w-100'>
                <button class="btn btn-dark prevNext rounded-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <AiOutlineLeft />
                </button>
                <button class="btn btn-dark prevNext rounded-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <AiOutlineRight />
                </button></div>
        </div></div>
}
export default CarouselInner;