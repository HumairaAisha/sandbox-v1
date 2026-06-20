import { Pencil, Trash2 } from 'lucide-react';

function ReusableCard({children, className}) {
  return (
    <div className={`rounded-lg bg-gray-50 text-sandbox-navy shadow p-4 hover:shadow-sandbox-navy transition cursor-pointer  ${className || ''}`}>
      {children}
     

    </div>
  )
}

export default ReusableCard