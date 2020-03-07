import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <div className="row">
      <div className="col-md-12">
        <nav class="navbar navbar-light bg-light navbar-static-top">
          <a class="navbar-brand" href="#">Riot Api</a>
          <input class="form-control col-md-3 text-center"
                 type="text"
                 placeholder="Summoner Name" />
        </nav>
      </div>
    </div>
    );
  }
}
export default Header;
