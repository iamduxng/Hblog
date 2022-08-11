import React, { forwardRef } from 'react'
import Slider from 'react-slick'
import ArticleCard from 'components/article/article-card'

const styles = {
  slideItem: 'px-4',
}

const carouselSettings = {
  dots: false,
  arrows: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: "100px",
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
      }
    },
  ]
}

const ArticleSliderMulti = forwardRef(({ articles }, ref) => {
  return (
    <Slider ref={ref} {...carouselSettings}>
      {articles.map((article, idx) => (
        <div key={`articleSlideMulti_${idx}`} className={styles.slideItem}>
          <ArticleCard article={article} />
        </div>
      ))}
    </Slider>
  )
})

export default ArticleSliderMulti
