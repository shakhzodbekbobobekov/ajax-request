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

//! Value	State	Description

// 0	UNSENT	Client has been created. open() not called yet.

// 1	OPENED	open() has been called.

// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.

// 3	LOADING	Downloading; responseText holds partial data.

// 4	DONE	The operation is complete.
