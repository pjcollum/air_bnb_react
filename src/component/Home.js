import React from 'react'

import star from '../images/star.png';

function Home(props) {
    return (
        <div className="homeDiv">

            <img src={props.source} alt='' />
            <h3>{props.message} </h3>

            <div className="name">
                <img className="profilePic" src={props.source1} alt='' />
                <h3>{props.message1} </h3>
            </div>

            <img id='star' src={star} alt='' />


        </div>
    )
}
export default Home