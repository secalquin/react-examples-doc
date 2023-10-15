import React, { useState } from "react";

type User = {
  usename: string;
  email: string;
  position: number;
  group: number;
  onUpdatePosition: (newPosition: number) => void;
};

const Profile = ({
  usename,
  email,
  position,
  group,
  onUpdatePosition,
}: User) => {
  return (
    <div>
      <h2>{usename}</h2>
      <p>email: {email}</p>
      <p>group: {group}</p>
      <p>
        position:{" "}
        <input
          type="text"
          value={position}
          onChange={(e) => {
            const newPosition = parseInt(e.target.value, 10);
            onUpdatePosition(newPosition); // Llama a la función proporcionada para actualizar la posición en el componente padre (App).
          }}
        />
      </p>
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {
      usename: "Usuario1",
      email: "usuario1@example.com",
      position: 1,
      group: 1,
    },
    {
      usename: "Usuario2",
      email: "usuario2@example.com",
      position: 2,
      group: 2,
    },
    {
      usename: "Usuario3",
      email: "usuario3@example.com",
      position: 3,
      group: 1,
    },
  ]);

  const handleUpdatePosition = (newPosition: number, index: number) => {
    // Actualiza la posición del usuario en la matriz de usuarios
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index].position = newPosition;
      // Ordena la matriz de usuarios por posición
      updatedUsers.sort((a, b) => a.position - b.position);
      return updatedUsers;
    });
  };

  return (
    <>
      <h1>Vite + React</h1>
      {users.map((user, index) => (
        <div className="card" key={index}>
          <Profile
            usename={user.usename}
            email={user.email}
            position={user.position}
            group={user.group}
            onUpdatePosition={(newPosition) =>
              handleUpdatePosition(newPosition, index)
            }
          />
        </div>
      ))}
    </>
  );
};

export default App;
