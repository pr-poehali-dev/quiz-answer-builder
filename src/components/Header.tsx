import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white border-b border-beige-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="BookOpen" size={32} className="text-beige-700" />
          <h1 className="text-2xl font-bold text-beige-900">
            Платформа Знаний
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Button
            variant="ghost"
            className="text-beige-700 hover:text-beige-900 hover:bg-beige-100"
          >
            Главная
          </Button>
          <Button
            variant="ghost"
            className="text-beige-700 hover:text-beige-900 hover:bg-beige-100"
          >
            Вопросы
          </Button>
          <Button
            variant="ghost"
            className="text-beige-700 hover:text-beige-900 hover:bg-beige-100"
          >
            Ответы
          </Button>
          <Button
            variant="ghost"
            className="text-beige-700 hover:text-beige-900 hover:bg-beige-100"
          >
            Рейтинг
          </Button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-beige-300 text-beige-700 hover:bg-beige-100"
          >
            <Icon name="Trophy" size={18} className="mr-2" />
            Достижения
          </Button>
          <Button className="bg-beige-700 hover:bg-beige-800 text-white">
            <Icon name="Plus" size={18} className="mr-2" />
            Создать вопрос
          </Button>
        </div>
      </div>
    </header>
  );
}
