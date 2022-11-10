"use strict";

//uzs
const uzs = document.querySelector("#uzs");

//usd
const usd = document.querySelector("#usd");

//event
uzs.addEventListener("input", (e) => {
  const request = new XMLHttpRequest();

  request.open("GET", "json/current.json");
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.send();

  //   request event

  request.addEventListener("load", () => {
    if (request.status === 200) {
      //   console.log(request.readyState);
      const data = JSON.parse(request.response);

      usd.value = (+uzs.value / data.current.usd).toFixed(3);
    } else {
      usd.value = "Something went wrong";
    }
  });
});
