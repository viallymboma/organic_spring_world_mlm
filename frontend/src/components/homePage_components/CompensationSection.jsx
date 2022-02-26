import React from 'react';
import mockup8 from "../../assets/images/hero_section_img/mockup8.png"

const CompensationSection = () => {
  return (
    <div className='CompensationSectionContent'>
        <div className="leftSidePic">
            <img src={ mockup8 } alt="" srcset="" />
        </div>
        <div className="rightSide">
            <div className="smallUpperTitle">
                <h5>Organic Spring World Ghana</h5>
            </div>
            <div className="bigtitle">
                <h1>OGANIC SPRING WORLD COMPENSATION PLAN DOCUMENTS</h1>
            </div>
            <div className="Paraph">
                <p>
                    Get access to all documents to help you build your business, 
                    prospect and reach out to more people and enjoy your PURE prosperity journey.
                </p>
            </div>
        </div>

    </div>
  )
}

export default CompensationSection