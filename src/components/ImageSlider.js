import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import fetchAnime from '../services/fetchAnime';

const ImageSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const [trendingAnime, setTrendingAnime] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const animeData = await fetchAnime(5, "TRENDING_DESC");
        const filteredAnime = animeData.filter((a) => a.bannerImage !== null);
        setTrendingAnime(filteredAnime);
      } catch (error) {
        alert(error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
    <Carousel {...settings}>
      {trendingAnime.map(anime => (
        <Wrap>
          <a>
            <Banner src={anime.bannerImage} alt="" />
            <CoverWrapper>
              <Cover src={anime.coverImage.extraLarge} alt={anime.title.romaji} />
            </CoverWrapper>
            <Title dangerouslySetInnerHTML={{ __html: anime.title.english }} />
            <Description dangerouslySetInnerHTML={{ __html: anime.description }} />
          </a>
        </Wrap>
      ))}
    </Carousel></>
  )
};

const Carousel = styled(Slider)`
  margin-top: 7px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul {
    position: absolute;
    height: 0px;
    top: 725px;
  }

  ul li button {
    position: absolute;
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;

    @media (max-width: 768px) {
      height: 300px;
    }

    .slick-track {
      height: 800px;

      @media (max-width: 768px) {
        height: 10px;
      }

      .slick-slide {
        height: 10px;
      }

      .slick-slide div {
        height: 200px;
      }
    }
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    margin-right: 10px;
    background-color: rgb(29, 29, 36);
    height: 700px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
    }

    @media (max-width: 768px) {
      height: 258px;
    }
  }
`;

const Banner = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    transition: 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

const CoverWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Cover = styled.img`
  position: relative;
  top: -50px;
  left: 50px;
  width: 319px;
  height: 450px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`;

const Title = styled.div`
  font-weight: 600;
  position: relative;
  font-size: 50px;
  top: -175px;
  left: 400px;
  color: white;
  width: calc(90% - 369px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Description = styled.div`
  position: relative;
  width: calc(90% - 369px);
  top: -275px;
  left: 400px;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ImageSlider;