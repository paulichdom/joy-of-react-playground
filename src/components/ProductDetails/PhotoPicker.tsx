import React from 'react'
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';

const PhotoPicker: React.FC<{photos: string[]}> = ({photos}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = React.useState(0);
  return (
    <PhotosWrapper>
        <div>
          <PrimaryPhoto alt="" src={photos[selectedPhotoIndex]} />
          <Buttons>
            {photos.map((photoSrc, index) => {
              const isSelected = selectedPhotoIndex === index;
              return (
                <ThumbnailButton
                  key={index}
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <VisuallyHidden>Toggle image #{index + 1}</VisuallyHidden>
                  <img alt="" src={photoSrc} />
                  <SelectedRing
                    style={{
                      opacity: isSelected ? 1 : 0,
                    }}
                  />
                </ThumbnailButton>
              );
            })}
          </Buttons>
        </div>
      </PhotosWrapper>
  )
}

export default PhotoPicker

const PhotosWrapper = styled.div`
  flex: 1;
  max-width: 350px;
`;

const PrimaryPhoto = styled.img`
  display: block;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;

const ThumbnailButton = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  & > img {
    pointer-events: none;
  }
`;

const SelectedRing = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0px;
  border: 3px solid hsl(220deg 100% 60%);
  border-radius: 4px;
  transition: opacity 200ms;
`;