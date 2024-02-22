import { useEffect, useState } from "react";
import "./App.css";
import RandomPic from "./components/RandomPic";

function App() {
  const [catImgUrl, setCatImgUrl] = useState(
    "https://cdn2.thecatapi.com/images/ead.jpg"
  );

  useEffect(() => {
    async function getRandomImage() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const result = await response.json();
      console.log(result);
      setCatImgUrl(result[0].url);
    }

    getRandomImage();
  }, []); // <-- Corrected syntax for the dependency array

  return (
    <>
      <RandomPic imgUrl={catImgUrl} />
    </>
  );
}

export default App;
