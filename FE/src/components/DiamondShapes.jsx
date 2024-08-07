/**
 * This code was generated by Builder.io.
 */
import React from "react";
<<<<<<< Updated upstream
=======
import styles from "./DiamondShapes.module.css";
>>>>>>> Stashed changes

const diamondShapes = [
  {
    name: "Round",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7097a3d5ab923490bf589663b9e3c1c5e1aecf02afcd8b9c3280d03679064580?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Oval",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b045b2fbe1bdc989ca3b710d262b4562a24bb5e52d549c20e6f2ff558d8d0f86?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Emerald",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b6eeadb71aec087ca2546283e9ff3f16c5bc0b8b0dfdb66408da9e74039f6b5d?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Cushion",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7802d282cd254368bf649f225aea5983a038e82c75149afe9ec4c2f0f12df039?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Pear",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e1f9858fa1c4770bf76d4f4aad2388cfb15a7995bba57e55e983174b59183a9f?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Radiant",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1671950ed13450c9672f0bf091d19c5aece0f4a52c28b3ff0bbeae5b0147c34e?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Princess",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3c80deba44620652ff866d1922dacd116b9cf33fa6f077ac04049a18d3432074?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Marquise",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b55b93a60a3abfb50db3d8decd058aeb451c32f3636f8841024348f221e72f01?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Asscher",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/916fc0520279a24525b09446b6f26caa0049844c578e9ce79a45bf9a1da0ddad?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
  {
    name: "Heart",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa1224b134161b6324c2a4ae1bf8072630de80b702438831fbd45b07302e3739?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
  },
];

<<<<<<< Updated upstream
const DiamondShapes = () => {
  return (
    <section className="flex flex-col py-0.5 pr-20 mt-20 w-full text-center max-w-[1440px] text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-3xl font-medium">
        Shop Diamonds by Shape
      </h2>
      <div className="flex overflow-x-auto gap-5 justify-between mt-9 text-base whitespace-nowrap max-md:flex-wrap max-md:mr-1.5">
        {diamondShapes.map((shape, index) => (
          <div
            key={index}
            className="flex flex-col items-center self-start px-4 pt-2.5 pb-0.5 text-base"
          >
            <img
              loading="lazy"
              src={shape.image}
              alt={`${shape.name} diamond shape`}
              className="aspect-square w-[70px]"
            />
            <div className="mt-3.5">{shape.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
=======
const DiamondShapes = () => (
  <section className={styles.shapesWrapper}>
    <h2 className={styles.shapesTitle}>Shop Diamonds by Shape</h2>
    <div className={styles.shapesGrid}>
      {diamondShapes.map((shape, index) => (
        <div key={index} className={styles.shapeItem}>
          <img
            className={styles.shapeImage}
            loading="lazy"
            src={shape.image}
            alt={`${shape.name} diamond shape`}
          />
          <div className={styles.shapeName}>{shape.name}</div>
        </div>
      ))}
    </div>
  </section>
);
>>>>>>> Stashed changes

export default DiamondShapes;
