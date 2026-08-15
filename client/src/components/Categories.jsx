


// import React, { useEffect, useRef } from "react";

// import almond from "../assets/almond.png";
// import dates from "../assets/dates.png";
// import pista from "../assets/pista.png";
// import raisin from "../assets/raisin.png";
// import walnut from "../assets/walnut.png";
// import fig from "../assets/fig.png";
// import cashew from "../assets/cashew.png";

// function Categories() {
//   const categories = [
//     {
//       name: "Cashew",
//       image: cashew,
//       bg: "bg-[#67A9B0]",
//     },
//     {
//       name: "Almond",
//       image: almond,
//       bg: "bg-[#B08B7C]",
//     },
//     {
//       name: "Raisin",
//       image: raisin,
//       bg: "bg-[#B88757]",
//     },
//     {
//       name: "Walnut",
//       image: walnut,
//       bg: "bg-[#B06F67]",
//     },
//     {
//       name: "Pista",
//       image: pista,
//       bg: "bg-[#93C572]",
//     },
//     {
//       name: "Dates",
//       image: dates,
//       bg: "bg-[#E0713B]",
//     },
//     {
//       name: "Fig",
//       image: fig,
//       bg: "bg-[#D18CAC]",
//     },
//   ];

//   const sliderRef = useRef(null);

//   // ==========================================
//   // CONTINUOUS AUTO SCROLL
//   // ==========================================

//   useEffect(() => {
//     const slider = sliderRef.current;

//     if (!slider) return;

//     let animationFrame;
//     let isPaused = false;

//     const speed = 0.5;

//     const moveSlider = () => {
//       if (!isPaused) {
//         slider.scrollLeft += speed;

//         /*
//           Since the categories are duplicated,
//           once the first complete set has passed,
//           move back by half of the scroll width.

//           This creates the infinite loop.
//         */

//         const loopPoint = slider.scrollWidth / 2;

//         if (slider.scrollLeft >= loopPoint) {
//           slider.scrollLeft -= loopPoint;
//         }
//       }

//       animationFrame =
//         requestAnimationFrame(moveSlider);
//     };

//     animationFrame =
//       requestAnimationFrame(moveSlider);

//     // ==========================================
//     // PAUSE ON HOVER
//     // ==========================================

//     const pauseSlider = () => {
//       isPaused = true;
//     };

//     const resumeSlider = () => {
//       isPaused = false;
//     };

//     slider.addEventListener(
//       "mouseenter",
//       pauseSlider,
//     );

//     slider.addEventListener(
//       "mouseleave",
//       resumeSlider,
//     );

//     // ==========================================
//     // PAUSE ON TOUCH
//     // ==========================================

//     slider.addEventListener(
//       "touchstart",
//       pauseSlider,
//       { passive: true },
//     );

//     slider.addEventListener(
//       "touchend",
//       resumeSlider,
//       { passive: true },
//     );

//     return () => {
//       cancelAnimationFrame(animationFrame);

//       slider.removeEventListener(
//         "mouseenter",
//         pauseSlider,
//       );

//       slider.removeEventListener(
//         "mouseleave",
//         resumeSlider,
//       );

//       slider.removeEventListener(
//         "touchstart",
//         pauseSlider,
//       );

//       slider.removeEventListener(
//         "touchend",
//         resumeSlider,
//       );
//     };
//   }, []);

//   return (
//     <section
//       className="
//         w-full
//         bg-[#F5F3F0]

//         py-5
//         sm:py-7
//         md:py-10

//         overflow-hidden
//       "
//     >

//       {/* ==========================================
//           OUTER PADDING

//           IMPORTANT:
//           Padding is outside the scrolling area.
//           Therefore cards are clipped exactly at
//           these boundaries.
//       =========================================== */}

//       <div
//         className="
//           w-full

//           pl-5
//           pr-5

//           sm:pl-8
//           sm:pr-8

//           md:pl-12
//           md:pr-12

//           overflow-hidden
//         "
//       >

//         {/* ========================================
//             SCROLLING WINDOW
//         ========================================= */}

//         <div
//           ref={sliderRef}
//           className="
//             flex

//             gap-3
//             sm:gap-4
//             md:gap-5

//             overflow-hidden

//             scrollbar-hide
//           "
//         >

//           {/* ========================================
//               FIRST SET
//           ========================================= */}

//           {categories.map((item, index) => (
//             <CategoryCard
//               key={`first-${index}`}
//               item={item}
//             />
//           ))}

//           {/* ========================================
//               DUPLICATE SET
//           ========================================= */}

//           {categories.map((item, index) => (
//             <CategoryCard
//               key={`second-${index}`}
//               item={item}
//             />
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// // ==================================================
// // CATEGORY CARD
// // ==================================================

// function CategoryCard({ item }) {
//   return (
//     <div
//       className={`
//         ${item.bg}

