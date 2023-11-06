import React, { useState, useEffect } from 'react';
import GetData from './GetData';

function TrendingAnime() {
  const [trendingAnime, setTrendingAnime] = useState([]);
  
  useEffect(() => {
    const query = `
      query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media(type: ANIME, sort: TRENDING_DESC) {
            id
            title {
              romaji
              english
            }
            siteUrl
            isAdult
            coverImage {
              extraLarge
              large
              medium
            }
          }
        }
      }`;

    const variables = {
      page: 1,
      perPage: 5,
    };

    GetData.getTitles({ query, variables })
      .then(result => {
        const filteredAnime = result.data.data.Page.media.filter(a => !a.isAdult);
        setTrendingAnime(filteredAnime);

        console.log('Trending Anime: ', trendingAnime);
      })
      .catch(handleErrors);
  }, []);

  const handleErrors = err => {
    console.log(err.message);
  };

  return (
    <div>
      <h2>Trending Anime</h2>
      <ul>
        {trendingAnime.map(anime => (
          <li key={anime.id}>
            <a href={anime.siteUrl}>{anime.title.english || anime.title.romaji}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingAnime;