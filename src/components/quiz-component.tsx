'use client';

import { useState } from 'react';
import { Question } from '@/lib/quizData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';

interface QuizComponentProps {
  title: string;
  questions: Question[];
  domain: string;
}

interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  shuffledCorrectAnswer: number;
}

export default function QuizComponent({ title, questions, domain }: QuizComponentProps) {
  const [stage, setStage] = useState<'form' | 'quiz' | 'result'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [quizQuestions, setQuizQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);

  // Shuffle array function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize quiz with shuffled questions and options
  const initializeQuiz = () => {
    // Shuffle and select 10 questions
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);

    // Shuffle options for each question
    const questionsWithShuffledOptions = shuffledQuestions.map((q) => {
      const optionsWithIndex = q.options.map((opt, idx) => ({ opt, idx }));
      const shuffledOptionsWithIndex = shuffleArray(optionsWithIndex);
      const shuffledOptions = shuffledOptionsWithIndex.map((item) => item.opt);
      const newCorrectAnswer = shuffledOptionsWithIndex.findIndex(
        (item) => item.idx === q.correctAnswer
      );

      return {
        ...q,
        shuffledOptions,
        shuffledCorrectAnswer: newCorrectAnswer,
      };
    });

    setQuizQuestions(questionsWithShuffledOptions);
    setSelectedAnswers(new Array(10).fill(null));
  };

  const validateForm = () => {
    const errors = { name: '', email: '', phone: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      initializeQuiz();
      setStage('quiz');
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    let calculatedScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].shuffledCorrectAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);

    // Log to console
    console.log('=== QUIZ SUBMISSION ===');
    console.log('Domain:', domain);
    console.log('Name:', formData.name);
    console.log('Phone:', formData.phone);
    console.log('Score:', calculatedScore, '/', quizQuestions.length);
    console.log('======================');

    // Post results to backend
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/skillvita/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          number: formData.phone,
          email: formData.email,
          domain: domain,
          round1_score: calculatedScore,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Successfully submitted to backend:', data);
      } else {
        console.error('Failed to submit to backend:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting to backend:', error);
    }

    setStage('result');
  };

  // Form Stage
  if (stage === 'form') {
    return (
      <>
        <Header />
        <div className="container mx-auto py-10">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{title} Quiz</h1>
            <p className="text-muted-foreground">
              Please fill in your details to start the quiz
            </p>
          </div>

          <Card className="p-6 max-w-2xl mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className={formErrors.name ? 'border-red-500' : ''}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className={formErrors.email ? 'border-red-500' : ''}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number (10 digits) *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter 10-digit phone number"
                  maxLength={10}
                  className={formErrors.phone ? 'border-red-500' : ''}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg">
                Start Quiz
              </Button>
            </form>
          </Card>
        </div>
      </>
    );
  }

  // Quiz Stage
  if (stage === 'quiz') {
    const currentQ = quizQuestions[currentQuestion];
    const isLastQuestion = currentQuestion === quizQuestions.length - 1;
    const allAnswered = selectedAnswers.every((answer) => answer !== null);

    return (
      <>
        <Header />
        <div className="container mx-auto py-10">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{title} Quiz</h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {quizQuestions.length} • {selectedAnswers.filter((a) => a !== null).length} answered
            </p>
          </div>

          <Card className="p-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-xl font-semibold mb-6">{currentQ.question}</h3>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQ.shuffledOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-accent'
                  }`}
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4 border-t">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                size="sm"
              >
                Previous
              </Button>

              {isLastQuestion ? (
                <Button
                  onClick={handleSubmitQuiz}
                  disabled={!allAnswered}
                  size="sm"
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button onClick={handleNext} size="sm">Next</Button>
              )}
            </div>
          </Card>
        </div>
      </>
    );
  }

  // Result Stage
  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Quiz Complete!</h1>
          <p className="text-muted-foreground">
            Thank you for completing the {title} quiz
          </p>
        </div>

        <Card className="p-6 max-w-2xl mx-auto">
          {/* Score Display */}
          <div className="text-center mb-8 pb-8 border-b">
            <div className="text-7xl font-bold text-primary mb-4">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-2xl font-semibold mb-2">
              {Math.round((score / quizQuestions.length) * 100)}%
            </p>
            <p className="text-muted-foreground">Great job, {formData.name}!</p>
          </div>

          {/* User Details */}
          <div className="bg-accent/50 p-6 rounded-lg space-y-3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Submission Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="text-sm text-muted-foreground">Name</span>
                <p className="font-medium">{formData.name}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Email</span>
                <p className="font-medium">{formData.email}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Phone</span>
                <p className="font-medium">{formData.phone}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Domain</span>
                <p className="font-medium">{title}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
