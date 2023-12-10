import React from 'react';
import q1 from "../../../assets/qZone1.png";
import q2 from "../../../assets/qZone2.png";
import q3 from "../../../assets/qZone3.png";
import "./QZone.css"
const QZone = () => {
    return (
        <div className='qzone bg-secondary mt-5'>
            <h4 className='pt-3'>Q-Zone</h4>
            <div >
                <img src={q1} alt="" />
                <img src={q2} alt="" />
                <img src={q3} alt="" />
            </div>
        </div>
    );
};

export default QZone;