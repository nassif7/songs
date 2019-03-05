import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{title: 'song 1', duration : '4:04'},
		{title: 'song 2', duration : '3:03'},
		{title: 'song 3', duration : '5:05'},
		{title: 'song 4', duration : '7:07'},
		{title: 'song 5', duration : '8:08'},
		{title: 'song 6', duration : '2:04'}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
})