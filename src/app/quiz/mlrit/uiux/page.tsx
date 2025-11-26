import QuizComponent from '@/components/quiz-component';
import { quizData } from '@/lib/quizData';

export default function UIUXQuizPage() {
  return (
    <QuizComponent
      title={quizData.uiux.title}
      questions={quizData.uiux.questions}
      domain="uiux"
    />
  );
}
