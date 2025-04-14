import { furnituresPictures } from "@assets/furnitures/furnituresPictures.jsx";
import LikeImageCard from "./LikeImageCard.jsx";
import "@styles";

import { root } from "@lynx-js/react";

function FirstImageCard() {
  const MyFirstPicture = furnituresPictures[0];
  return (
    <view className="gallery-wrapper single-card">
      <LikeImageCard picture={MyFirstPicture} />
    </view>
  );
}

root.render(<FirstImageCard />);