//         relative
//         flex-shrink-0

//         /* MOBILE */

//         min-w-[150px]
//         w-[150px]
//         h-[220px]

//         /* TABLET */

//         sm:min-w-[190px]
//         sm:w-[190px]
//         sm:h-[270px]

//         /* DESKTOP */

//         md:min-w-[240px]
//         md:w-[240px]
//         md:h-[340px]

//         rounded-[24px]
//         sm:rounded-[28px]
//         md:rounded-[35px]

//         overflow-hidden

//         flex
//         flex-col
//         justify-end

//         p-5
//         sm:p-6
//         md:p-8

//         shadow-lg

//         group
//         cursor-pointer

//         transition-all
//         duration-500

//         hover:shadow-2xl
//       `}
//     >

//       {/* ========================================
//           IMAGE
//       ========================================= */}

//       <div
//         className="
//           absolute
//           inset-0

//           flex
//           items-center
//           justify-center
//         "
//       >
//         <img
//           src={item.image}
//           alt={item.name}
//           draggable="false"
//           className="
//             w-32
//             h-32

//             sm:w-40
//             sm:h-40

//             md:w-52
//             md:h-52

//             object-contain

//             transition-transform
//             duration-500

//             group-hover:scale-110
//             md:group-hover:scale-125

//             group-hover:-translate-y-4
//             md:group-hover:-translate-y-8

//             drop-shadow-2xl
//           "
//         />
//       </div>

//       {/* ========================================
//           BOTTOM GRADIENT
//       ========================================= */}

//       <div
//         className="
//           absolute
//           inset-x-0
//           bottom-0

//           h-24
//           sm:h-28
//           md:h-32

//           bg-gradient-to-t
//           from-black/30
//           via-black/10
//           to-transparent

//           pointer-events-none
//         "
//       />

//       {/* ========================================
//           CATEGORY NAME
//       ========================================= */}

//       <h3
//         className="
//           text-white

//           text-xl
//           sm:text-2xl
//           md:text-4xl

//           font-semibold

//           relative
//           z-10
//         "
//       >
//         {item.name}
//       </h3>

//     </div>
//   );
// }

// export default Categories;



// import React, { useEffect, useRef, useState } from "react";

// import almond from "../assets/almond.png";
// import dates from "../assets/dates.png";
// import pista from "../assets/pista.png";
// import raisin from "../assets/raisin.png";
// import walnut from "../assets/walnut.png";
// import fig from "../assets/fig.png";
// import cashew from "../assets/cashew.png";

// function Categories() {
//   const categories = [
//     {
//       name: "Cashew",
//       image: cashew,
//       bg: "bg-[#67A9B0]",
//     },
//     {
//       name: "Almond",
//       image: almond,
//       bg: "bg-[#B08B7C]",
//     },
//     {
//       name: "Raisin",
//       image: raisin,
//       bg: "bg-[#B88757]",
//     },
//     {
//       name: "Walnut",
//       image: walnut,
//       bg: "bg-[#B06F67]",
//     },
//     {
//       name: "Pista",
//       image: pista,
//       bg: "bg-[#93C572]",
//     },
//     {
//       name: "Dates",
//       image: dates,
//       bg: "bg-[#E0713B]",
//     },
//     {
//       name: "Fig",
//       image: fig,
//       bg: "bg-[#D18CAC]",
//     },
//   ];

//   const sliderRef = useRef(null);

//   // Card currently being touched on mobile
//   const [activeCard, setActiveCard] = useState(null);

//   // ==========================================
//   // CONTINUOUS AUTO SCROLL
//   // ==========================================

//   useEffect(() => {
//     const slider = sliderRef.current;

//     if (!slider) return;

//     let animationFrame;
//     let isPaused = false;

//     const speed = 0.5;

//     const moveSlider = () => {
//       if (!isPaused) {
//         slider.scrollLeft += speed;

//         // Infinite loop
//         const loopPoint = slider.scrollWidth / 2;

//         if (slider.scrollLeft >= loopPoint) {
//           slider.scrollLeft -= loopPoint;
//         }
//       }

//       animationFrame = requestAnimationFrame(moveSlider);
//     };

//     animationFrame = requestAnimationFrame(moveSlider);

//     // ==========================================
//     // DESKTOP HOVER
//     // ==========================================

//     const pauseSlider = () => {
//       isPaused = true;
//     };

//     const resumeSlider = () => {
//       isPaused = false;
//     };

//     slider.addEventListener(
//       "mouseenter",
//       pauseSlider,
//     );

//     slider.addEventListener(
//       "mouseleave",
//       resumeSlider,
//     );

//     return () => {
//       cancelAnimationFrame(animationFrame);

//       slider.removeEventListener(
//         "mouseenter",
//         pauseSlider,
//       );

