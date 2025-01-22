
function AboutPage() {
  return (
    <div className="flex flex-grow bg-[#E9F1E4]">
  <div className="m-auto flex flex-col justify-center md:w-1.0/2">
    <div className="my-4 mx-5 flex flex-col rounded-md border-4 border-[#386641] bg-white p-6 shadow-xl">
      <h2 className="m-3 text-center text-2xl font-bold text-[#386641]">
           About SparkFund
          </h2>
          <p className="my-2 text-lg text-gray-700">
            Welcome to <strong>SparkFund</strong>, a platform dedicated to
            empowering dreams and fostering positive change. We connect
            individuals, communities, and organizations with the resources they
            need to bring their ideas to life. Our mission is to make
            fundraising easy, transparent, and impactful for everyone.
          </p>
          <h3 className="mt-4 mb-2 text-xl font-semibold text-[#6A994E]">
            Why Choose SparkFund?
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Trusted by over <strong>10,000+</strong> users worldwide.</li>
            <li>Offers diverse fundraising categories like Medical, Education, Sports, Environment, and more.</li>
            <li>Ensures transparency by tracking contributions and campaign progress in real-time.</li>
            <li>Empowers communities with tools to achieve their goals.</li>
          </ul>
          <h3 className="mt-4 mb-2 text-xl font-semibold text-[#6A994E]">
            Our Vision
          </h3>
          <p className="text-lg text-gray-700">
            At SparkFund, we envision a world where financial barriers do not
            limit innovation, assistance, or education. Together, we can build
            a more supportive and inclusive future by connecting those who want
            to help with those who need it most.
          </p>
          {/* <img
            src="/teamwork.jpg"
            alt="Teamwork"
            className="mt-6 w-full max-w-lg rounded shadow-lg self-center"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
