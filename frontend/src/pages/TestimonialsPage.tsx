import { useTranslation } from '../hooks/useTranslation';

const TestimonialsPage = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.role'),
      text: t('testimonials.client1.text'),
      image: '/Ato_Tsedalu_Alemu.png'
    },
    {
      name: t('testimonials.client2.name'), 
      role: t('testimonials.client2.role'),
      text: t('testimonials.client2.text'),
      image: '/Ato_Melkamu_Terefe.png'
    },
    {
      name: t('testimonials.client3.name'),
      role: t('testimonials.client3.role'),
      text: t('testimonials.client3.text'),
      image: '/Ato_Nega_Yihune.png'
    },
    {
      name: t('testimonials.client4.name'),
      role: t('testimonials.client4.role'),
      text: t('testimonials.client4.text'),
      image: '/Ato_Astewale_Abera.png'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-teal py-20">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl font-bold text-white text-center mb-16">{t('testimonials.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg overflow-hidden h-full flex flex-col">
              {/* Large Portrait Image on Top */}
              <div className="relative">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-48 object-cover object-top border-b-4 border-golden-yellow"
                    onError={(e) => {
                      e.currentTarget.src = '';
                      e.currentTarget.className = 'w-full h-48 bg-gray-400 border-b-4 border-golden-yellow flex items-center justify-center';
                      e.currentTarget.innerHTML = '<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3a1 1 0 01-1-1v-5a1 1 0 011-1h12a1 1 0 011 1v5a1 1 0 01-1 1h-1a7 7 0 11-7 0z" clip-rule="evenodd"></path></svg>';
                    }}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-400 border-b-4 border-golden-yellow flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3a1 1 0 01-1-1v-5a1 1 0 011-1h12a1 1 0 011 1v5a1 1 0 01-1 1h-1a7 7 0 11-7 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-golden-yellow text-3xl mb-4">"</div>
                <p className="text-gray-300 mb-6 italic flex-grow">{testimonial.text}</p>
                <div className="border-t border-white border-opacity-20 pt-4 mt-auto">
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
