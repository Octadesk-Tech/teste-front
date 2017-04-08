import React from 'react'
import Slider from 'react-slick'
import { slides } from '../../slides'

const IMAGES_PATH = './images/'

const App = () => {

  const settings = {
    customPaging(i) {
      return <a>{ slides[i].title }</a>
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <Slider {...settings} {...slides}  >

      { slides.map( slide => {

          let {
            id,
            title,
            subtitle,
            image,
            link,
            content,
            checklist
          } = slide

          return (
            <div key={ id }>
              <h1 className="col-md-offset-6 col-md-6">{ title }</h1>
              <img className="col-md-6" src={ IMAGES_PATH + image } />
              <div className="col-md-5">
                <h4>{ subtitle }</h4>
                <p>{ content }</p>
                <ul>
                  { checklist.map( (item, i) => <li key={ i } >{item}</li> ) }
                </ul>
                { link ?
                  <button>
                    <a href={ link.url }>
                      { link.name }
                    </a>
                  </button> : null }
              </div>
            </div>
          )

      } ) }

    </Slider>
  )
}

export default App