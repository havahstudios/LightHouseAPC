"use client";

import SubmitButton from "../../../_components/SubmitButton";
import { deleteResultAction } from "../actions";

// Deletes a result after a "are you sure?" check.
export default function DeleteResultButton({ id }: { id: string }) {
  return (
    <form
      action={deleteResultAction}
      onSubmit={(e) => {
        if (!window.confirm("Delete this result for good? This can't be undone.")) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <SubmitButton variant="danger" pendingText="Deleting…">
        Delete result
      </SubmitButton>
    </form>
  );
}
