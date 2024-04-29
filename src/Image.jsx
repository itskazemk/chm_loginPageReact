function Image() {
  return (
    <div className="bg-red-400 md:w-1/2 h-screen overflow-hidden relative flex justify-center items-center">
      <img
        src="/image.webp"
        className="object-cover object-center absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export default Image;
