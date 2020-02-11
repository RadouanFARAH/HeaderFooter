import React, { Component } from 'react'
import image from '../images/image.png'


 
export class homePage extends Component {
    render() {
        return (
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt="..."/>
      <div style={{marginBottom:'200px'}}  class="carousel-caption">
          <h1>A PROPOS DE NOUS</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laudantium nisi, reprehenderit ratione quasi aspernatur nulla mollitia dolor quod voluptates distinctio incidunt tenetur. Architecto quod pariatur minima eveniet, molestias mollitia?</p>
        <button style={{backgroundColor:'white'}} class="btn"><a style={{backgroundColor:'white'}} class="link" href='/Project'>Voir Plus</a></button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt="..."/>
      <div style={{marginBottom:'200px'}} class="carousel-caption">
          <h1>Contacter Nous</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laudantium nisi, reprehenderit ratione quasi aspernatur nulla mollitia dolor quod voluptates distinctio incidunt tenetur. Architecto quod pariatur minima eveniet, molestias mollitia?</p>
        <button style={{backgroundColor:'white'}} class="btn"><a class="link" href='/Project'>Voir Plus</a></button>
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
