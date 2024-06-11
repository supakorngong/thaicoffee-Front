import useAuth from "../hook/useAuth";

export default function ProfilePage() {
  const { authUser } = useAuth();
  return (
    <div className="flex justify-center pt-10">
      <div className="w-3/5 border-2 border-black flex-col items-center justify-center">
        <div>
          <h1 className="text-center">My Profile</h1>
        </div>
        <div>
          <div className="w-25 flex gap-3">
            <h4>First name</h4>
            <p>{authUser?.user.firstName}</p>
          </div>
          <div className="flex gap-3">
            <h4>Last name</h4>
            <p>{authUser?.user.lastName}</p>
          </div>
          <div className="flex gap-3">
            <h4>email</h4>
            <p>{authUser?.user.email}</p>
          </div>
          <div className="flex gap-3">
            <h4>address</h4>
            <p>{authUser?.user.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
