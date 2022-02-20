import React from 'react'

const VideoSection = () => {
    // const ID = `v=g-jwWYX7Jlo&t=72s`
  return (
    <div className='VideoSectionContent'>
        <div className="leftSideDescription">
            <div className="bigTitle">
                <h1>We Take Care You And Your Family</h1>
            </div>
            <div className="smalParagraph">
                <p>
                    We also believe that amalgamating the use of Ayurvedic knowledge, scientific expertise and experience of our R&D team in developing unique formulation matters the most
                </p>
            </div>
        </div>
        <div className="rightSideVideo">
            {/* <iframe 
                src={`https://www.youtube.com/watch?${ID}`} 
                frameborder="0"
                height="200"
                width="400"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                > */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/g-jwWYX7Jlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    

            {/* </iframe> */}
        </div>
    </div>
  )
}

export default VideoSection