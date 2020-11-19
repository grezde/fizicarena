import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">
                    <img src="favicon.png" width="30" height="30" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarLinks">
                    <div class="nav navbar-nav mr-auto">
                        <a class="nav-item nav-link active">Archive <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link">Contests</a>
                    </div>
                    <div class="nav navbar-nav">
                        <a class="nav-item nav-link">Log out </a> 
                        <a class="nav-item nav-link">Account </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;