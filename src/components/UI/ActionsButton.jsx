import { useState, useRef, useEffect } from "react"
import { EllipsisVertical } from "lucide-react"

const buttonStyles= {
  primary: "bg-sandbox-ghost text-sandbox-navy",
  danger: "bg-red-700 text-sandbox-ghost hover:bg-red-800",
  ghost: "text-gray-600 hover:text-sandbox-navy hover:bg-gray-100",
  secondary: "bg-sandbox-ghost text-sandbox-navy",
  neutral: "bg-green-700 text-sandbox-ghost hover:bg-green-800"

}

function ActionsButton({actions, className, dropdown = false}) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  useEffect(() => {
    if(!dropdown) return
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  },[dropdown])

  if (!dropdown) {
    return (
      <div className={`flex gap-2 ${className}`}>
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            disabled={action.disabled}
            title={action.label}
            className={`px-2 py-1.5 rounded font-semibold hover:cursor-pointer transition-colors
              ${buttonStyles[action.type] || buttonStyles.primary}
              ${action.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {action.icon && <action.icon size={16} />}
            {(!action.icon || action.showLabel) && action.label}
          </button>
        ))}
      </div>
    )
  }
  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-1.5 rounded text-sandbox-navy hover:bg-gray-100 hover:text-sandbox-navy transition-colors cursor-pointer"
        title="More options"
      >
        <EllipsisVertical size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={() => {
                action.onClick()
                setIsOpen(false)
              }}
              disabled={action.disabled}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors cursor-pointer
                ${buttonStyles[action.type] || buttonStyles.primary}
                ${action.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {action.icon && <action.icon size={15} />}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ActionsButton