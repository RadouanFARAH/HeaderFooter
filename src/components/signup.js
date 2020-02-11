import React, { Component } from 'react'

export class signup extends Component {
    render() {
        return (
            <div className="container" style={{maxWidth:'300px'}}>   
            <h1>S'inscrire</h1>
            <form action="/register" method="POST" class="form-group">
    
              <input type="text" name="firstName" class="form-control" id="inputDefault"  placeholder="Prénom"/>
                
                <br/><input type="text" name="lastName" class="form-control" id="inputDefault" placeholder="Nom" />
                
                <br/><input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Votre email" required/>
                
                <br/><input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de pass" required/>
    
                <br/><button type="submit"  class="transfer__button transfer__button--inactive">S'inscrire</button>
    
                <br/><a href="/login">Déja inscrit? Se connecter ici</a>
            </form>
        </div>
        )
    }
}

export default signup
