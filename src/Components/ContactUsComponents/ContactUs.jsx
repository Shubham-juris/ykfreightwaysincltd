import ContactUs from '../../assets/images/ContactUsImages/ContactUs.jpg'


export default function Contact() {
    return (
      <section className="px-4 py-12 md:px-12 lg:px-24 bg-white text-black">
        <h2 className="text-4xl font-light mb-12">CONTACT</h2>
  
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {[
            {
              title: "LOGISTIC (HEADQUARTERS)",
              subtitle: "Global Logistic, London",
              address: "4-5 Spring St, London",
              tel: "+44 20 8786 7200",
              fax: "+44 20 8786 7200",
              email: "info@yourdomain.com",
            },
            {
              title: "LOGISTIC ITALY",
              subtitle: "Logistic Italy Headquarters (Rome Office)",
              address: "SIG MARIO ROSSI VIALE EUROPA 22 00144",
              tel: "+44 20 8786 7200",
              fax: "+44 20 8786 7200",
              email: "info@yourdomain.com",
            },
            {
              title: "LOGISTIC GERMANY",
              subtitle: "Logistic Germany Headquarters (Munich Office)",
              address: "Schwanthaler Straße 75a",
              tel: "+49-(0)89-360908-0",
              fax: "+49-(0)89-360908-0",
              email: "info@yourdomain.com",
            },
            {
              title: "LOGISTIC USA",
              subtitle: "Logistic USA Headquarters (NewYork Office)",
              address: "44 East 2nd Street New York, NY 10003",
              tel: "+44 20 8786 7200",
              fax: "+44 20 8786 7200",
              email: "info@yourdomain.com",
            },
            {
              title: "LOGISTIC JAPAN",
              subtitle: "Logistic Japan Headquarters (Tokyo Office)",
              address: "Sunny Mansion #203 4-7 Hommachi 2-choume",
              tel: "+44 20 8786 7200",
              fax: "+44 20 8786 7200",
              email: "info@yourdomain.com",
            },
          ].map((loc, i) => (
            <div key={i}>
              <h4 className="font-semibold text-sm">{loc.title}</h4>
              <p className="font-bold mt-2">{loc.subtitle}</p>
              <p>{loc.address}</p>
              <p className="mt-1">Tel: {loc.tel}</p>
              <p>Fax: {loc.fax}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${loc.email}`} className="text-sky-400">
                  {loc.email}
                </a>
              </p>
            </div>
          ))}
        </div>
  
        {/* Contact Form + Image */}
        <div className="flex flex-col lg:flex-row justify-start items-center gap-12">
          <form className="flex-1 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="NAME (REQUIRED)"
                className="border-b border-black py-2 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="EMAIL (REQUIRED)"
                className="border-b border-black py-2 focus:outline-none"
                required
              />
            </div>
            <input
              type="text"
              placeholder="SUBJECT"
              className="w-full border-b border-black py-2 focus:outline-none"
            />
            <textarea
              placeholder="YOUR MESSAGE"
              className="w-full border-b border-black py-2 h-32 resize-none focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full w-fit"
            >
              SEND
            </button>
          </form>
  
          {/* Image Placeholder */}
          <div className="flex-1 hidden lg:flex justify-center items-start">
            <img
              src={ContactUs}
              alt="Customer Support"
              className="max-w-sm object-cover scale-x-[-1]"
            />
          </div>
        </div>
      </section>
    );
  }
  