import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import LinkShow from "./LinkShow";

import Offcanvas from 'react-bootstrap/Offcanvas';
function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <nav className="position-relative">
        <div className="position-absolute w-100">
            <div className="d-flex mt-4 mt-md-0">
                <div className="row d-md-none w-100 m-0 align-items-center">
                    <div className="col">

                        <button onClick={handleShow} className="my-2 btn bg-none text-light fs-3 px-4 me-3">
                            <AiOutlineMenu />
                        </button>
                    </div>
                    <div className="col  m-0 p-0 d-flex ">
                        <p className=" text-center w-100 h-100 m-auto fs-2 text-light">room</p>
                    </div>
                    <div className="col "></div>
                </div>
                <div className="d-none d-md-flex m-md-5"> <div className="ps-md-3 pe-md-3 fs-3">room</div>

                    <LinkShow myUrl="#about">home</LinkShow>
                    <LinkShow myUrl="#about">shop</LinkShow>
                    <LinkShow myUrl="#about">about</LinkShow>
                    <LinkShow myUrl="#about">contact</LinkShow>

                </div>


                <Offcanvas show={show} onHide={handleClose} placement="top" restoreFocus={false} style={{ height: '15%' }}
                >
                    <Offcanvas.Body >
                        <div className="row w-100 align-items-center h-100">
                            <div className="col-3">
                                <button className="btn  offButton" onClick={handleClose}><AiOutlineClose /></button></div>
                            <div className="col d-flex justify-content-end">
                                <a href="#about" className="offcanvas-link" onClick={handleClose}>home</a>
                                <a href="#about" className="offcanvas-link" onClick={handleClose}>shop</a>
                                <a href="#about" className="offcanvas-link" onClick={handleClose}>about</a>
                                <a href="#about" className="offcanvas-link" onClick={handleClose}>contact</a></div></div>
                    </Offcanvas.Body>
                </Offcanvas>

            </div>
        </div>
    </nav>
}
export default Navbar;