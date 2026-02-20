const ContentItem = (props) =>
    <div >
        {props.setOfLabels.map((item, index) =>
            <div className="card m-3" key={index}>
                <img src={`https://picsum.photos/${200 + index}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.cardTitle}</h5>
                    <p className="card-text">{item.cardText}</p>
                </div>
            </div>)}
    </div>


export default ContentItem