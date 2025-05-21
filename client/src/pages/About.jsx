

const About = () => {
  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto text-gray-900 font-sans bg-white-50">

      {/* About Us Title */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="text-2xl font-medium text-yellow-800">
          About <strong className="font-bold">US</strong>
        </h2>
      </div>

      {/* About Content */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <img
          src="assets/aboutUs.jpg"
          alt="About"
          className="w-80 h-[420px] object-cover rounded-xl shadow-lg border border-gray-200"
        />
        <div className="flex-1 max-w-lg space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-yellow-700">JeweliaLuxe</span>, we’re more than just an online store — we’re a lifestyle movement. Created for dreamers, doers, and trendsetters, our brand exists to bring style, comfort, and uniqueness into your everyday life.
          </p>
          <p>
            From must-have fashion pieces to everyday essentials, we handpick each item with love and purpose. Whether you're curating your closet or gifting something special, we've got your back with items that speak your vibe.
          </p>
          <p>
            We aim to inspire confidence and spark joy through every order. With a focus on simplicity, trust, and flair, our mission is to redefine the way you shop online — easy, exciting, and just for you.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 text-left max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-10">
          <h2 className="text-xl md:text-3xl font-semibold tracking-wide uppercase">
            WHY <span className="font-bold text-yellow-700">CHOOSE US</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Handpicked Perfection',
              desc: 'Every product in our collection is chosen with care — only the best styles, trends, and quality make the cut.',
            },
            {
              title: 'Seamless Experience',
              desc: 'From scroll to doorstep, we make shopping smooth, fast, and frustration-free — just the way it should be.',
            },
            {
              title: 'Support that Cares',
              desc: 'Have questions? Our friendly team is here to help you, guide you, and make sure your experience is nothing short of amazing.',
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="border rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="font-semibold text-gray-500 text-lg mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
