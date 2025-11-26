import QuizComponent from '@/components/quiz-component';
import { quizData } from '@/lib/quizData';

export default function VibeCodingQuizPage() {
  return (
    <QuizComponent
      title={quizData.vibecoding.title}
      questions={quizData.vibecoding.questions}
      domain="vibecoding"
    />
  );
}
