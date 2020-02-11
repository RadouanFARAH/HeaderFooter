import React, { Component } from 'react'

export class login extends Component {
    render() {
        return (
        <div className="container" style={{maxWidth: '300px'}}>
            <h1>Se Connecter</h1>
            <form action="/login" method="POST" class="form-group">
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Votre email" />
                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de pass" />
                <button type="submit"  class="transfer__button transfer__button--inactive">Se connecter</button>
                <br/><a href="/register">pas de compte? S'inscrire ici</a>
            </form>
        </div>
        )
    }
}

export default login
