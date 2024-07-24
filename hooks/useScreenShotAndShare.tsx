import { useRef, useState } from "react";
import Share from 'react-native-share';
import ViewShot from "react-native-view-shot";

interface Captureable extends ViewShot {
  capture(): Promise<any>;
}

const useScreenshotAndShare = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const ref = useRef<Captureable>(null);

  const takeScreenshot = () => {
    if (ref.current) {
      ref.current.capture().then((uri: string) => {
        console.log("capture image uri", uri);
        setImageUrl(uri);
      });
    } else {
      console.error("ref.current is undefined");
    }
  };

  const shareScreenshot = () => {
    if (imageUrl) {
      const options = {
        url: imageUrl,
        message: 'Share your image'
      };
      Share.open(options);
    } else {
      alert('Please take a screenshot');
    }
  };

  return { ref, takeScreenshot, shareScreenshot };
};

export default useScreenshotAndShare;
