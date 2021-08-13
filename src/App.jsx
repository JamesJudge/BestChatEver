import React from 'react';

import MiniPlayer from './components/mini-player';
import { CONTROLS, POSITION } from './components/mini-player';

import './App.css';

const STREAM_PLAYBACK_URL =
  'https://a5e08faf82b5.us-west-2.playback.live-video.net/api/video/v1/us-west-2.185192162905.channel.QkSrXly9j0GZ.m3u8';
const ChatApp = () => {
  return (
    <div className="ChatApp">
      <MiniPlayer
        streamUrl={STREAM_PLAYBACK_URL}
        controls={[CONTROLS.resize, CONTROLS.close, CONTROLS.mute]}
        position={POSITION.bottomRight}
        transition
      />

	{[...Array(1)].map((_, i) => (
	<div className="App-contentPlaceholder" key={i}><iframe src="https://172.31.26.103:9000"></iframe></div>
      ))}
    </div>
  );
};

export default ChatApp;
