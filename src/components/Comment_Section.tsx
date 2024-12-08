import Marquee from "react-fast-marquee"
import SingleCardMarquee from "./SingleCardMarquee"


const Comment_Section = () => {

    const comments=[
        {
          id:1,
          name:"Niloy Krishna Roy",
          img : "https://res.cloudinary.com/do7nin6oo/image/upload/v1733650225/IMG-20230606-WA0003_oqimtf.jpg",
        },
        {
          id:2,
          name:"Valluk Rizvee 🐻",
          img : "https://res.cloudinary.com/do7nin6oo/image/upload/v1733649585/photo_2024-12-08_10-53-05_qwkvvw.jpg",
        },
        {
          id:3,
          name:"Glow Boy Munna",
          img : "https://res.cloudinary.com/do7nin6oo/image/upload/v1733650290/photo_2024-12-08_15-27-10_ktwzsn.jpg",
        },
        {
          id:4,
          name:"Humayon Kabir Bappy",
          img : "https://res.cloudinary.com/do7nin6oo/image/upload/v1733650336/photo_2024-12-08_15-23-14_yanmfi.jpg",
        },
        {
          id:5,
          name:"Power Boy Shanto",
          img : "https://res.cloudinary.com/do7nin6oo/image/upload/v1733650408/photo_2024-12-08_15-27-48_rhchag.jpg",
        },
        {
            id:6,
            name:"Himel Targeriyan",
            img:"https://res.cloudinary.com/do7nin6oo/image/upload/v1733650608/IMG_20240525_104829_993_p05bis.jpg"
        }
        
      ]

  return (
    <div className="max-w-7xl mx-auto my-20">
    <div className=" my-10 pt-10">
        <h1 className=" text-3xl md:text-3xl font-bold text-center text-[#5e464a]">Clients Commnets</h1>
        <p className=" text-center text-sm mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, qua</p>
    </div>
    <Marquee>
      {
        comments.map((one)=><SingleCardMarquee key={one.id} data={one}/>)
      }
    </Marquee>
</div>
  )
}

export default Comment_Section
