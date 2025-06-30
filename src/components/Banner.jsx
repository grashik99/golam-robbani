import golam_robbani from "../assets/golam_robbani.png";
import resume from "../assets/Golam_robbani_resume.pdf"
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
const Banner = () => {
  return (
    <div className="md:flex-row-reverse md:flex min-h-[70vh] justify-evenly items-center text-black">
      <div className="text-center py-10">
        <div className="avatar z-10">
          <div className="ring-primary ring-offset-base-100 w-48 md:w-72 rounded-full ring-2 ring-offset-2">
            <img src={golam_robbani} />
          </div>
        </div>
      </div>
      <div className="py-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          GOLAM ROBBANI
        </h1>
        <h3 className="text-lg md:text-2xl mb-1 md:mb-2">Web Developer</h3>
        <p className="text-xl  md:max-w-[50vw]">
          Crafting clean, responsive, and user-first web experiences. Bringing creativity and code together.
        </p>
        <div className="flex my-3 md:my-4 gap-4">
          <a
            target="_blank"
            href="https://github.com/grashik99"
            className="btn btn-circle text-3xl "
          >
            <img src={github} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/golamrobbani55/"
            className="btn btn-circle text-3xl"
          >
            <img src={linkedin} />
          </a>
          <a target="_blank" href="https://x.com/grashik55" className="btn btn-circle">
            <img src={twitter} />
          </a>
        </div>
        <a download href={resume} className="btn btn-secondary my-4">Download Resume</a>
      </div>
    </div>
  );
};
export default Banner;
