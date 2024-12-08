
import Category_Section from "../components/Category_Section"
import Comment_Section from "../components/Comment_Section"
import Default_Product from "../components/Default_Product"
import Details_Section from "../components/Details_Section"
import Hero_Section from "../components/Hero_Section"
import Hot_Section from "../components/Hot_Section"
import Summary_Section from "../components/Summary_Section"


const Homepage = () => {
  return (
    <div className="h-[calc(100vh-4.4rem)] overflow-y-scroll">
      <Hero_Section />
      <Category_Section />
      <Default_Product />
      <Details_Section/>
      <Summary_Section/>
      <Hot_Section/>
      <Comment_Section/>
    </div>
  )
}

export default Homepage
