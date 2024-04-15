export default function InputBox(props: any) {
  return (
    <>
      <div className="relative text-xl w-full ">
        <div className="opacity-95 h-2 bg-gradient-to-t from-gray-100"></div>
        <div className="relative py-3 flex align-middle justify-center">
          <input
            onChange={props.onChange}
            onKeyUp={props.handleKeypress}
            className="px-4 pr-14 h-10 outline-none rounded-3xl w-3/4 bg-[#eaecee]"
            placeholder="Type a message here"
          />
          <div className="absolute right-[12%] top-[9px] flex items-center justify-center size-12 rounded-3xl bg-[#924CF4]">
            <svg
              className="rotate-45"
              stroke="currentColor"
              fill="#ffffff"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="32px"
              width="32px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
