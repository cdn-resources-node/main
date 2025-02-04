function renderHTMLTemplate() {
  // Add CSS styles in a <style> block
  const styles = `
    <style>
      .card {
        border: 1px solid #333;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
      }
      .card h2 {
        color: #4CAF50;
        font-size: 24px;
      }
      .card p {
        font-size: 16px;
        color: #555;
      }
      .card button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    </style>
  `;

  // Create your HTML template
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

  // Insert the styles and the HTML template into the container
  container.innerHTML = styles + template;
}

// Call the function to render the HTML template
renderHTMLTemplate();
