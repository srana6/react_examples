import React from 'react';

/**
 * React component utilize the ref on DOM elements.
 */
class RefOnDomElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
        }
        this.refVideo = React.createRef();
        this.handlePlaybackVideo = this.handlePlaybackVideo.bind(this);
    }

    handlePlaybackVideo() {
        if(this.state.isPlaying) {
            this.refVideo.current.pause();
        } else {
            this.refVideo.current.play();
        }
        this.setState({
            isPlaying: !this.state.isPlaying,
        });
    }

    render() {
        return(
            <div>
                <video
                    ref={this.refVideo}
                    onClick={this.handlePlaybackVideo}>
                <source
                    src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
                    type="video/ogg"/> 
                </video>
                <h3> Click the video to play </h3>
            </div>
        );
    }
}

export default RefOnDomElement;
