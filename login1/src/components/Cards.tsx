import Top2 from "./Top2";
//array for card data
let cardInfo = [
  {
    title: "Email us",
    desc: "Write to us at hello@rangocode@gmail.com We are constantly looking at our inbox.",
    buttonTitle: "Get in touch",
  },
  {
    title: "Talk to us",
    desc: "Take a 20-minute demo, to learn how Rango can be tailored to tackle your specific needs. Choose a time-slot that works best for you.",
    buttonTitle: "Request a demo",
  },
  {
    title: "Documentation",
    desc: "Write to us at hello@rangocode@gmail.com We are constantly looking at our inbox.",
    buttonTitle: "Visit help center",
  },
];

//creating the cards contact section
function Cards() {
  const CardList = cardInfo.map((card) => (
    <div className="flex flex-col w-full max-w-[350px] rounded-2xl h-[400px] justify-center mb-10 items-center text-center bg-gradient-to-b from-[#3D3B40]">
      <div className="flex items-center justify-center w-full max-w-[60px] h-[60px] bg-[#FF8225] border rounded-lg ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
        </svg>
      </div>
      <h1 className="text-center text-white text-[19px] pb-6">{card.title}</h1>
      <p className="text-[rgba(255,255,255,0.5)]">{card.desc}</p>
      <button className="text-white mt-24 border-2 border-[#FF8225] p-2 rounded-3xl w-[210px]">
        {card.buttonTitle}
      </button>
    </div>
  ));

  return (
    <div>
      <Top2 />
      <div className="">
        <div className="flex justify-center gap-10">{CardList}</div>
      </div>
    </div>
  );
}
export default Cards;
