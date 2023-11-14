import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchSingle from '../services/fetchAnimeDetails'

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const animeData = fetchSingle(id);
        setDetailData(animeData);
      } catch (error) {
      alert(error.message);
      }
    }

    fetchData();
  }, [id]);

  return (
    <Container>
      <Background>

      </Background>
    </Container>
  )
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
`;

export default Detail;