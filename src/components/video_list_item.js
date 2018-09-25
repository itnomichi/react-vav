import React from 'react';
import styles from '../../style/style.css';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className={styles.list_group_item + " " + "list-group-item"}>
            <div className="video-list media">
                <div className={styles.video_item + "" + " media-left"}>
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;