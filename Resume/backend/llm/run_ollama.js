// llm/run_ollama.js
export async function runOllama(prompt) {
    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3', // or 'mistral' or any other running model
          prompt,
          stream: false
        })
      });
  
      const data = await response.json();
      return data.response.trim();
    } catch (error) {
      console.error("Ollama error:", error);
      throw error;
    }
  }
  