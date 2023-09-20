document.getElementById('resource-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const resourceName = document.getElementById('resource-name').value;
  const resourceType = document.getElementById('resource-type').value;

  fetch('/resources', {
    method: 'POST',
    body: JSON.stringify({ name: resourceName, type: resourceType }),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => console.log(response));
});