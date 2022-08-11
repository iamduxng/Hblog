import React, { forwardRef } from 'react'
import Slider from 'react-slick'
import ArticleCardOverlay from 'components/article/article-card-overlay'

const carouselSettings = {
  dots: false,
  arrows: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: true,
  autoplay: true,
}

const ArticleSliderOne = forwardRef(({ articles }, ref) => {
  return (
    <Slider ref={ref} {...carouselSettings}>
      {articles.map((article, idx) => (
        <div key={`articleSlideOne_${idx}`}>
          <ArticleCardOverlay article={article} />
        </div>
      ))}
    </Slider>
  )
})

export default ArticleSliderOne
