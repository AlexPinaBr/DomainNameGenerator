/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com"];

  let domain = "";
  let domains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let z = 0; z < adj.length; z++) {
      for (let y = 0; y < noun.length; y++) {
        for (let w = 0; w < extension.length; w++) {
          domain = pronoun[i].concat(adj[z], noun[y], extension[w]);
          domains.push(domain);
        }
      }
    }
  }

  let body = document.querySelector("h1");
  let ulList = document.createElement("ul");

  for (var x = 0; x < domains.length; x++) {
    let listDomains = document.createElement("li");
    let domains1By1 = document.createTextNode(domains[x]);
    listDomains.appendChild(domains1By1);
    ulList.appendChild(listDomains);
    body.appendChild(ulList);
  }
};
