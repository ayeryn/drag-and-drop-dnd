# Notes

- [Notes](#notes)
  - [Set up project](#set-up-project)
  - [`<DndContext>`](#dndcontext)
  - [`<SortableContext>`](#sortablecontext)

[Official Doc](https://docs.dndkit.com/api-documentation/context-provider)

## Set up project

Needs three packages to work properly:

```bash
pnpm add @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
```

## `<DndContext>`

```javascript
import { DndContext } from "@dnd-kit/core";
```

- Components that use `<useDraggable>`, `<useDroppable>` or `<DragOverlay>` will need to be nested within a `<DndContext>` provider.

- They don't need to be direct descendants.
- Can be nested

## `<SortableContext>`

```javascript
import { SortableContext } from "@dnd-kit/sortable";
```

The sortable preset provides the building blocks to build sortable interfaces.
