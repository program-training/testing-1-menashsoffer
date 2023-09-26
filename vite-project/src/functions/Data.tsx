import { useEffect, useState } from "react";
import { getUser } from "./fun";

interface User {
  name: string;
  email: string;
}

export const UserInfo = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getUser(userId)
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
  }, [userId]);
  return (
    <div>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};
