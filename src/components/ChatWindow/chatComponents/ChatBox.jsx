import React from "react"

const ChatBox = ({ text, time, isUser }) => {
  const contact = "bg-zinc-50 dark:bg-zinc-600"
  const user =
    "bg-teal-200 text-zinc-700 dark:text-zinc-100 dark:bg-teal-500  ml-auto"

  return (
    <div
      className={`${isUser ? user : contact} shadow-aroundSm
      px-4 py-3 w-fit max-w-[90%] flex items-end gap-2 
      2xl:text-[1.2vw] 2xl:px-[1vw] 2xl:py-[.8vw]`}
    >
      <p>{text}</p>

      <span className="text-xs 2xl:text-[.9vw]">{time}</span>
    </div>
  )
}

export default ChatBox
