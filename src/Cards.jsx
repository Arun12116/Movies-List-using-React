import React from 'react';

function Card(props) {
    return (
        <>
        <h1> </h1>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="my-pic" className="card image" />
                    <div className="card-info" >
                        <span className="card-category">{props.title}</span>
                        <h3 className="card-title"></h3>
                        <a href={props.link} target="blank">
                            <button>Watch Now</button>
                        </a>

                    </div>


                </div>

            </div>
        </>
    );
}
export default Card;