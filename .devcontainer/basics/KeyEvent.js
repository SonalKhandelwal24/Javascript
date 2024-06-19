const insert = document.getElementById('insert');

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.Key}</td>
    <td>${e.Keycode}</td>
    <td>${e.Code}</td>
  </tr>
</table>
`;
});