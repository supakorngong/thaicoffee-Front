import useAuth from "../hook/useAuth";

export default function ProfilePage() {
  const { authUser } = useAuth();
  return (
    <div className="flex justify-center pt-10">
      <div className="w-3/5 border-2 border-black flex-col items-center justify-center text-black ps-5 pb-4">
        <div>
          <h1 className="text-center text-lg text-black">My Profile</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-25 flex gap-3">
            <h4 className="font-semibold">First name :</h4>
            <p>{authUser?.user.firstName}</p>
          </div>
          <div className="flex gap-3">
            <h4 className="font-semibold">Last name :</h4>
            <p>{authUser?.user.lastName}</p>
          </div>
          <div className="flex gap-3">
            <h4 className="font-semibold">email :</h4>
            <p>{authUser?.user.email}</p>
          </div>
          <div className="flex gap-3">
            <h4 className="font-semibold">address :</h4>
            <p>{authUser?.user.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
