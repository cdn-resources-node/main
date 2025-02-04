function renderHTMLTemplate() {
  // Create your HTML template as a string
  const template = `
    <div class="card">
      <h2>Welcome to My Website</h2>
      <p>This is a sample HTML template rendered by JavaScript.</p>
      <button onclick="alert('Button clicked!')">Click Me</button>
    </div>
  `;

  // Select the element where you want to insert the template
  const container = document.getElementById('template-container');

  // Insert the HTML into the selected element
  container.innerHTML = template;
}

// Call the function to render the HTML
renderHTMLTemplate();
