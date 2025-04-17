export default function NewsLetter() {
    return (
      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          
          {/* Left: Title and Button */}
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-cyan-400">NEWS</h2>
            <p className="text-xl font-semibold mt-2">STAY TUNED</p>
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-900 transition">
              VIEW ALL
              <span className="text-lg font-bold">&rarr;</span>
            </button>
          </div>
  
          {/* Right: Articles */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Looking back at 2019",
                text: "Seitan plaid Wes Anderson pug Blue Bottle Marfa, fashion axe Shoreditch PBR. Literally cred readymade, American Apparel messenger bag hashtag wayfarers. Polaroid Banksy crucifix Tumblr keytar.",
              },
              {
                title: "Successful Recertification According to ISO 14001 and 22000",
                text: "Seitan plaid Wes Anderson pug Blue Bottle Marfa, fashion axe Shoreditch PBR. Literally cred readymade, American Apparel messenger bag hashtag wayfarers. Polaroid Banksy crucifix Tumblr keytar.",
              },
              {
                title: "German Logistics Manager of the Year",
                text: "Seitan plaid Wes Anderson pug Blue Bottle Marfa, fashion axe Shoreditch PBR. Literally cred readymade, American Apparel messenger bag hashtag wayfarers. Polaroid Banksy crucifix Tumblr keytar.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-extrabold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{item.text}</p>
                <a
                  href="#"
                  className="text-cyan-400 font-semibold hover:underline flex items-center gap-1"
                >
                  READ MORE <span className="text-sm">&gt;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  