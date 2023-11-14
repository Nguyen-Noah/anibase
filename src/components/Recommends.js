import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import fetchAnime from "../services/fetchAnime";
import { useState, useEffect } from "react";

const Recommended = (props) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const animeData = await fetchAnime(40);
        setTrending(animeData);
      } catch (error) {
        alert(error);
      }
    }
  
    fetchData();
  }, []);

  return (
    <>
      <Header>Recommended For You</Header>
      <Container {...settings}>
          {trending.map(anime => (
            <Content>
              <ShowContainer>
                <Cover src={ anime.coverImage.large } alt={anime.title.romaji} />
                <Title dangerouslySetInnerHTML={{ __html: anime.title.english }} />
              </ShowContainer>
            </Content>
          ))}
      </Container>
    </>
  )
};

const Container = styled(Slider)`
  padding: 0 0 26px;

  .slick-list {
    overflow: initial;
  }
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-left: 5px;
  margin-bottom: 5px;
`;

const Content = styled.div`
`;

const ShowContainer = styled.div`
  @media (max-width: 768px) {
    height: 258px;
  }
`;

const Cover = styled.img`
  height: 236px;
  width: 166px;
  margin-left: 5px;
  margin-right: 5px;
  opacity: 1;
  transition: 400ms;
  z-index: 1;

  &:hover {
    transform: scale(1.08);
    border-radius: 10px;
    outline: 1px solid;
  }
`;

const Title = styled.div`
  width: 176px;
  margin-left: 5px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Recommended;