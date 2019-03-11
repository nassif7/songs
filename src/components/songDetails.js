import React from 'react';
import { connect } from 'react-redux';

const SongDetails= ({song}) => {
    if (!song) {
        return <div>Select Your Favorite Song </div>
    }
    return (
        <div>
            {song.title}
        </div>);
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);