
const Footer = () => {
    return (
        <div className="bg-[#5e464a]">
            <footer className="footer max-w-7xl mx-auto text-black p-10">
                <aside>
                    <img width={100} src="https://i.ibb.co.com/2qcCqDx/logomn-removebg-preview.png" alt="" />
                    <p className="text-white">
                        E-Chocolate
                        <br />
                        Providing reliable service since 2024
                    </p>
                </aside>
                <nav className="text-white">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-white">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-white">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
