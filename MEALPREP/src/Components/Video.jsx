import './Video.css';
import video from "../assets/video.mp4";

function Video(){
    return(
        <>
        <div className="about-video">
       <video src={video} autoPlay muted loop playsInline></video>

    </div>

        </>
    )
}
export default Video;