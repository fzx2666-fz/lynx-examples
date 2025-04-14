import { furnituresPictures } from "@assets/furnitures/furnituresPictures.jsx";
import { root } from "@lynx-js/react";
import Gallery from "./Gallery.jsx";

function ScrollbarCompare() {
  return <Gallery pictureData={furnituresPictures} />;
}

root.render(<ScrollbarCompare />);
