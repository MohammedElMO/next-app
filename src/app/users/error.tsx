"use client"
function UsersError({ reset }: { reset: () => void }) {
  return (
    <>
      <div onClick={() => reset()}>Error occured while getting the users</div>
    </>
  );
}

export default UsersError;
