import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["О нас", "Курсы", "Преподаватели", "Блог", "Отзывы"];

  const supportLinks = ["Помощь", "FAQ", "Контакты", "Политика", "Условия"];

  const languages = [
    "Английский",
    "Немецкий",
    "Французский",
    "Испанский",
    "Итальянский",
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Icon name="Languages" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-montserrat font-bold text-gradient">
                LinguaFun
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Изучай языки играя! Превращаем обучение в увлекательное
              приключение с персональным подходом к каждому ученику.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Icon name="Youtube" size={16} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Icon name="Instagram" size={16} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Icon name="MessageCircle" size={16} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">
              Быстрые ссылки
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">
              Поддержка
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Языки</h4>
            <ul className="space-y-3">
              {languages.map((lang, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {lang}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} LinguaFun. Все права защищены.
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Автор: Абдуллаева Е.Р.</span>
              <span>Сделано с ❤️ в России</span>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                <span>Безопасные платежи</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
