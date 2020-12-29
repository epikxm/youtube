import React from 'react';

const VideoItem = (props) => (
    <span>{ props.video.snippet.title }</span>
);

export default VideoItem;