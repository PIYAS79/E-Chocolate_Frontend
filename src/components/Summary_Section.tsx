
import { useAppSelector } from '../redux/hooks'

const Summary_Section = () => {

    const {image} = useAppSelector(state=>state.auth);


    return (
        <div className='py-16'>
            <h1 className="mt-5 text-3xl text-[#5e464a] font-bold text-center">Current Summary</h1>
            <p className="mb-10 text-sm text-center">
                Provident cupiditate voluptatem et in. Quaerat
                quasi. In deleid nisi.
            </p>
            <div className='flex justify-center'>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Total Ratings</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">28% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={image?image:''} />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Sells done</div>
                        <div className="stat-desc text-secondary">11 items remaining</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary_Section
