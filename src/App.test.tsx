import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { PhotoViewer } from './PhotoViewerComponent/PhotoViewer';
import { ImageSelector } from './ImageSelectorComponent/ImageSelector';
import { getImageUrls } from './ImageSelectorComponent/ImageSelector';
import renderer from 'react-test-renderer';
import { create } from 'react-test-renderer';

// test('renders Hello world text', () => {
//   const { getByText } = render(<App />);
//   const textElement = getByText(/Hello world/i);
//   expect(textElement).toBeInTheDocument();
// });



// check that this is the first image
// https://picsum.photos/id/223/1600/900.jpg

test('src contains correct value', () => {
  render(<PhotoViewer src="https://picsum.photos/id/223/1600/900.jpg" />)
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage.src).toContain("https://picsum.photos/id/223/1600/900.jpg");
});

test('src contains correct image value', () => {

  const imageUrls = getImageUrls();
  expect(imageUrls[0]).toContain("https://picsum.photos/id/600/1600/900.jpg");
})

test('getImagesUrls function does not include broken image', () => {

  const imageUrls = getImageUrls();
  expect(imageUrls).not.toContain("https://picsum.photos/id/601/1600/900.jpg");

})


describe("My Component", () => {
  it("Should match snapshot without src prop", async () => {
    const tree = create(<PhotoViewer src="https://picsum.photos/id/223/1600/900.jpg" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
