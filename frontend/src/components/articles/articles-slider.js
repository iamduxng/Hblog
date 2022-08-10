import React from 'react'
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
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: "100px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "50px",
      },
    },
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

const ArticleSlider = ({ articles }) => {
  return (
    <Slider {...carouselSettings}>
      {articles.map((article, idx) => (
        <div key={`articleSlide_${idx}`} className={styles.slideItem}>
          <ArticleCard article={article} />
        </div>
      ))}
    </Slider>
  )
}

export default ArticleSlider
