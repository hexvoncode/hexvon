const Testimonial = () => {
  return (
    <div className="text-center mt-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <h1 className="text-white border text-center rounded-full border-white py-2 px-8 inline-block mb-4">
        Testimonials
      </h1>
      <h2 className="text-white text-center text-3xl font-bold mt-5 sm:text-3xl">
        Clients Feedback
      </h2>
      <p className="text-[#CBCBCB] lg:w-[550px] w-full mx-auto text-center mt-6 sm:px-4 sm:text-sm">
        We are trusted by 10,000+ global customer teams who have worked on
        projects using this template.
      </p>
    {/* review card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 lg:mt-20 md:mt-14 sm:mt-8">
        <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg w-full min-h-[250px] sm:min-h-[300px]">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
            <h1 className="text-sm font-semibold text-[#CBCBCB] mb-2 opacity-65 text-left">
              Design Excellence
            </h1>
            <p className="text-[#CBCBCB] opacity-65 mb-4 text-sm sm:text-base text-left">
              "Our approach is fueled by a team passionate about creating,
              learning, and innovating together, ensuring we uncover
              possibilities others overlook."
            </p>
            <p className="text-sm text-white text-left">- Jessica Sherlock</p>
            <h1 className="text-sm text-[#CBCBCB] opacity-65 mt-2 text-left">
              Manager, Oitaka
            </h1>
          </div>
        </div>
        <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg w-full min-h-[250px] sm:min-h-[300px]">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
            <h1 className="text-sm font-semibold text-[#CBCBCB] mb-2 opacity-65 text-left">
              Design Excellence
            </h1>
            <p className="text-[#CBCBCB] opacity-65 mb-4 text-sm sm:text-base text-left">
              "The flexibility and ease of use are amazing. We are able to
              deliver our projects faster than ever."
            </p>
            <p className="text-sm text-white text-left">- James Smith</p>
            <h1 className="text-sm text-[#CBCBCB] opacity-65 mt-2 text-left">
            CodeCrafters
            </h1>
          </div>
        </div>
        <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg w-full min-h-[250px] sm:min-h-[300px]">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
            <h1 className="text-sm font-semibold text-[#CBCBCB] mb-2 opacity-65 text-left">
              Design Excellence
            </h1>
            <p className="text-[#CBCBCB] opacity-65 mb-4 text-sm sm:text-base text-left">
              "An amazing experience! The customer support team was incredible,
              and we couldn't be happier with the results."
            </p>
            <p className="text-sm text-white text-left">- Emily Thompson</p>
            <h1 className="text-sm text-[#CBCBCB] opacity-65 mt-2 text-left">
            Digital Innovators
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
