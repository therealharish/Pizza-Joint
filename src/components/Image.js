import React, { useState } from "react";
import { useScroll } from "react-use";
import { useRef } from "react";
import { useSpring } from "framer-motion";

const Image = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageRef, setImageRef] = useState();

  const onScroll = () => {
    setScrollY(useScroll().y);
  };

  const enlargedImage = useSpring({
    from: {
      scale: 0.9,
    },
    to: {
      scale: 1,
    },
    onUpdate: () => {
      setImageRef(imageRef.current);
    },
  });

  return (
    <div onScroll={onScroll}>
      <img ref={imageRef} src="https://picsum.photos/id/123/600/400" />
      {enlargedImage}
    </div>
  );
};

export default Image;
