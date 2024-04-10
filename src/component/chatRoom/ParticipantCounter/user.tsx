interface UserPropsType{
  user: string
}

export default function User({user}: UserPropsType) {
  return (
    <>
      <div className="mb-4 border-b-2 break-words">{user}</div>
    </>
  );
}