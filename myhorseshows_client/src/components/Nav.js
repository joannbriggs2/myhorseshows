import React from "react";

function Nav(props) {
  return (
    <nav>
      {/* <img
        className="smallimage"
        src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/39067685_2276509005699631_5600146778524483584_n.jpg?_nc_cat=101&_nc_ohc=9wUz_8BObyEAQkN9nPeUAwn9nsVexDPQzIdnUBF75Z1iDoD-pV2hziRHA&_nc_ht=scontent-lga3-1.xx&oh=19f5d4b5f350478cdf63e0717da28a54&oe=5E7DCA4D"
        alt="horse"
      ></img> */}

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
