import React, { useState, useEffect } from 'react';
import ContentItem from "./components/ContentItem"
import FooterItem from "./components/FooterItem"
import HeaderItem from "./components/HeaderItem"
import axios from 'axios'
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const HomePage = () => {
    const value = "Карточки";
    const [labels, setLabels] = useState([])

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                const temp = [];
                res.data.slice(0, 5).forEach(
                    item => {
                        temp.push(
                            {
                                id: item.id,
                                cardTitle: item.title.slice(0, 10),
                                cardText: item.body.slice(0, 50),
                            }
                        )
                    }
                );
                setLabels(temp)
            })
    });

    return <div className="container col-10">
        <HeaderItem headerText={value} />
        <ContentItem setOfLabels={labels} />
        <FooterItem />
    </div>
}


export default HomePage;