import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryModal = ({ open, setOpen, images }) => {
  const slides = images.map((img) => ({
    src: img,
  }));

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
    />
  );
};

export default GalleryModal;