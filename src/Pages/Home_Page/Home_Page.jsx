import Daily_Deals from "../../Components/Daily_Deals/Daily_Deals"
import Home_Banner from "../../Components/Home_Banner/Home_Banner"
import Indoor_Gardening from "../../Components/Indoor_Gardening/Indoor_Gardening"
import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import Work_Flow from "../../Components/Work_Flow/Work_Flow"

const Home_Page = () => {
    return (
        <div className="bg-[#FCF9F3]">
            <Home_Banner />
            <Daily_Deals/>
            <SectionTitle title={"Uncomplicate indoor"} subTitle={"Gardening"}/>
            <Indoor_Gardening/>
            <SectionTitle title={"Here's How it Works"}/>
            <Work_Flow/>
            <SectionTitle/>
        </div>
    )
}

export default Home_Page