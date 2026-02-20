const ContentItem = () =>
    <div >
        {Array.from({ length: 5 }, (_, index) =>
            <div className="card m-3">
                <img src={`https://picsum.photos/${200 + index}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>)}
    </div>


export default ContentItem