import CaptionedImage from './CaptionedImage';

const ImagePreview = () => {
  return (
    <CaptionedImage
      image={
        <picture>
          <source
            type="image/avif"
            srcSet={`
          https://sandpack-bundler.vercel.app/img/meerkat.avif 1x,
          https://sandpack-bundler.vercel.app/img/meerkat@2x.avif 2x
        `}
          />
          <source
            type="image/jpeg"
            srcSet={`
          https://sandpack-bundler.vercel.app/img/meerkat.jpg 1x,
          https://sandpack-bundler.vercel.app/img/meerkat@2x.jpg 2x
        `}
          />
          <img
            alt="A meerkat looking curiously at the camera"
            src="https://sandpack-bundler.vercel.app/img/meerkat.jpg"
          />
        </picture>
      }
      caption={
        <>
          Photo by <a href="">Manuel Capellari</a>, shot in August 2019 and
          published on <strong>Unsplash</strong>.
        </>
      }
    />
  );
};

export default ImagePreview;
