import ContentItem from "./components/ContentItem"
import FooterItem from "./components/FooterItem"
import HeaderItem from "./components/HeaderItem"

const HomePage = () =>
    <div className="container col-10">
        <HeaderItem />
        <ContentItem />
        <FooterItem />
    </div>

export default HomePage