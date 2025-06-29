const Banner = () => {
  return (
    <div className="md:flex-row-reverse md:flex justify-evenly items-center text-black">
      <div className="text-center py-10">
        <div className="avatar z-10">
          <div className="ring-primary ring-offset-base-100 w-48 md:w-72 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
      </div>
      <div className="py-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">GOLAM ROBBANI</h1>
        <h3 className="text-lg md:text-2xl mb-1 md:mb-2">Web Developer</h3>
        <p className="text-xl md:max-w-[50vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsam?
        </p>
        <div className="flex my-3 md:my-4 gap-4">
          <button className="btn btn-circle">x</button>
          <button className="btn btn-circle">x</button>
          <button className="btn btn-circle">x</button>
        </div>
        <button className="btn btn-secondary my-4">Download Resume</button>
      </div>
    </div>
  );
};
export default Banner;
