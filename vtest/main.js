function renderHTMLTemplate() {
  // Create your HTML template as a string
  const template = `
    <div class="card">
      <h2>Welcome to My Website</h2>
      <p>This content was loaded from an external JavaScript file.</p>
      <button onclick="alert('Button clicked!')">Click Me</button>
    </div>
  `;

  // Create a container if it doesn't exist
  let container = document.getElementById('template-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'template-container';
    document.body.appendChild(container);
  }

  // Insert the HTML into the container
  container.innerHTML = template;
}

// Call the function to render the HTML template
renderHTMLTemplate();
