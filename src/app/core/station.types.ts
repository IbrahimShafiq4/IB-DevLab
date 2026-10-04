export type LineKey = 'algo' | 'ds' | 'api';
export type LevelKey = 'beginner' | 'intermediate' | 'advanced';

export const LEVEL_LABELS: Record<LevelKey, string> = {
    beginner: 'مبتدئ',
    intermediate: 'متوسط',
    advanced: 'متقدم',
};

export function getLevelLabel(level: LevelKey): string {
    return LEVEL_LABELS[level];
}

export interface StationCodeLine {
    line: string;
    note: string;
}

export interface StationTestCase {
    id: string;
    description: string;
    args: unknown[];
    expected: unknown;
}

export interface StationQuizItem {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
}

export interface StationRunnable {
    html: string;
    css: string;
    js: string;
}

export interface StationPractice {
    prompt: string;
    functionName: string;
    starter: string;
    solution: string;
    tests: StationTestCase[];
}

export interface Station {
    id: string;
    line: LineKey;
    level: LevelKey;
    slug: string;
    title: string;
    titleEn: string;
    summary: string;
    date: string;
    tags: string[];
    sortKey: number;
    next?: string;
    requires?: string[];

    whatItDoes: string;
    explanation: string;
    codeBreakdown: StationCodeLine[];
    runnable: StationRunnable;

    practice: StationPractice;

    quizzes: StationQuizItem[];

    useCases: string[];
    whyItsGoodHere: string;
    relatedIdeas: string[];
    mathProblems: string[];
}