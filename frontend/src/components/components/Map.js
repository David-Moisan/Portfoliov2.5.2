import React from "react";

export default function Map() {
  return (
    <div id="map">
      <div className="contact__map--info">
        David Moisan
        <br />
        Toulouse, France
        <br />
        <br />
        <span>
          <i className="fa fa-envelope" aria-hidden="true"></i> : admin@davprocode.com
        </span>
      </div>
      <img
        src="/static/source/map.png"
        alt="ma position"
        className="contact__map--image"
      />
    </div>
  );
}
