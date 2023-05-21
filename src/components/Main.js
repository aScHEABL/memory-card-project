import React, { useState, useEffect } from 'react';
import _ from 'lodash-es';
import { Container, Flex, Image, Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [images, setImages] = useState([]);
  const [renderedImages, setRenderedImages] = useState([]);

  useEffect(() => {
    // Import all the images from the image directory
    const cache = {};
    function importAll(r) {
      r.keys().forEach((key) => (cache[key] = r(key)));
    }
    importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    const images_src = Object.entries(cache).map((module) => module[1]);

    const imageNodes = images_src.map((item) => ({
      id: uuidv4(),
      src: item,
      checked: false,
    }));

    setImages(imageNodes);
  }, []);

  useEffect(() => {
    renderImages();
  }, [images]); // Rerender when images change

  const renderImages = () => {
    const randomImages = _.sampleSize(images, 4);
    setRenderedImages(randomImages);
  };

  const handleImageClick = (id) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, checked: true } : image
    );
    setImages(updatedImages);
  };

  useEffect(() => {
    if (images.some((image) => image.checked)) {
      renderImages();
    }
  }, [images]);

  return (
    <Container as="main" maxW="180ch" centerContent>
      <Flex wrap="nowrap" justify="center" alignItems="center">
        {renderedImages.map((item) => (
          <Box key={item.id} boxSize="sm">
            <Image
              objectFit="cover"
              src={item.src}
              style={{ cursor: 'pointer' }}
              data-checked={item.checked}
              onClick={() => handleImageClick(item.id)}
            />
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Main;
