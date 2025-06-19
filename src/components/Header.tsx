import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Icon name="Languages" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-montserrat font-bold text-gradient">
              LinguaFun
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              О курсе
            </button>
            <button
              onClick={() => scrollToSection("program")}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Программа
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Контакты
            </button>
            <Button className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-6">
              Начать обучение
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                О курсе
              </button>
              <button
                onClick={() => scrollToSection("program")}
                className="text-left text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                Программа
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                Контакты
              </button>
              <Button className="bg-gradient-primary hover:opacity-90 text-white font-semibold w-full">
                Начать обучение
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
