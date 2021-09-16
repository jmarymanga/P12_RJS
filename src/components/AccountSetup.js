import React, { Component } from 'react'

export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Formulaire</h1>
                <div className="form-group">
                    <label htmlFor="name">Prénom & Nom</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Numéro</label>
                    <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de Passe</label>
                    <input type="password" className="form-control" name="password" onChange={inputChange('password')} value={values.password} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default AccountSetup
