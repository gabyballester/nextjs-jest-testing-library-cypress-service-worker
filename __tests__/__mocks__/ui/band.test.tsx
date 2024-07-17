// This test is for -> pages\bands\[bandId].tsx
// Frontend route -> http://localhost:3000/bands/93661

import { render, screen } from "@testing-library/react";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandComponent from "@/pages/bands/[bandId]";
import { Band } from "@/lib/features/bands/types";

// Mock the next/image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("Band Tests", () => {
  let fakeBands: (Band | null)[];

  beforeEach(async () => {
    const data = await readFakeData();
    fakeBands = data.fakeBands;
  });

  test("band component displays correct band information", async () => {
    render(<BandComponent band={fakeBands[0]} error={null} />);

    const heading = await screen.findByRole("heading", {
      name: /the wandering bunnies/i,
    });
    expect(heading).toBeInTheDocument();

    const description = await screen.findByText(
      /blistering world music, supported by a moody water glass orchestra/i
    );
    expect(description).toBeInTheDocument();

    const image = await screen.findByAltText("band photo");
    expect(image).toHaveAttribute("src", "/band-images/band15.jpg");
  });

  test("band component displays error", () => {
    render(<BandComponent band={null} error="EVERYTHING IS FINE" />);

    const error = screen.getByRole("heading", { name: /everything is fine/i });
    expect(error).toBeInTheDocument();
  });
});
