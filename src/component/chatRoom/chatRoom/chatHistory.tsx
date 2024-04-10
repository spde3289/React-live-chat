const chat: any = {
  me: "rounded-[26px_26px_0_26px] bg-blue-600 ",
  other: "rounded-[26px_26px_26px_0] bg-gray-300",
};

export default function ChatHistory({ userType }: any) {
  const type = userType === "me" ? "float-right" : "float-left";
  return (
    <>
      <div className="mb-4">
        <div className={type}>
          <div className="text-xl">김지훈</div>
          <div
            className={`${chat[userType]} w-min break-words max-w-md text-2xl p-2`}
          >
            asdasdasdasd dasdasdadasdasdddddddddddddddddddddddddddddasdasdasd
            dasda dasdqw dqwdasd ddddddddddd
          </div>
        </div>
      </div>
    </>
  );
}
