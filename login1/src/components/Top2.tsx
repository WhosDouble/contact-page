function Top2() {
  let para = `Whether you'd like a demo, have a support question, or a pricing related
        query, just`;
  let span = "get in touch";
  return (
    <div className="w-full flex flex-col justify-center text-center">
      <h3 className="text-[#FF8225] text-[13px] pt-20">CONTACT US</h3>
      <h1 className="text-white text-[45px] font-semibold pb-3">
        We're always here to help.
      </h1>
      <h4 className="text-[rgba(255,255,255,0.3)] pb-16">
        {para} <span className="font-semibold">{span}</span>
      </h4>
    </div>
  );
}
export default Top2;
