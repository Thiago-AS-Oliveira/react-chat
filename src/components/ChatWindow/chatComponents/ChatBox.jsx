import React from "react"

const ChatBox = ({ text, time, isUser }) => {
  const contact = "bg-zinc-100 dark:bg-zinc-700"
  const user =
    "bg-teal-200 text-zinc-950 dark:text-zinc-50 dark:bg-teal-600  ml-auto"

  return (
    <div
      className={`${isUser ? user : contact} shadow-aroundSm
      px-4 py-2 w-fit max-w-[90%] flex items-end gap-2`}
    >
      <p>{text}</p>

      <span className="text-xs">{time}</span>
    </div>
  )
}

export default ChatBox
