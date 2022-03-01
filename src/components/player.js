import React from "react";
import VideoJS from "./VideoJS"; // point to where the functional component is stored
//import videojs from "./videojs.suggestedVideoEndcap";

const Player = () => {
  const playerRef = React.useRef(null);

  /*
IMGIX NOTES:
When you copy and paste the code from https://docs.videojs.com/tutorial-react.html,
The code for const videoJsOptions variable will ahve type set to "video/mp4". In order for
it to work, you need to change it to type: "application/x-mpegURL".
*/
  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://tom.imgix.video/gotopening.mp4?fm=hls",
        type: "application/x-mpegURL"
      }
    ]
  };

  /*
Code from the plugin to play the video.
  */
  // var video = videojs("my-video");
  // video.suggestedVideoEndcap({
  //   header: "You may also like…",
  //   suggestions: [
  //     {
  //       title: "Suggested Video One",
  //       url: "/another-video.html",
  //       image: "http://placehold.it/250", // could be an animated GIF
  //       alt: "Description of photo", // optional photo description, defaults to the title
  //       target: "_blank" // can be any anchor target type
  //     },
  //     {
  //       title: "Suggested Article One",
  //       url: "/a-different-article.html",
  //       image: "http://placehold.it/250",
  //       target: "_self" // defaults to self if no target value is present
  //     }
  //   ]
  // });

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };
  //

  return (
    <>
      <div>imgix React app using VideoJS and videojs-suggestedVideoEndcap</div>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
};

export default Player;