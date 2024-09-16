import ImageGallery from './ImageGallery';
import { data } from './data';

const HamburgerMenu = () => {
  return (
    <>
      <main>
        <ImageGallery images={data} />
      </main>
    </>
  );
};

export default HamburgerMenu;
