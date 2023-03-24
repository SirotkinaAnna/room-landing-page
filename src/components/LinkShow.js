function LinkShow({ children, myUrl }) {

    return <div className="container justify-content-center text-center my-auto">
        <a href={myUrl} className="text-light text-decoration-none myLink px-md-2">{children}</a>
        <div className="border w-50 mx-auto onhover"></div>
    </div>
}
export default LinkShow;