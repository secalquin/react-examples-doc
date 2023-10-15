import React, { useState, useEffect } from "react";

type Props = {
  usename: string;
  email: string;
  position: number;
  group: number;
};

const Profile = ({ email, group, position }: Props) => {
  const [localPosition, setLocalPosition] = useState(position);

  useEffect(() => {
    if (localPosition !== position) {
      console.log(`La posición cambió de ${position} a ${localPosition}`);
    }
  }, [localPosition, position]);

  return (
    <div>
      <h1>Profile</h1>
      <p>email: {email}</p>
      <p>group: {group}</p>
      <p>
        position:{" "}
        <input
          type="text"
          value={localPosition}
          onChange={(e) => {
            const newPosition = parseInt(e.target.value, 10);
            setLocalPosition(isNaN(newPosition) ? 0 : newPosition);
          }}
        />
      </p>
    </div>
  );
};

export default Profile;
