import React from 'react'



function Home () {

    return (
        <div id='home' className='home-container'>
            <div
      className="video"
      style={{
        position: "relative",
        zIndex: 1,
        paddingBottom: "53%" /* 16:9 */,
        paddingTop: 25,
        height: 10
      }}
    >
      <iframe
        title='intro'
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: '100%',
        }}
        src={`https://www.youtube.com/embed/qbFIrnYy3P0?rel=0&autoplay=1&mute=1&controls=0&loop=1
        &playlist=qbFIrnYy3P0`}
        frameBorder="0"
        allow='autoplay, muted'
      />
    </div>
        </div>
    )
}

export default Home;