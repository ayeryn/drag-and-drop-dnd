"use client";
import { User, users } from "@/data/users";
import React from "react";
import SortableUser from "./SortableUser";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function UserList() {
  function handleDragEnd(event: DragEndEvent) {
    console.log(event);
  }
  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="bg-white shadow-md rounded-lg">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}>
          <SortableContext items={users} strategy={verticalListSortingStrategy}>
            {users.map((user: User) => (
              <SortableUser user={user} key={user.id} />
            ))}
          </SortableContext>
        </DndContext>
      </ul>
    </div>
  );
}
