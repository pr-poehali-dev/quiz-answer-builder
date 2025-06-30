import { useState } from "react";
import Header from "@/components/Header";
import QuestionCreator from "@/components/QuestionCreator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showQuestionCreator, setShowQuestionCreator] = useState(false);

  const stats = [
    {
      label: "Всего вопросов",
      value: "1,247",
      icon: "FileQuestion",
      color: "bg-blue-100 text-blue-800",
    },
    {
      label: "Активных категорий",
      value: "12",
      icon: "Tags",
      color: "bg-green-100 text-green-800",
    },
    {
      label: "Участников",
      value: "8,943",
      icon: "Users",
      color: "bg-purple-100 text-purple-800",
    },
    {
      label: "Решено сегодня",
      value: "156",
      icon: "CheckCircle",
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const topCategories = [
    { name: "Математика", questions: 234, color: "bg-beige-200" },
    { name: "История", questions: 189, color: "bg-beige-300" },
    { name: "Физика", questions: 156, color: "bg-beige-400" },
    { name: "Информатика", questions: 143, color: "bg-beige-500" },
    { name: "Биология", questions: 98, color: "bg-beige-600" },
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {showQuestionCreator ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-beige-900">
                Создание вопроса
              </h2>
              <Button
                variant="outline"
                onClick={() => setShowQuestionCreator(false)}
                className="border-beige-300 text-beige-700"
              >
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                Назад
              </Button>
            </div>
            <QuestionCreator />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-beige-900 mb-4">
                Платформа тестирования знаний
              </h2>
              <p className="text-xl text-beige-700 max-w-2xl mx-auto">
                Создавайте вопросы, проверяйте знания и отслеживайте прогресс в
                профессиональной среде обучения
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white border-beige-200 hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-beige-600">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold text-beige-900">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <Icon name={stat.icon as any} size={24} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white border-beige-200">
                <CardHeader className="bg-beige-100 border-b border-beige-200">
                  <CardTitle className="flex items-center text-beige-900">
                    <Icon name="TrendingUp" size={24} className="mr-2" />
                    Популярные категории
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {topCategories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-beige-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-4 h-4 rounded-full ${category.color}`}
                          ></div>
                          <span className="font-medium text-beige-900">
                            {category.name}
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-beige-200 text-beige-800"
                        >
                          {category.questions} вопросов
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-beige-200">
                <CardHeader className="bg-beige-100 border-b border-beige-200">
                  <CardTitle className="flex items-center text-beige-900">
                    <Icon name="Zap" size={24} className="mr-2" />
                    Быстрые действия
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Button
                      onClick={() => setShowQuestionCreator(true)}
                      className="w-full bg-beige-700 hover:bg-beige-800 text-white justify-start"
                    >
                      <Icon name="Plus" size={20} className="mr-3" />
                      Создать новый вопрос
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-beige-300 text-beige-700 hover:bg-beige-100 justify-start"
                    >
                      <Icon name="Play" size={20} className="mr-3" />
                      Начать тестирование
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-beige-300 text-beige-700 hover:bg-beige-100 justify-start"
                    >
                      <Icon name="BarChart" size={20} className="mr-3" />
                      Посмотреть статистику
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-beige-300 text-beige-700 hover:bg-beige-100 justify-start"
                    >
                      <Icon name="Settings" size={20} className="mr-3" />
                      Управление категориями
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
