import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Program = () => {
  const levels = [
    {
      level: "A1-A2",
      title: "Начинающий",
      description:
        "Освойте основы: алфавит, произношение, базовые фразы для повседневного общения. Научитесь представляться, делать покупки, спрашивать дорогу. Изучите времена Present и Past Simple, базовую лексику (800+ слов).",
      duration: "2-3 месяца",
      lessons: "24 урока",
      icon: "Seedling",
      color: "bg-green-100 border-green-200",
      iconColor: "text-green-600",
    },
    {
      level: "B1-B2",
      title: "Средний",
      description:
        "Уверенное общение на бытовые и профессиональные темы. Понимание фильмов, книг, новостей. Изучение сложной грамматики, условных предложений, времён группы Perfect. Лексический запас 2000+ слов.",
      duration: "3-4 месяца",
      lessons: "36 уроков",
      icon: "TreePine",
      color: "bg-blue-100 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      level: "C1-C2",
      title: "Продвинутый",
      description:
        "Свободное владение языком на уровне носителя. Участие в дискуссиях, презентациях, деловых переговорах. Понимание тонкостей языка, идиом, культурных особенностей. Подготовка к международным экзаменам.",
      duration: "4-6 месяцев",
      lessons: "48 уроков",
      icon: "Crown",
      color: "bg-purple-100 border-purple-200",
      iconColor: "text-purple-600",
    },
  ];

  const languages = [
    { name: "Английский", flag: "🇺🇸", students: "5,000+", popular: true },
    { name: "Немецкий", flag: "🇩🇪", students: "2,500+" },
    { name: "Французский", flag: "🇫🇷", students: "2,000+" },
    { name: "Испанский", flag: "🇪🇸", students: "1,800+" },
    { name: "Итальянский", flag: "🇮🇹", students: "1,200+" },
    { name: "Китайский", flag: "🇨🇳", students: "800+" },
  ];

  return (
    <section
      id="program"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            Программа <span className="text-gradient">обучения</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Авторская методика с персональным подходом. Живое общение с
            носителями языка, интерактивные уроки и практические задания.
            Гарантируем результат уже через месяц обучения!
          </p>
        </div>

        {/* Levels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`${level.color} rounded-3xl p-8 border-2 hover-lift`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}
                >
                  <Icon
                    name={level.icon as any}
                    size={32}
                    className={level.iconColor}
                  />
                </div>
                <div className="text-sm font-bold text-gray-500 mb-2">
                  {level.level}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">
                  {level.title}
                </h3>
                <p className="text-gray-600 mb-6">{level.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Icon name="Clock" size={16} />
                    <span>{level.duration}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Icon name="BookOpen" size={16} />
                    <span>{level.lessons}</span>
                  </div>
                </div>

                <Button className="w-full bg-white text-gray-800 hover:bg-gray-50 font-semibold">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-4">
            Изучай любой из 6 языков
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Каждый язык преподают квалифицированные педагоги - носители языка.
            Погружение в культуру и живое общение с первого урока.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="relative">
                {lang.popular && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold z-10">
                    ТОП
                  </div>
                )}
                <div className="bg-gray-50 rounded-2xl p-6 text-center hover-lift border border-gray-100 hover:border-primary-200">
                  <div className="text-4xl mb-3">{lang.flag}</div>
                  <h4 className="font-montserrat font-bold mb-2">
                    {lang.name}
                  </h4>
                  <p className="text-sm text-gray-500">{lang.students}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-montserrat font-bold mb-4">
              Начни говорить уже сегодня!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Персональная программа, гибкий график, результат через 30 дней.
              Первый урок бесплатно - убедись в эффективности нашей методики!
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-800 hover:bg-gray-50 font-semibold px-8 py-4 text-lg hover-lift"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать бесплатный урок
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
