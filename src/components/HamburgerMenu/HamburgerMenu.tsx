import Header from './Header';
import ImageGallery from './ImageGallery';
import { data } from './data';

const HamburgerMenu = () => {
  return (
    <>
      <Header />
      <main>
        <ImageGallery images={data} />
      </main>
    </>
  );
};

export default HamburgerMenu;
