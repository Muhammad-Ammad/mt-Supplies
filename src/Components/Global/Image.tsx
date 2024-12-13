
interface ImageProps {
    imgSrc: string,
    className?: any,
}

const Image: React.FC<ImageProps> = ({ imgSrc, className }) => {
  return <img className={className} src={imgSrc} alt={imgSrc} />;
};

export default Image;
