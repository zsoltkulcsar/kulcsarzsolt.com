const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gray-300 h-screen flex flex-col items-center justify-center p-10 transition-all duration-500"
    >
      <h2 className="text-4xl font-extrabold text-center">Contact Section</h2>
      <p className="text-lg mt-2 opacity-80 text-center">
        Welcome to the Contact section. 🚧
      </p>
      <div className="mt-5 flex flex-col items-center">
        <p className="text-2xl font-semibold">
          This section is currently under construction!
        </p>
        <div className="flex items-center space-x-3 mt-4">
          <span className="w-4 h-4 bg-yellow-500 rounded-full animate-ping"></span>
          <span className="text-lg">Please check back soon. 👷‍♂️</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
