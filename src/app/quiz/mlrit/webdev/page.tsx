import QuizComponent from '@/components/quiz-component';
import { quizData } from '@/lib/quizData';

export default function WebDevQuizPage() {
  return (
    <QuizComponent
      title={quizData.webdev.title}
      questions={quizData.webdev.questions}
      domain="webdev"
    />
  );
}
