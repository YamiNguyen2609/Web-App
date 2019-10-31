import {fork, all} from 'redux-saga/effects';

import loginWithEmail from './user/sagas/loginWithEmail';
import chapterManga from './manga/sagas/chapterManga';
import descriptionManga from './manga/sagas/descriptionManga';
import listChapter from './manga/sagas/listChapterManga';
import listFavoriteManga from './manga/sagas/listFavoriteManga';
import listTopFavoriteManga from './manga/sagas/listTopFavoriteManga';
import listNewManga from './manga/sagas/listNewManga';
import listTopNewManga from './manga/sagas/listTopNewManga';
import listSearchManga from './manga/sagas/listSearchManga';
import listWellManga from './manga/sagas/listWellManga';
import listTopWellManga from './manga/sagas/listTopWellManga';
import listGenres from './genre/sagas/listGenre';
import forgotPassword from './user/sagas/forgotPassword';
import changePassword from './user/sagas/changePassword';

export default function* rootSaga() {
  yield all([
    fork(loginWithEmail),
    fork(chapterManga),
    fork(descriptionManga),
    fork(listChapter),
    fork(listFavoriteManga),
    fork(listNewManga),
    fork(listSearchManga),
    fork(listWellManga),
    fork(listGenres),
    fork(listTopNewManga),
    fork(listTopWellManga),
    fork(listTopFavoriteManga),
    fork(forgotPassword),
    fork(changePassword),
  ]);
}
