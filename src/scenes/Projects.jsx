import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Proje1 from "../assets/project-1.jpeg";
import Proje4 from "../assets/project-4.jpeg";
import Proje5 from "../assets/project-5.jpeg";
import Proje7 from "../assets/project-7.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-10 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mt-32">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center ">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-20">
        I have experience in designing e-commerce, corporate websites, and landing pages.

        </p>
      </motion.div>

      <div className="mx-auto w-full h-full justify-items-center">
        <motion.div
          className="sm:grid sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full h-full grid gap-x-4 gap-y-2 grid-cols-3 justify-items-center mx-96 my-3 ">
            <div
              className="flex justify-center text-center items-center p-10 bg-red
              max-w-[300px] max-h-[300px] text-2xl font-playfair font-semibold"
            >
              BEAUTIFUL USER INTERFACES
            </div>

            <div>
              <img src={Proje1} alt="proje" className="w-full h-full" />
            </div>
            <div>
              <img src={Proje4} alt="proje" className="w-full h-full" />
            </div>
            <div>
              <img src={Proje5} alt="proje" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <img src={Proje7} alt="proje" className="w-full h-full" />
            </div>
            <div
              className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[300px] max-h-[300px] text-2xl font-playfair font-semibold"
            >
              SMOOTH USER EXPERIENCE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
