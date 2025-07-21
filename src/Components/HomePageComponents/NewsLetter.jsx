export default function NewsLetter() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        {/* Left: Title and Button */}
        <div className="md:col-span-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-cyan-400">NEWS</h2>
          <p className="text-xl font-semibold mt-2">STAY TUNED</p>
         
        </div>

        {/* Right: Articles */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "YK Freightways Expands Operations to Southeast Asia",
              text: "We are proud to announce the launch of our new logistics hub in Singapore, strengthening our presence and improving delivery timelines across Asia-Pacific regions.",
            },
            {
              title: "ISO 14001 & 22000 Certifications Successfully Renewed",
              text: "YK Freightways continues to uphold the highest standards in environmental management and food safety by renewing its ISO certifications in 2025.",
            },
            {
              title: "Recognized as Top Freight Partner of 2025",
              text: "YK Freightways has been honored with the 'Top Freight Partner' award for outstanding service excellence, innovation, and customer satisfaction across global supply chains.",
            },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-extrabold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
