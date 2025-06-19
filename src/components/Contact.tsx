import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      value: "hello@linguafun.ru",
      description: "Ответим в течение 24 часов",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Ответим с 9:00 до 21:00",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@linguafun_support",
      description: "Быстрые ответы в чате",
    },
  ];

  const socialLinks = [
    { icon: "Youtube", name: "YouTube", color: "text-red-500" },
    { icon: "Instagram", name: "Instagram", color: "text-pink-500" },
    { icon: "MessageCircle", name: "Telegram", color: "text-blue-500" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            Связаться с <span className="text-gradient">нами</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Есть вопросы? Мы всегда готовы помочь! Выберите удобный способ связи
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-8">
              Как с нами связаться
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={info.icon as any}
                      size={20}
                      className="text-primary-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-lg text-gray-800 mb-1">{info.value}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-montserrat font-bold mb-4">
                Мы в социальных сетях
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors hover-lift"
                  >
                    <Icon
                      name={social.icon as any}
                      size={20}
                      className={social.color}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-10 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl">
              <h4 className="font-montserrat font-bold mb-3 flex items-center gap-2">
                <Icon
                  name="HelpCircle"
                  size={20}
                  className="text-primary-600"
                />
                Часто задаваемые вопросы
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Можно ли заморозить курс?</li>
                <li>• Как получить сертификат?</li>
                <li>• Есть ли пробный период?</li>
                <li>• Можно ли поменять преподавателя?</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-montserrat font-bold mb-6">
              Напишите нам
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-white border-gray-200 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white border-gray-200 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <Input
                  placeholder="+7 (999) 123-45-67"
                  className="bg-white border-gray-200 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Язык для изучения
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-primary-500">
                  <option>Выберите язык</option>
                  <option>Английский</option>
                  <option>Немецкий</option>
                  <option>Французский</option>
                  <option>Испанский</option>
                  <option>Итальянский</option>
                  <option>Китайский</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <Textarea
                  placeholder="Расскажите о ваших целях изучения языка..."
                  rows={4}
                  className="bg-white border-gray-200 focus:border-primary-500 resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 hover-lift">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить сообщение
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Отправляя форму, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
