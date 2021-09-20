import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="form-container">
            <h1 className="mb-5">Formulaire</h1>
                <div className="form-group">
                    <label htmlFor="name">Prénom & Nom</label>
                    <input type="text" className="form-control" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Numéro</label>
                    <input type="number" className="form-control" name="phone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de Passe</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                <br />

                <div className="text-center">
                  <button className="btn btn-primary" >Continue</button>
                </div>
              </div>


      </div>
    </div>
  );
}

export default App;
