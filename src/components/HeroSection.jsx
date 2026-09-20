// import heroImg from "../assets/herobaner.webp";

// function HeroSection() {
//   return (
//     <section className="relative w-full overflow-hidden">
//       <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] max-h-[550px]">
//         <img
//           src={heroImg}
//           alt="Hero Banner"
//           className="w-full h-full object-cover object-center shadow-md"
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


import heroImg from "../assets/PujaSamagribaner1.jpeg";

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] max-h-[550px]">
        <img
          src={heroImg}
          alt="Hero Banner"
          className="w-full h-full object-cover object-center shadow-md"
        />
      </div>
    </section>
  );
}

export default HeroSection;