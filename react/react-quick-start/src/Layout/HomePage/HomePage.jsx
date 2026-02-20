import React, { useState, useEffect } from 'react';
import ContentItem from "./components/ContentItem"
import FooterItem from "./components/FooterItem"
import HeaderItem from "./components/HeaderItem"
import axios from 'axios'
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const imgUrl = "https://picsum.photos/"
const HomePage = () => {
    const value = "Карточки";
    const [labels, setLabels] = useState([])

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                setLabels(res.data.slice(0, 5))
            })
    });

    return <div className="container col-10">
        <HeaderItem headerText={value} />
        <ContentItem
            setOfLabels={labels}
            image={imgUrl}
        />
        <FooterItem />
    </div>
}


export default HomePage;