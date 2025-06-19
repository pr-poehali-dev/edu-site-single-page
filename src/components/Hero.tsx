import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold mb-6">
              Изучай языки <span className="text-gradient">играя</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Онлайн-школа иностранных языков с интерактивными уроками, игровыми
              заданиями и персональным подходом к каждому ученику
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 text-lg hover-lift"
                onClick={() => scrollToSection("program")}
              >
                <Icon name="Play" className="mr-2" size={20} />
                Начать бесплатно
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-semibold px-8 py-4 text-lg"
                onClick={() => scrollToSection("about")}
              >
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span>10,000+ учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={16} />
                <span>4.9 рейтинг</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" size={16} />
                <span>12 языков</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-primary rounded-full opacity-20 absolute -top-4 -left-4 animate-pulse-scale"></div>
              <div className="w-72 h-72 bg-white rounded-3xl shadow-2xl p-8 relative z-10 hover-lift">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-warm rounded-2xl mx-auto mb-4 flex items-center justify-center animate-bounce-gentle">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold mb-2">
                    Языки мира
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Изучай английский, немецкий, французский и многие другие
                  </p>

                  <div className="flex justify-center gap-2 mb-4">
                    <span
                      className="text-2xl animate-bounce-gentle"
                      style={{ animationDelay: "0s" }}
                    >
                      🇺🇸
                    </span>
                    <span
                      className="text-2xl animate-bounce-gentle"
                      style={{ animationDelay: "0.2s" }}
                    >
                      🇩🇪
                    </span>
                    <span
                      className="text-2xl animate-bounce-gentle"
                      style={{ animationDelay: "0.4s" }}
                    >
                      🇫🇷
                    </span>
                    <span
                      className="text-2xl animate-bounce-gentle"
                      style={{ animationDelay: "0.6s" }}
                    >
                      🇪🇸
                    </span>
                  </div>

                  <div className="text-sm text-gray-500">
                    <div className="flex justify-between mb-1">
                      <span>Прогресс</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