//       slider.removeEventListener(
//         "mouseleave",
//         resumeSlider,
//       );
//     };
//   }, []);

//   return (
//     <section
//       className="
//         w-full
//         bg-[#F5F3F0]

//         py-5
//         sm:py-7
//         md:py-10

//         overflow-hidden
//       "
//     >
//       {/* ==========================================
//           OUTER PADDING
//       =========================================== */}

//       <div
//         className="
//           w-full

//           pl-5
//           pr-5

//           sm:pl-8
//           sm:pr-8

//           md:pl-12
//           md:pr-12

//           overflow-hidden
//         "
//       >
//         {/* ========================================
//             SCROLLING WINDOW
//         ========================================= */}

//         <div
//           ref={sliderRef}
//           className="
//             flex

//             gap-3
//             sm:gap-4
//             md:gap-5

//             overflow-hidden

//             scrollbar-hide

//             select-none

//             touch-none
//           "
//         >
//           {/* ========================================
//               FIRST SET
//           ======================================== */}

//           {categories.map((item, index) => (
//             <CategoryCard
//               key={`first-${index}`}
//               item={item}
//               cardId={`first-${index}`}
//               activeCard={activeCard}
//               setActiveCard={setActiveCard}
//             />
//           ))}

//           {/* ========================================
//               DUPLICATE SET
//           ======================================== */}

//           {categories.map((item, index) => (
//             <CategoryCard
//               key={`second-${index}`}
//               item={item}
//               cardId={`second-${index}`}
//               activeCard={activeCard}
//               setActiveCard={setActiveCard}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ==================================================
// // CATEGORY CARD
// // ==================================================

// function CategoryCard({
//   item,
//   cardId,
//   activeCard,
//   setActiveCard,
// }) {
//   const isActive = activeCard === cardId;

//   return (
//     <div
//       onTouchStart={() => {
//         setActiveCard(cardId);
//       }}
//       onTouchEnd={() => {
//         setActiveCard(null);
//       }}
//       onTouchCancel={() => {
//         setActiveCard(null);
//       }}
//       className={`
//         ${item.bg}

//         relative
//         flex-shrink-0

//         /* MOBILE */

//         min-w-[150px]
//         w-[150px]
//         h-[220px]

//         /* TABLET */

//         sm:min-w-[190px]
//         sm:w-[190px]
//         sm:h-[270px]

//         /* DESKTOP */

//         md:min-w-[240px]
//         md:w-[240px]
//         md:h-[340px]

//         rounded-[24px]
//         sm:rounded-[28px]
//         md:rounded-[35px]

//         overflow-hidden

//         flex
//         flex-col
//         justify-end

//         p-5
//         sm:p-6
//         md:p-8

//         shadow-lg

//         group
//         cursor-pointer

//         transition-all
//         duration-500

//         ${
//           isActive
//             ? "scale-110 shadow-2xl"
//             : "scale-100"
//         }

//         md:hover:scale-105
//         md:hover:shadow-2xl
//       `}
//     >
//       {/* ========================================
//           IMAGE
//       ========================================= */}

//       <div
//         className="
//           absolute
//           inset-0

//           flex
//           items-center
//           justify-center

//           pointer-events-none
//         "
//       >
//         <img
//           src={item.image}
//           alt={item.name}
//           draggable="false"
//           className={`
//             object-contain

//             transition-transform
//             duration-500

//             w-32
//             h-32

//             sm:w-40
//             sm:h-40

//             md:w-52
//             md:h-52

//             ${
//               isActive
//                 ? "scale-125 -translate-y-5"
//                 : "scale-100"
//             }

//             md:group-hover:scale-125
//             md:group-hover:-translate-y-8

//             drop-shadow-2xl
//           `}
//         />
//       </div>

//       {/* ========================================
//           BOTTOM GRADIENT
//       ========================================= */}

//       <div
//         className="
//           absolute
//           inset-x-0
//           bottom-0

//           h-24
//           sm:h-28
//           md:h-32

//           bg-gradient-to-t
//           from-black/30
//           via-black/10
//           to-transparent

//           pointer-events-none
//         "
//       />

//       {/* ========================================
//           CATEGORY NAME
//       ========================================= */}

//       <h3
//         className="
//           text-white

//           text-xl
//           sm:text-2xl
//           md:text-4xl

//           font-semibold

//           relative
//           z-10

//           pointer-events-none
//         "
//       >
//         {item.name}
//       </h3>
//     </div>
//   );
// }

// export default Categories;





import React, { useEffect, useRef, useState } from "react";

import almond from "../assets/almond.png";
import dates from "../assets/dates.png";
import pista from "../assets/pista.png";
import raisin from "../assets/raisin.png";
import walnut from "../assets/walnut.png";
import fig from "../assets/fig.png";
import cashew from "../assets/cashew.png";

