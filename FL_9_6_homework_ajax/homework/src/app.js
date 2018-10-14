const http = {
  get: (url) => new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = (err) => reject(err);
    xhr.send();
  })
};

function find() {
  let lat = document.getElementById('lat').value;
  let lon = document.getElementById('lon').value;
  let result = document.getElementById('result');
  let url = `https://api.onwater.io/api/v1/results/${lat},${lon}`;

  http.get(url)
    .then(res => {
      console.log(result.textContent);
        result.style.background = 'grey';
        result.style.width = '300px';
        result.style.height = '100px';
        console.log(res);
        result.innerHTML = res.water ? 'Water' : 'Land';
        console.log(result.textContent);
      if (res.water) {
        result.style.background = 'blue';
      } else {
        result.style.background = 'brown';
      }
    })
    .catch(err => console.log(err));
}

const desc = document.getElementById('button');
desc.addEventListener('click', find);