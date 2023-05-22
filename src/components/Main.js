import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash-es';
import { Container, Flex, Image, Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { GameContext } from '../GameContext';

const Main = () => {
  // const [images, setImages] = useState([]);
  const { images, setImages, score, setScore, bestScore, setBestScore } = useContext(GameContext);
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

  const resetGame = () => {
    if (score > bestScore) setBestScore(score);
    const resetImages = images.map((image) => ({ ...image, checked: false }));
    setImages(resetImages);
    setScore(0);
  };

  const handleImageClick = (id) => {
    const clickedImage = images.find((image) => image.id === id);
    if (clickedImage.checked) resetGame();
    else {
      const updatedImages = images.map((image) =>
        image.id === id ? { ...image, checked: true } : image
      )
      setImages(updatedImages);
      setScore((prevScore) => prevScore + 1);
    }
  };

  useEffect(() => {
    if (images.some((image) => image.checked)) {
      renderImages();
    }
  }, [images]);

  return (
      <Flex wrap="nowrap" justify="center" alignItems="center" gap={4} w={
        {
          sm: '30em', // 480px
          md: '48em', // 768px
          lg: '62em', // 992px
          xl: '80em', // 1280px
          '2xl': '96em', // 1536px
        }
      }>
        {renderedImages.map((item) => (
          <Box key={item.id} w='400px' h='600px' w={
            {
              sm: '5em', // 480px
              md: '10em', // 768px
              lg: '15em', // 992px
              xl: '20em', // 1280px
              '2xl': '30em', // 1536px
            }
          }>
            <Image
              w='100%'
              h='100%'
              objectFit="cover"
              src={item.src}
              style={{ cursor: 'pointer' }}
              data-checked={item.checked}
              onClick={() => handleImageClick(item.id)}
            />
          </Box>
        ))}
      </Flex>
  );
};

export default Main;
