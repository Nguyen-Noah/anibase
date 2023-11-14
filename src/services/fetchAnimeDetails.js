import axios from "./axios";

async function fetchAnimeDetails(animeId) {
  try {
    const query = `
      query ($id: Int) {
        Media(id: $id, type: ANIME) {
          id
          title {
            romaji
            english
          }
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
      id: animeId
    };

    const result = await axios().post("/", { query, variables });
    const filteredAnime = result.data.data.Page.media.filter((a) => !a.isAdult);
    return filteredAnime;
  } catch (error) {
    alert(error.message);
  }
}

export default fetchAnimeDetails;
