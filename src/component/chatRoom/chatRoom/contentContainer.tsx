import ChatHistory from "./chatHistory";

export default function ContentContainer(props: any) {
  return (
    <>
      <div className="flex h-[655px] flex-col p-5 overflow-y-scroll">
        <ChatHistory userType={props.userType} />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
      </div>
    </>
  );
}
