import { User, users } from "@/data/users";
import React from "react";
import SortableUser from "./SortableUser";

export default function UserList() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="bg-white shadow-md rounded-lg">
        {users.map((user: User) => (
          <SortableUser user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}
