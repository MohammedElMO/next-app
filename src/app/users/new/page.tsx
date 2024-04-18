// "use client";

// import { useRouter } from "next/navigation";

async function UserRegistration() {
  // const router = useRouter();
  const createUser = async (formData:FormData) => {
    "use server"

    console.log(formData.get("username"))
  }


  return (
    <form action={createUser} className="flex flex-col items-start p-5 gap-2">
      <input type="text"  name="username" className="input input-bordered	 " />
      <button className="btn btn-primary" type="submit">
        Rigester
      </button>
    </form>
  );
}

export default UserRegistration;
