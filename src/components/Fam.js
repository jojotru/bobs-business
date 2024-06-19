import React from "react";
import "./Fam.css";

function Fam() {
    return (
        <div className="aboutBkg">
            <div className="aboutBox">
                <div className="aboutInfo">
                    <h1>From Our Family to Yours</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non libero modi alias veniam maiores ut neque architecto iste blanditiis fugiat mollitia, corrupti id soluta inventore dolorum voluptatibus repudiandae ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptatum, soluta rem eligendi adipisci quisquam omnis distinctio eaque velit enim in quaerat nam ad, accusantium vero neque illo quae voluptatibus!
                    </p>
                </div>
                <div className="aboutPhoto">
                    <img src="/bobs-business/images/bob.jpeg" alt="Bob" className="aboutImg"/>

                    <img src="/images/bob2.jpeg" alt="Bob" className="aboutImg imgH"/>
                    <img src="bobs-business/images/bob3.jpeg" alt="Bob" className="aboutImg imgH"/>

                    <img src="bobs-business/images/bob2.jpeg" alt="Bob" className="aboutImg imgH"/>
                    <img src="./images/bob3.jpeg" alt="Bob" className="aboutImg imgH"/>

                </div>
            </div>
        </div>
    );
};

export default Fam;