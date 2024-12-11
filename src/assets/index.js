import VdoCallGif from "./vdoCall.jpg";
import Hd from "./hd.png";
import exch from "./exchange.png";
import photo from "./photo.png";
import Love from "./love.png"

export const VideoCallIcon = () => {
  return <img src={VdoCallGif} alt="Video call" />;
};

export const HDIcon = () => {
  return <img src={Hd} alt="HD Icon" />;
};

export const ExchangesIcon = () => {
  return <img src={exch} alt="Exchanges Icon" />;
};

export const PhotoIcon = () => {
  return <img src={photo} alt="Photo Icon" />;
};

export const LoveIcon = () => {
  return <img src={Love} alt="Photo Icon" className="logo" />;
};
