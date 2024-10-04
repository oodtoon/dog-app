import { mockDogImageData } from "./testData";

export default async function getDogImagesByBreed(breed: string) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const dogBreedsData = await response.json();
    return dogBreedsData;
  } catch {
    return {
      message: "No dog images found. Who let the dogs out?!",
      status: "error",
    };
  }
}

if (import.meta.vitest) {
  const { describe, expect, it, vi, beforeEach } = import.meta.vitest;

  describe("getDogImagesByBreed", () => {
    let spy;
    beforeEach(() => {
      const mockResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue(mockDogImageData),
      } as unknown as Response;

      spy = vi.spyOn(global, "fetch").mockResolvedValue(mockResponse);
    });

    it("calls fetch with the correct URL based on breed: affenpinscher", async () => {
      const breed = "affenpinscher";
      await getDogImagesByBreed(breed);
      expect(fetch).toHaveBeenLastCalledWith(
        "https://dog.ceo/api/breed/affenpinscher/images"
      );
    });
  });
}
