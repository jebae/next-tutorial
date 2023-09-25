import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  images: { url: string, id: string, width: number, height: number }[];
  type: string;
}

const Images: FC<Props> = ({ type, images }) => {
  return (
    <>
      {images.map(({ id, url, width, height }) => (
        <Link key={id} href={`/${type}/${id}`}>
          <Image
            src={url}
            alt="dog"
            width={300}
            height={300 * height / width || 300}
          />
        </Link>
      ))}
    </>
  );
};

export default Images;
