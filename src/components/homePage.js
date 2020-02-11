import React, { Component } from 'react'
import image from '../images/image.jpg'
import logo from '../images/logo192.png'

 
export class homePage extends Component {
    render() {
        return (
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt="..."/>
      <div style={{marginBottom:'400px'}} class="carousel-caption">
        <img src={logo} alt="..."/>
        <button class="btn"><a class="link" href='/Project'>Voir Plus</a></button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt="..."/>
      <div style={{marginBottom:'400px'}} class="carousel-caption">
        <img src={logo} alt="..."/>
        <button class="btn"><a class="link" href='/Project'>Voir Plus</a></button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        )
    }
}

export default homePage
