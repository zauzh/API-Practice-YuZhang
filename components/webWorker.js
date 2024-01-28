// public/webWorker.js
self.onmessage = (event) => {
  const { id, apiKey } = event.data;
  fetch(`https://superheroapi.com/${apiKey}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      self.postMessage(data);
    })
    .catch((error) => {
      console.error("Error fetching superhero in web worker:", error);
    });
};
