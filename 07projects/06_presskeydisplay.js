// Select the element with id="insert" where we'll show the key info
const insert = document.getElementById('insert');

// Add an event listener for any key press on the whole window
window.addEventListener('keydown', (e) => {
  // Update the innerHTML of the "insert" element with a table
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th> 
          <th>Code</th>
        </tr>
        <tr>
          <!-- e.key gives the actual key pressed (e.g. 'a', 'Enter'). 
               Special check: if it's a space (' '), display 'Space' instead -->
          <td>${e.key === ' ' ? 'Space' : e.key}</td>

          <!-- e.keyCode gives the numeric key code (deprecated but still used) -->
          <td>${e.keyCode}</td> 

          <!-- e.code gives the physical key on the keyboard (e.g. 'KeyA', 'Space') -->
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});
