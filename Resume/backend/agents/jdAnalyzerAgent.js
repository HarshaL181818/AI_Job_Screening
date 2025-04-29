// agents/jdAnalyzerAgent.js
import { runOllama } from '../llm/run_ollama.js';

export class JDAnalyzerAgent {
  constructor(name = "JD Analyzer Agent") {
    this.name = name;
  }

  async analyze(title, description) {
    const prompt = `
You are an AI job description analyzer. Extract the following from the given job posting:
- Education requirements
- Key skills
- Main responsibilities
- Required experience

Respond in the following JSON format only:
{
  "title": "...",
  "education": "...",
  "skills": [...],
  "responsibilities": [...],
  "experience": "..."
}

Job Title: ${title}
Job Description: ${description}
    `.trim();

    const response = await runOllama(prompt);
    return JSON.parse(response);
  }
}
