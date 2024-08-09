import Top from "./Top";
function Rectangle() {
  return (
    <div className="w-full flex flex-col justify-center bg-[#f7edd1b2] items-center">
      <Top />
      <div className="w-full flex flex-col max-w-[500px] bg-white border rounded p-7 mb-20">
        <div className="flex flex-col justify-center pb-6">
          <label className="pb-2">Name</label>
          <input
            className="h-10 border rounded p-3"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="flex flex-col pb-6">
          <label className="pb-2">Email</label>
          <input
            className="h-10 border rounded p-3"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="flex flex-col pb-6">
          <label className="pb-2">Company</label>
          <input
            className="h-10 border rounded p-3"
            type="text"
            placeholder="Company"
          />
        </div>
        <div className="flex flex-col pb-6">
          <label className="pb-2">Message</label>
          <textarea
            className="max-h-36 min-h-36 border rounded p-3"
            placeholder="Send us a Message"
          ></textarea>
        </div>
        <div className="flex w-full justify-center">
          <button className="p-1 bg-black w-[120px] rounded-2xl text-white">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
export default Rectangle;
