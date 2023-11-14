import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recommend: null,
  newAnime: null,
  original: null,
  trending: null
};

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setAnime: (state, action) => {
      state.recommend = action.payload.recommend
      state.newAnime = action.payload.newAnime
      state.original = action.payload.original
      state.trending = action.payload.trending
    }
  }
});

export const { setAnime } = moveSlice.actions;

export const selectRecommend = state => state.anime.recommend;
export const selectNewAnime = state => state.anime.newAnime;
export const selectOriginal = state => state.anime.original;
export const selectTrending = state => state.anime.trending;

export default animeSlice.reducer;