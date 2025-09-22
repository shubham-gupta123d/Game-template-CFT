import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[100px] items-center">
        <div className="flex justify-center md:justify-end">
          <img
            src="/about.png"
            alt="Lotto Cards"
            className="max-w-full h-auto"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
            ABOUT US
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We offer the possibility to play the world’s biggest lotteries
            online. Our site was designed with a lottery player in mind. We are
            lotto fans ourselves, therefore we know what it takes to satisfy
            one.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our team is built up with lottery enthusiasts, but also industry
            professionals. Our designers and developers ensure the smoothest
            lotto playing experience. Support is also a pillar of our
            operations. Our agents are always thriving to help.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Your satisfaction is our goal!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
