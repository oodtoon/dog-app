import { DogImagesProps } from "../types";
import Image from "next/image";

const INDEX_OFFSET = 1;
const FIRST_IMAGE = 0;
const LAST_IMAGE = 10;

export default function DogImages(props: DogImagesProps) {
  const dogImages = props.shouldDisplayAllImages
    ? props.dogImages
    : props.dogImages.slice(FIRST_IMAGE, LAST_IMAGE);

  if (!props.dogImages.length) {
    return <p>No dog images available. Who let the dogs out?!</p>;
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {dogImages.map((dogImage, i) => (
        <Image
          key={i}
          src={dogImage}
          alt={`${props.breed} ${i + INDEX_OFFSET}`}
          width={200}
          height={200}
          className="border-tertiary border-2 rounded-md h-40 w-40"
        />
      ))}
    </div>
  );
}