function Categories() {
  const categories = [
    {
      name: "Cashew",
      image: cashew,
      bg: "bg-[#67A9B0]",
    },
    {
      name: "Almond",
      image: almond,
      bg: "bg-[#B08B7C]",
    },
    {
      name: "Raisin",
      image: raisin,
      bg: "bg-[#B88757]",
    },
    {
      name: "Walnut",
      image: walnut,
      bg: "bg-[#B06F67]",
    },
    {
      name: "Pista",
      image: pista,
      bg: "bg-[#93C572]",
    },
    {
      name: "Dates",
      image: dates,
      bg: "bg-[#E0713B]",
    },
    {
      name: "Fig",
      image: fig,
      bg: "bg-[#D18CAC]",
    },
  ];

  const sliderRef = useRef(null);

  const [activeCard, setActiveCard] = useState(null);

  // ==========================================
  // CONTINUOUS AUTO SCROLL
  // ==========================================

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let animationFrame;

    const speed = 0.5;

    const moveSlider = () => {
      slider.scrollLeft += speed;

      const loopPoint = slider.scrollWidth / 2;

      if (slider.scrollLeft >= loopPoint) {
        slider.scrollLeft -= loopPoint;
      }

      animationFrame =
        requestAnimationFrame(moveSlider);
    };

    animationFrame =
      requestAnimationFrame(moveSlider);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      className="
        w-full
        bg-[#F5F3F0]

        py-5
        sm:py-7
        md:py-10

        overflow-hidden
      "
    >
      {/* ==========================================
          OUTER PADDING
      =========================================== */}

      <div
        className="
          w-full

          pl-5
          pr-5

          sm:pl-8
          sm:pr-8

          md:pl-12
          md:pr-12

          overflow-hidden
        "
      >
        {/* ========================================
            SLIDER
        ========================================= */}

        <div
          ref={sliderRef}
          className="
            flex

            gap-3
            sm:gap-4
            md:gap-5

            overflow-hidden

            scrollbar-hide

            select-none

            touch-pan-y
          "
        >
          {/* FIRST SET */}

          {categories.map((item, index) => (
            <CategoryCard
              key={`first-${index}`}
              item={item}
              cardId={`first-${index}`}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}

          {/* DUPLICATE SET */}

          {categories.map((item, index) => (
            <CategoryCard
              key={`second-${index}`}
              item={item}
              cardId={`second-${index}`}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================================================
// CATEGORY CARD
// ==================================================

function CategoryCard({
  item,
  cardId,
  activeCard,
  setActiveCard,
}) {
  const isActive = activeCard === cardId;

  return (
    <div
      onTouchStart={() => {
        setActiveCard(cardId);
      }}
      onTouchEnd={() => {
        setActiveCard(null);
      }}
      onTouchCancel={() => {
        setActiveCard(null);
      }}
      className={`
        ${item.bg}

        relative
        flex-shrink-0

        /* MOBILE */

        min-w-[150px]
        w-[150px]
        h-[220px]

        /* TABLET */

        sm:min-w-[190px]
        sm:w-[190px]
        sm:h-[270px]

        /* DESKTOP */

        md:min-w-[240px]
        md:w-[240px]
        md:h-[340px]

        rounded-[24px]
        sm:rounded-[28px]
        md:rounded-[35px]

        overflow-hidden

        flex
        flex-col
        justify-end

        p-5
        sm:p-6
        md:p-8

        shadow-lg

        group
        cursor-pointer

        transition-all
        duration-500

        ${
          isActive
            ? "scale-105 shadow-2xl"
            : "scale-100"
        }

        md:hover:scale-105
        md:hover:shadow-2xl
      `}
    >
      {/* ========================================
          IMAGE
      ========================================= */}

      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center

          pointer-events-none
        "
      >
        <img
          src={item.image}
          alt={item.name}
          draggable="false"
          className={`
            object-contain

            transition-transform
            duration-500

            w-32
            h-32

            sm:w-40
            sm:h-40

            md:w-52
            md:h-52

            ${
              isActive
                ? "scale-125 -translate-y-5"
                : "scale-100"
            }

            md:group-hover:scale-125
            md:group-hover:-translate-y-8

            drop-shadow-2xl
          `}
        />
      </div>

      {/* ========================================
          BOTTOM GRADIENT
      ========================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0

          h-24
          sm:h-28
          md:h-32

          bg-gradient-to-t
          from-black/30
          via-black/10
          to-transparent

          pointer-events-none
        "
      />

      {/* ========================================
          CATEGORY NAME
      ========================================= */}

      <h3
        className="
          text-white

          text-xl
          sm:text-2xl
          md:text-4xl

          font-semibold

          relative
          z-10

          pointer-events-none
        "
      >
        {item.name}
      </h3>
    </div>
  );
}

export default Categories;