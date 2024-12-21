async function lookupWord() {
    const word = document.getElementById('wordInput').value;
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    displayDefinition(data);
  }

  function displayDefinition(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';


    if (data.title) {
      resultDiv.textContent = data.title;
    } else {
      const word = data[0].word;
      const meanings = data[0].meanings.map(m => `
        <h3>${m.partOfSpeech}</h3>
        ${m.definitions.map(d => `<p>${d.definition}</p>`)+('')}
      `).join('');
      resultDiv.innerHTML = `<h2>${word}</h2>${meanings}`;
    }
  }