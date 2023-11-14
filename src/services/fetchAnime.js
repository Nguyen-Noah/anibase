import axios from "./axios";

async function fetchAnime(numAnime, sortType) {
  try {
    const query = `
      query ($page: Int, $perPage: Int, $sort: [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media(type: ANIME, sort: $sort) {
            id
            title {
              romaji
              english
            }
            siteUrl
            isAdult
            description
            bannerImage
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
      perPage: numAnime,
      sort: sortType
    };

    const result = await axios().post("/", { query, variables });
    const filteredAnime = result.data.data.Page.media.filter((a) => !a.isAdult);
    return filteredAnime;
  } catch (error) {
    alert(error.message);
  }
}

export default fetchAnime;
