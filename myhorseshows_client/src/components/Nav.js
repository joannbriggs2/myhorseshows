import React from "react";

function Nav(props) {
  return (
    <nav>
      <img
        className="smallimage"
        src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/20882183_1820777457939457_1969598693857082343_n.jpg?_nc_cat=100&_nc_ohc=5H0QJRx7kLkAQkvmdFw0Y7_uq8S4uyR2REnLbAHERW6RqE4Ep3Tgm1XGg&_nc_ht=scontent-lga3-1.xx&oh=e7a32562ab5ed8a61729aeafe650f8ae&oe=5E6F7183"
        alt="horse"
      ></img>

      <h1>Associations</h1>
      <h3>Hunter Pace Series</h3>
      <a
        href="http://associatedbridletrails.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connecticut
      </a>
      <p></p>
      <a
        href="http://findahunterpace.com/paceny.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        New York
      </a>

      <p></p>
      <a
        href="http://findahunterpace.com/hvpaceseries.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        New York Hudson Valley
      </a>
      <h3>Dressage Associations</h3>
      <a
        href="https://www.ctdressage.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connecticut Dressage Association
      </a>
      <p></p>
      <a
        href="https://www.cdctaonline.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connecticut Dressage and Combined Test Association
      </a>
    </nav>
  );
}

export default Nav;
