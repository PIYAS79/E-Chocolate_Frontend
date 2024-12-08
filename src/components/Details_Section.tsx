import { Link } from "react-router-dom"

const Details_Section = () => {
    return (
        <div className='py-16 bg-[#f4d6b1]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between max-w-7xl mx-auto'>
                <div className='text-black flex justify-center flex-col px-5 lg:px-0'>
                    <h1 className="mb-5 text-5xl font-bold">Our Trust Layers</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to={'/product'}>
                        <button className="btn bg-[#5e464a] hover:bg-[#775a5f] border-none text-white">View Our Products</button>
                    </Link>
                </div>
                <div className='flex justify-center items-center'>
                    <img width={500} src="https://res.cloudinary.com/do7nin6oo/image/upload/v1733646060/DALL-E-2024-01-27-10.50.28---A-cross-section-of-a-gourmet-chocolate--with-each-layer-clearly-visible-and-labeled.-The-chocolate-should-show-various-layers-like-ganache--caramel--n_ltaykg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Details_Section
