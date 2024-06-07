import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "@/context/useModalContext";
import { JoinRoom } from "@/fetch/roomFatch";

const PasswordModal = () => {
  const [password, setPassword] = useState("");
  const [content, { close }, ref] = useModalContext();
  const navigate = useNavigate();
  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setPassword("");
      close();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  });

  const onChangePassward = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value.replace(/[^0-9]/g, ""));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      content: content?.link,
      password,
    };

    JoinRoom(data).then((res: boolean) => {
      if (res) {
        setPassword("");
        close();
        navigate(`/list/${content?.link}`, {
          state: { value: true, selectMenu: content?.selectMenu },
        });
        
        return;
      }
      alert("잘못된 비밀번호를 입력하셨습니다.");
    });
  };

  return (
    <>
      {content && (
        <div className="w-full h-full bg-slate-600 bg-opacity-50 flex items-center justify-center absolute left-0 top-0 z-50">
          <div ref={ref} className="bg-white p-[12px_40px] rounded-2xl">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                id="password"
                maxLength={4} // 최대 4자리로 제한
                pattern="\d{4}" // 4자리 숫자 패턴
                placeholder="비밀번호를 입력해주세요"
                className="my-5 px-4 text-xl py-[14px] rounded-2xl outline-none w-full border-gray-500 border-[1px]"
                value={password}
                onChange={onChangePassward}
                required
              />
              <div>
                <input
                  className="text-center my-5 mr-3 m-0 px-4 text-xl font-bold text-white py-[14px] rounded-2xl bg-base  outline-none w-[180px] border-gray-500 border-[1px]"
                  type="button"
                  onClick={() => {
                    setPassword("");
                    close()
                   }}
                  value="닫기"
                />
                <input
                  className="text-center my-5 m-0 px-4 text-xl font-bold text-white py-[14px] rounded-2xl bg-base  outline-none w-[180px] border-gray-500 border-[1px]"
                  type="submit"
                  value="제출"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordModal;
