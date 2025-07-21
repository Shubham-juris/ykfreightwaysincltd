import { motion } from 'framer-motion';

const cardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 },
};

const ServiceCard = ({ imageUrl, title, color, description }) => {
  return (
    <motion.div
      className="relative rounded-md overflow-hidden shadow-md"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover aspect-square"
      />
      <div
        className="absolute bottom-0 left-0 w-full py-4 px-6 text-white"
        style={{ backgroundColor: color }}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-75">{description}</p>
      </div>
    </motion.div>
  );
};

const LogisticsServices = () => {
  const servicesData = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1684695749267-233af13276d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNpbmd8ZW58MHx8MHx8fDA%3D',
      title: 'Logistics',
      color: '#2196F3',
      description: 'Efficient and reliable logistics solutions tailored to your business needs.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VhJTIwZnJlaWdodHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Sea Freight',
      color: '#9C27B0',
      description: 'Cost-effective sea transport for bulk goods and international trade.',
    },
    {
      imageUrl:
        'https://media.istockphoto.com/id/867645158/photo/plane-trucks-are-flying-towards-the-destination-with-the-brightest.webp?a=1&b=1&s=612x612&w=0&k=20&c=XrZB83Sy8KSclPq-1qsALW71b_mXYsAy_LfeV2-aNEE=',
      title: 'Air Freight',
      color: '#2196F3',
      description: 'Fast and secure air freight services to meet urgent shipping deadlines.',
    },
    {
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1682146490755-c33a53c4502d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FyZWhvdXNpbmd8ZW58MHx8MHx8fDA%3D',
      title: 'Warehousing',
      color: '#F44336',
      description: 'Secure and scalable storage solutions for all your inventory needs.',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
        Our Logistics Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            imageUrl={service.imageUrl}
            title={service.title}
            color={service.color}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LogisticsServices;
