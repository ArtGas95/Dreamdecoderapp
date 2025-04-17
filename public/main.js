
document.getElementById('root').innerHTML = `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px;">
    <h1>Dream Decoder</h1>
    <textarea id="dreamInput" placeholder="Describe your dream..." style="width: 100%; height: 100px;"></textarea>
    <button id="decodeButton" style="margin-top: 10px;">Decode</button>
    <div id="result" style="margin-top: 20px;"></div>
  </div>
`;

document.getElementById('decodeButton').onclick = () => {
  const text = document.getElementById('dreamInput').value.toLowerCase();
  const result = {
    symbols: text.match(/train|fall|dark|water|fire|flight/gi) || [],
    emotionalState: (text.match(/fear|love|joy|anger|sad|anxiety/gi) || []).join(', ') || 'Neutral',
    memory: text.includes('child') ? 'Childhood memory' : 'Recent memory',
    recentEvents: text.includes('work') ? 'Work stress' : 'General events',
    unconscious: text.includes('fall') ? 'Fear of losing control' : 'Unclear',
    context: 'REM sleep, elevated heart rate (simulated)'
  };
  document.getElementById('result').innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
};
