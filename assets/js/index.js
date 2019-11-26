"use strict"

document.addEventListener("DOMContentLoaded", init)

const AUTO_INTERVAL = 2000

function init() {
  setAutoInterval(AUTO_INTERVAL)
  addTopIndicators()
  addImages()
}

function setAutoInterval(miliseconds) {
  $('#myCarousel').carousel({interval: miliseconds })
}

function addTopIndicators() {
    let html = ''
    data.forEach((e, index) => {
        html += (index == 0) 
        ? `<li data-target="#myCarousel" data-slide-to="${index}" class="active" style="background-color: gray;"></li>`
        : `<li data-target="#myCarousel" data-slide-to="${index}" class="" style="background-color: gray;"></li>`
    })
    document.querySelector('.carousel-indicators').innerHTML = html
}

function addImages() {
    let html = ''
    data.forEach((e, index) => {
        if (index == 0) html += `<div class="carousel-item active">`
        else html += `<div class="carousel-item">`
        html += `<img src="./assets/images/${e.img}" >
                    <div class="container">
                        <div class="carousel-caption text-left" style="top:50px;">
                            <h1>${e.date}</h1>
                            <h3>${e.title}</h3>
                        </div>
                    </div>
              </div>`
    })
    document.querySelector('.carousel-inner').innerHTML = html
}