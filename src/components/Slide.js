import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    className: "center",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMode: true,
  };
  return (
    <Slider {...settings}>
      <div class="item-slick">
        <h3>1</h3>
      </div>
      <div class="item-slick">
        <h3>2</h3>
      </div>
      <div class="item-slick">
        <h3>3</h3>
      </div>
      <div class="item-slick">
        <h3>4</h3>
      </div>
      <div class="item-slick">
        <h3>5</h3>
      </div>
      <div class="item-slick">
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default Slide;
