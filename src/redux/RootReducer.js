import {combineReducers} from 'redux';

import app from './app';
import navigationRedux from './navigation/navigationRedux';
import loginWithEmail from './user/redux/loginWithEmail';
import themes from './theme';
import chapterManga from './manga/redux/chapterManga';
import descriptionManga from './manga/redux/descriptionManga';
import listChapter from './manga/redux/listChapterManga';
import listFavoriteManga from './manga/redux/listFavoriteManga';
import listNewManga from './manga/redux/listNewManga';
import listSearchManga from './manga/redux/listSearchManga';
import listWellManga from './manga/redux/listWellManga';
import listGenres from './genre/redux/listGenre';
import forgotPassword from './user/redux/forgotPassword';
import changePassword from './user/redux/changePassword';

const rootReducer = combineReducers({
  app,
  navigationRedux,
  loginWithEmail,
  themes,
  chapterManga,
  descriptionManga,
  listChapter,
  listFavoriteManga,
  listNewManga,
  listSearchManga,
  listWellManga,
  listGenres,
  forgotPassword,
  changePassword,
});

export default rootReducer;
