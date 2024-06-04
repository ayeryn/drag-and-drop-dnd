import { User } from "@/data/users";
import React from "react";

export default function SortableUser({ user }: { user: User }) {
  return (
    <li className="flex items-center border-b border-gray-200 py-2 px-4 touch-action-none">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
        {user.initials}
      </div>
      <div className="ml-4 text-gray-700">
        {user.name} - {user.id}
      </div>
    </li>
  );
}
