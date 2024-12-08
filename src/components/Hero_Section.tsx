import { Link } from "react-router-dom"


const Hero_Section = () => {
    return (
        // <div className="p-16 h-full flex justify-between">
        //     <div className="w-[50%] h-full flex justify-center flex-col text-center gap-y-3">
        //         <h1 className="text-5xl mb-3 text-center font-bold">E-Chocolate</h1>
        //         <h1 className="text-xl text-center">"Welcome to MarketNest, your ultimate destination for all your shopping needs! Explore a curated selection of high-quality electronics, gadgets, groceries, and household items at unbeatable prices. Whether you're upgrading your tech, stocking up on essentials, or searching for the perfect gift, we have everything you need in one convenient place. Shop confidently with our secure checkout, fast delivery, and exceptional customer service. At MarketNest, we bring value to your doorstep. Start your shopping journey today!</h1>
        //         <Link to={'/product'}>
        //             <button className="btn bg-blue-500 hover:bg-blue-600 text-white border-none mt-3 w-[200px]">View Products</button>
        //         </Link>
        //     </div>
        //     <div className="w-[50%] h-full flex justify-center">
        //         <img className="h-full rounded-2xl" src="https://static.vecteezy.com/system/resources/previews/020/806/106/non_2x/chocolate-logo-sample-vector.jpg" alt="" />
        //     </div>
        // </div>
        <>
            <div
                className="hero h-[calc(100vh-4.4rem)]"
                style={{
                    backgroundImage: "url(https://res.cloudinary.com/do7nin6oo/image/upload/v1733643180/Awesome-Chocolate-Wallpaper_lih4yw.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-white font-bold">E-Chocolate</h1>
                        <p className="mb-5 text-[#ffffff]">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link to={'/product'}>
                            <button className="btn bg-[#5e464a] hover:bg-[#775a5f] text-white">View All Products</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero_Section
