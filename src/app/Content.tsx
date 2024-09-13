"use client"; // Pastikan ini ada di paling atas

import { motion } from "framer-motion";
import Image from "next/image";
import firstImage from "../../public/content.jpg"; // Sesuaikan path jika perlu
import secondImage from "../../public/p1.jpg";
import thirdImage from "../../public/p2.jpg";
import fourthImage from "../../public/p3.jpg";

const ContentSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="contentSection py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-0">
        {/* First Content Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mb-20"
        >
          <motion.div variants={fadeInUp} className="lg:w-1/2 lg:pl-16 text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-9">Chats for your distributed teams</h2>
            <p className="mt-4 text-1xl text-gray-700 mb-9 font-semibold">
              Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a href="#" className="mt-4 text-1xl inline-block text-blue-600 hover:underline font-semibold">Learn more →</a>
          </motion.div>
          <motion.div variants={fadeInUp} className="lg:w-1/2">
            <Image src={firstImage} alt="Feature Image" className="mx-auto rounded-lg" />
          </motion.div>
        </motion.div>

        {/* Second Content Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mb-20"
        >
          <motion.div variants={fadeInUp} className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-9">Chats for your distributed teams</h2>
            <p className="mt-4 text-1xl text-gray-700 mb-9 font-semibold">
              Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a href="#" className="mt-4 text-1xl inline-block text-blue-600 hover:underline font-semibold">Learn more →</a>
          </motion.div>
          <motion.div variants={fadeInUp} className="lg:w-1/2">
            <Image src={secondImage} alt="Feature Image" className="mx-auto rounded-lg" />
          </motion.div>
        </motion.div>

        {/* Third Content Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mb-20"
        >
          <motion.div variants={fadeInUp} className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-9">Choose how you want to work</h2>
            <p className="mt-4 text-1xl text-gray-700 mb-9 font-semibold">
              In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
            </p>
            <a href="#" className="mt-4 text-1xl inline-block text-blue-600 hover:underline font-semibold">Learn more →</a>
          </motion.div>
          <motion.div variants={fadeInUp} className="lg:w-1/2">
            <Image src={thirdImage} alt="Feature Image" className="mx-auto rounded-lg" />
          </motion.div>
        </motion.div>

        {/* Fourth Content Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mb-20"
        >
          <motion.div variants={fadeInUp} className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-9">Move faster with your Team tools</h2>
            <p className="mt-4 text-1xl text-gray-700 mb-9 font-semibold">
              With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.
            </p>
            <a href="#" className="mt-4 text-1xl inline-block text-blue-600 hover:underline font-semibold">Learn more →</a>
          </motion.div>
          <motion.div variants={fadeInUp} className="lg:w-1/2">
            <Image src={fourthImage} alt="Feature Image" className="mx-auto rounded-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
