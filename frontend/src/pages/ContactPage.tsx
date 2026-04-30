import { useTranslation } from '../hooks/useTranslation';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-deep-teal py-20">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl font-bold text-white text-center mb-16">{t('nav.contact')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-golden-yellow mb-8">{t('contact.getInTouch')}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t('contact.address')}</h3>
                <p className="text-gray-300 whitespace-pre-line">
                  {t('contact.addressDetails')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t('contact.phone')}</h3>
                <p className="text-gray-300">+251 11 123 4567</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t('contact.email')}</h3>
                <p className="text-gray-300">info@almacon.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t('contact.businessHours')}</h3>
                <p className="text-gray-300">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-golden-yellow mb-8">{t('contact.sendUsMessage')}</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">{t('contact.name')}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-golden-yellow"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-white mb-2">{t('contact.email')}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-golden-yellow"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              <div>
                <label className="block text-white mb-2">{t('contact.message')}</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-golden-yellow"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              <button 
                type="submit"
                className="bg-golden-yellow text-deep-teal px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
