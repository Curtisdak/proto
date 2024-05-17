import "./musicPage.css"
import video1 from "../../assets/videoMusic/video-1.mp4"
import video2 from "../../assets/videoMusic/video-2.mp4"
import video3 from "../../assets/videoMusic/video-3.mp4"
import video5 from "../../assets/videoMusic/video-5.mp4"
import video6 from "../../assets/videoMusic/video-6.mp4"
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer"
import { LuMusic } from "react-icons/lu";

const videos = [video1, video2, video3, video5, video6];

const MusicPage = () => {

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  return (
    <div id="musicPage">

    <div className="video-container">
      <video muted loop autoPlay>
        <source src={randomVideo} type="video/mp4" />
      </video>  
    </div>


    <div className="kirikou">
        <div className="musicbox">  
          <LuMusic className="musiclogo"/> 
          <p>Feel the nature</p>
        </div>
        <div className="playerBox">
        <MusicPlayer />
        </div>
    </div>
    </div>
  );
};

export default MusicPage;