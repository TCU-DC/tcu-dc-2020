const content = document.getElementById('content')
const options = {
  method: "GET",
  headers: {
    "X-API-KEY": "1a25305e-60be-45dc-916f-20e578af42fa"
  }
}

fetch("https://tcu-dc-2020.microcms.io/api/v1/contents/riwqnzkj6j", options)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    content.insertAdjacentHTML("afterbegin", json.body);
  })