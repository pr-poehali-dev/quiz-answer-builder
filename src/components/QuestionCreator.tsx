import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const categories = [
  "Математика",
  "История",
  "Физика",
  "Химия",
  "Биология",
  "География",
  "Литература",
  "Информатика",
  "Английский",
  "Общие знания",
];

export default function QuestionCreator() {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = () => {
    if (question && correctAnswer && category) {
      console.log("Создан вопрос:", {
        question,
        correctAnswer,
        category,
        difficulty,
      });
      setQuestion("");
      setCorrectAnswer("");
      setCategory("");
      setDifficulty("");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white border-beige-200">
      <CardHeader className="bg-beige-100 border-b border-beige-200">
        <CardTitle className="flex items-center text-beige-900">
          <Icon name="Plus" size={24} className="mr-2" />
          Создание нового вопроса
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-beige-800">
            Категория
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="border-beige-300 focus:ring-beige-500">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-beige-800">
            Сложность
          </label>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger className="border-beige-300 focus:ring-beige-500">
              <SelectValue placeholder="Выберите уровень сложности" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">
                <div className="flex items-center">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 mr-2"
                  >
                    Легкий
                  </Badge>
                </div>
              </SelectItem>
              <SelectItem value="medium">
                <div className="flex items-center">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 mr-2"
                  >
                    Средний
                  </Badge>
                </div>
              </SelectItem>
              <SelectItem value="hard">
                <div className="flex items-center">
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 mr-2"
                  >
                    Сложный
                  </Badge>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-beige-800">Вопрос</label>
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Введите текст вопроса..."
            className="min-h-24 border-beige-300 focus:ring-beige-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-beige-800">
            Правильный ответ
          </label>
          <Input
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            placeholder="Введите правильный ответ..."
            className="border-beige-300 focus:ring-beige-500"
          />
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full bg-beige-700 hover:bg-beige-800 text-white"
          disabled={!question || !correctAnswer || !category}
        >
          <Icon name="Save" size={18} className="mr-2" />
          Сохранить вопрос
        </Button>
      </CardContent>
    </Card>
  );
}
