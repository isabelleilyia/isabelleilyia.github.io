import { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  return (
    <div>
      <ReactSimplyCarousel
        containerProps={{ justifyContent: 'space-around' }}
        activeSlideIndex={activeSlideIndex}
        infinite={true}
        autoplay={true}
        delay={2000}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            opacity: 0,
            border: 'none',
            background: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 35,
            lineHeight: 1,
            textAlign: 'center',
            width: 35,
          },
          children: <FontAwesomeIcon icon={faAngleRight} />,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            opacity: 0,
            border: 'none',
            background: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 35,
            lineHeight: 1,
            textAlign: 'center',
            width: 35,
          },
          children: <FontAwesomeIcon icon={faAngleLeft} />,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 700,
          },
        ]}
        speed={400}
        easing="ease"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 500 }} className="quote-box">
          <h3>“Often a sign of expertise is noticing what doesn't happen.”</h3>
          <p style={{ alignSelf: 'flex-end' }}>—Malcolm Gladwell</p>
        </div>
        <div style={{ width: 500 }} className="quote-box">
          <h3>“Discipline is the bridge between goals and accomplishment.”</h3>
          <p style={{ alignSelf: 'flex-end' }}>—Jim Rohn</p>
        </div>
        <div style={{ width: 500 }} className="quote-box">
          <h3>
            “It is not enough to be busy, so are the ants. The question is: What
            are we busy about?”
          </h3>
          <p style={{ alignSelf: 'flex-end' }}>—Henry Thoreau</p>
        </div>
        <div style={{ width: 500 }} className="quote-box">
          <h3>
            "Programming isn't about what you know; it's about what you can
            figure out.”
          </h3>
          <p style={{ alignSelf: 'flex-end' }}>—Chris Pine</p>
        </div>
      </ReactSimplyCarousel>
    </div>
  )
}

export default Carousel
