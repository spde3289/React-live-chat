import { memo } from "react";
import User from "./user";

export default memo(function ParticipantCounter(props: any) {
  return (
    <section className="w-[360px] px-3 m-auto mx-0 h-full min-w-[200px] border-l-2 text-3xl">
      <h2 className="mb-3 py-5 h-[80px]">{props.room} 참여인원</h2>
      <div>
        <User user="김지훈" />
        <User user="김지훈" />
        <User user="김지훈" />
        <User user="김지훈" />
        <User user="김지dasdasddasdasdasda훈" />
        <User user="김지훈" />
        <User user="김지훈" />
        <User user="김지훈" />
      </div>
    </section>
  );
});
