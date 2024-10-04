import { mockDogBreedData } from "./testData";

export default async function getAllDogBreeds() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const dogBreedsData = await response.json();
    return {
      images: Object.keys(dogBreedsData.message),
      status: dogBreedsData.status as string,
    };
  } catch {
    return {
      message: "No dog images found. Who let the dogs out?!",
      status: "error ",
    };
  }
}

if (import.meta.vitest) {
  const { describe, expect, it, beforeEach, vi } = import.meta.vitest;
  describe("getAllDogBreeds", () => {
    let spy;
    beforeEach(() => {
      const mockResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue(mockDogBreedData),
      } as unknown as Response;

      spy = vi.spyOn(global, "fetch").mockResolvedValue(mockResponse);
    });

    it("Length of array of dog breeds should be 15", async () => {
      const data = await getAllDogBreeds();
      expect(fetch).toHaveBeenCalledOnce();
      expect(data.images?.length).toBe(15);
    });
  });
}
