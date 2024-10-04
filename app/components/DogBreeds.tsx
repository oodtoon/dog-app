"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import getDogImagesByBreed from "../api/dogImages";
import { DogBreedsProps } from "../types";
import DogImages from "./DogImages";
import ToggleImagesButton from "./ToggleImagesButton";

const MAX_COLLAPSED_IMAGES_TO_DISPLAY = 10;

export default function DogBreeds(props: DogBreedsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const selectedBreed =
    searchParams.has("breed") && searchParams.get("breed") !== ""
      ? searchParams.get("breed")
      : props.dogBreedsData.images![0];

  const [dogImages, setDogImages] = useState([]);
  const [shouldDisplayAllImages, setShouldDisplayAllImages] = useState(false);

  function handleDogBreedSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    router.push(
      pathname + "?" + createQueryString("breed", e.currentTarget.value)
    );
  }

  function handleExpandCollapseButton() {
    setShouldDisplayAllImages((prev) => !prev);
  }

  function isExtraImages() {
    return dogImages.length > MAX_COLLAPSED_IMAGES_TO_DISPLAY;
  }

  async function fetchDogImages() {
    const result = await getDogImagesByBreed(selectedBreed!);
    if (result?.status === "error") {
      alert(result.message);
    } else {
      setDogImages(result.message);
    }
  }

  useEffect(() => {
    fetchDogImages();
  }, [selectedBreed]);

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-4">
        {props.dogBreedsData.status === "success" ? (
          <label className="flex gap-2 items-center font-bold">
            Select Dog Breed:
            <select
              className="text-black capitalize rounded-md border-2 h-10 focus:border-secondary"
              value={selectedBreed!}
              onChange={handleDogBreedSelect}
            >
              {props.dogBreedsData.images!.map((breed, i) => (
                <option key={i} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <p>No Dog Breeds Found.</p>
        )}

        <ToggleImagesButton
          handleClick={handleExpandCollapseButton}
          shouldDisplayAllImages={shouldDisplayAllImages}
          isExtraImages={isExtraImages()}
        />
      </div>
      <DogImages
        dogImages={dogImages}
        breed={selectedBreed!}
        shouldDisplayAllImages={shouldDisplayAllImages}
      />

      <ToggleImagesButton
        handleClick={handleExpandCollapseButton}
        shouldDisplayAllImages={shouldDisplayAllImages}
        isExtraImages={isExtraImages()}
      />
    </div>
  );
}
