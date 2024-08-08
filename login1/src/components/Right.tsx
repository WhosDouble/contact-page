function Right() {
  return (
    <div className="p-8 w-full max-w-[450px] border">
      <div className="flex flex-col pb-3">
        <label>Name</label>
        <input
          className="h-10 border rounded p-3"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col pb-3">
        <label>Email</label>
        <input
          className="h-10 border rounded p-3"
          type="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="flex flex-col">
        <label>How Rango help?</label>
        <textarea
          className="max-h-36 min-h-36 border rounded p-3"
          placeholder="Enter your message..."
        ></textarea>
      </div>
      <div className="w-full flex justify-end pt-5">
        <button>Send Message</button>
      </div>
    </div>
  );
}
export default Right;
