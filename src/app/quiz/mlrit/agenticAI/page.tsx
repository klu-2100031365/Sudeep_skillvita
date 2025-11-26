import QuizComponent from '@/components/quiz-component';
import { quizData } from '@/lib/quizData';

export default function AgenticAIQuizPage() {
  return (
    <QuizComponent
      title={quizData.agenticAI.title}
      questions={quizData.agenticAI.questions}
      domain="agenticAI"
    />
  );
}
