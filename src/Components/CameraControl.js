import React, { useState } from 'react';

function CameraControl() {
  const [pan, setPan] = useState(0);
  const [tilt, setTilt] = useState(0);
  const [zoom, setZoom] = useState(1);

  const handleControl = (type, value) => {
    // Envoyer la commande à la caméra (ex. : via une API)
    console.log(`Contrôle ${type} : ${value}`);
  };

  return (
    <div className="camera-control">
      <h3>Contrôle de la caméra PTZ</h3>
      <div>
        <label>Pan :</label>
        <input
          type="range"
          min="-180"
          max="180"
          value={pan}
          onChange={(e) => {
            setPan(e.target.value);
            handleControl('pan', e.target.value);
          }}
        />
      </div>
      <div>
        <label>Tilt :</label>
        <input
          type="range"
          min="-90"
          max="90"
          value={tilt}
          onChange={(e) => {
            setTilt(e.target.value);
            handleControl('tilt', e.target.value);
          }}
        />
      </div>
      <div>
        <label>Zoom :</label>
        <input
          type="range"
          min="1"
          max="10"
          value={zoom}
          onChange={(e) => {
            setZoom(e.target.value);
            handleControl('zoom', e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default CameraControl;