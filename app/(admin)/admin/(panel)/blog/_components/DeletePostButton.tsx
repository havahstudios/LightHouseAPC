"use client";

import SubmitButton from "../../../_components/SubmitButton";
import { deletePostAction } from "../actions";

// Deletes a post after a "are you sure?" check.
export default function DeletePostButton({ id }: { id: string }) {
  return (
    <form
      action={deletePostAction}
      onSubmit={(e) => {
        if (!window.confirm("Delete this post for good? This can't be undone.")) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <SubmitButton variant="danger" pendingText="Deleting…">
        Delete post
      </SubmitButton>
    </form>
  );
}
