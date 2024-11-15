import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
export default function Carasouel() {
  const [active, setaAtive] = useState(0);
  const arr = [
    {
      src: "https://noota.io/wp-content/uploads/2022/03/fnsea-e1653063961966.webp",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/03/SciencesPo-e1653063754874.webp",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/05/ecoles.webp",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/03/Kantar.webp",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/03/Opinionway-e1653063659741.webp",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/05/image-17-1.png",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/03/SciencesPo-e1653063754874.webp",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/05/ecoles.webp",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/03/Kantar.webp",
    },
    {
      src: "https://noota.io/wp-content/uploads/2022/03/Opinionway-e1653063659741.webp",
    },
  ];
  return (
    <div style={{ padding: "4rem" }}>
      <ItemsCarousel
        infiniteLoop={false}
        gutter={0}
        activePosition={"center"}
        chevronWidth={14}
        disableSwipe={true}
        alwaysShowChevrons={true}
        numberOfCards={6}
        slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={(value) => setaAtive(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
        {arr.map((item, i) => (
          <div
            style={{
              margin: "auto",
            }}
          >
            <img
              src={item.src}
              alt="img"
              style={{
                width: "70%",
              }}
            />
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
}
