import { ImageLoader } from "next/image";

const loader: ImageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default loader;
