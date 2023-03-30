
import { random_ten_questions } from "./questions";

describe('random_ten_questions', () => {
  const testQuestions = [
    {
      id: 1,
      japanese: 'はい',
      options: ['Yes', 'No', 'Maybe', 'Sometimes'],
      answer: 'Yes',
    },
    {
      id: 2,
      japanese: 'いいえ',
      options: ['Yes', 'No', 'Maybe', 'Sometimes'],
      answer: 'No',
    },
    {
      id: 3,
      japanese: 'こんにちは',
      options: ['Goodbye', 'Hello', 'Thank you', 'I’m Sorry'],
      answer: 'Hello',
    },
    {
      id: 4,
      japanese: 'じゃね',
      options: ['Thank you', 'I’m Sorry', 'Goodbye', 'Excuse me'],
      answer: 'Goodbye',
    },
    {
      id: 5,
      japanese: 'ありがとう',
      options: ['Yes', 'No', 'Thank you', 'Excuse me'],
      answer: 'Thank you',
    },
    {
      id: 6,
      japanese: 'ごめんなさい',
      options: ['Yes', 'No', 'Thank you', 'I’m Sorry'],
      answer: 'I’m Sorry',
    },
    {
      id: 7,
      japanese: 'すみません',
      options: ['Yes', 'No', 'Excuse me', 'Thank you'],
      answer: 'Excuse me',
    },
    {
      id: 8,
      japanese: '私',
      options: ['You', 'He', 'She', 'I'],
      answer: 'I',
    },
    {
      id: 9,
      japanese: 'あなた',
      options: ['This', 'That', 'He', 'You'],
      answer: 'You',
    },
    {
      id: 10,
      japanese: 'これ',
      options: ['This', 'That', 'He', 'She'],
      answer: 'This',
    },
  ];
  
  it('returns an array with 10 questions', () => {
    const result = random_ten_questions(testQuestions);
    expect(result).to.have.lengthOf(10);
  });
  
  it('returns an array with unique questions', () => {
    const result = random_ten_questions(testQuestions);
    const uniqueQuestions = Array.from(new Set(result.map((q) => q.id)));
    expect(uniqueQuestions).to.have.lengthOf(10);
  });
  
  it('randomizes the order of the questions', () => {
    const result1 = random_ten_questions(testQuestions);
    const result2 = random_ten_questions(testQuestions);
    expect(result1).to.not.deep.equal(result2);
  });
  
  it('randomizes the order of the options of each question', () => {
    const result = random_ten_questions(testQuestions);
    const reshuffled_result = result.forEach((q) => {
      q.options = [...q.options].sort(() => Math.random() - 0.5);
    });
    expect(result).to.not.deep.equal(reshuffled_result);
  });
});