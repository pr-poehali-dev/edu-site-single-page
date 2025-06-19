import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Gamepad2",
      title: "Игровое обучение",
      description:
        "Изучай языки через захватывающие игры и интерактивные задания",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: "Users",
      title: "Персональный подход",
      description: "Индивидуальные программы под твой уровень и цели",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Учись в удобное время, где угодно и с любого устройства",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: "Award",
      title: "Сертификаты",
      description: "Получай официальные сертификаты после завершения курсов",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Счастливых учеников", icon: "Heart" },
    { number: "12", label: "Изучаемых языков", icon: "Globe" },
    { number: "95%", label: "Успешных выпускников", icon: "TrendingUp" },
    { number: "24/7", label: "Поддержка", icon: "Headphones" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            Почему выбирают <span className="text-gradient">LinguaFun</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали уникальную методику изучения языков, которая превращает
            обучение в увлекательное приключение
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100"
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4`}
              >
                <Icon name={feature.icon as any} size={28} />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className="text-primary-500"
                  />
                </div>
                <div className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic">
              "За 3 месяца я выучил французский настолько, что смог свободно
              общаться в поездке по Франции. LinguaFun сделал обучение
              невероятно интересным!"
            </blockquote>
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">А</span>
              </div>
              <div>
                <div className="font-montserrat font-bold">Алексей М.</div>
                <div className="text-gray-500">Студент французского</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
