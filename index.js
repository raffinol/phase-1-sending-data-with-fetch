function submitData(name, email) {
  const user = {
    name,
    email,
  };

  const sendData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  };
  return fetch('http://localhost:3000/users', sendData)
    .then((response) => response.json())
    .then(function (object) {
      document.body.innerHTML = object.id;
    })
    .catch(function (error) {
      document.body.innerHTML = error.message;
    });
}
