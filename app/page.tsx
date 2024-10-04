import getAllDogBreeds from "./api/allDogBreeds";
import DogBreeds from "./components/DogBreeds";
import PawFilledIcon from "./components/icons/Paw";
import Title from "./components/ui/Title";

export default async function Home() {
  const dogBreedsData = await getAllDogBreeds();

  return (
    <section id="dog-finder" className="grid gap-2">
      <Title>
        Dog Finder <PawFilledIcon />
      </Title>
      <p>
        Find your friendly companions with just one simple search! Select from
        the dropdown to view whatever breed you want!
      </p>
      <p>
        Expand the search results to see more dogs if there are more than 10
        images.
      </p>
      <br />

      <DogBreeds dogBreedsData={dogBreedsData} />
    </section>
  );
}
