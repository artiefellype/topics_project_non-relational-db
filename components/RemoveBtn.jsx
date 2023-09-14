'use client'
import React from 'react'
import { HiOutlineTrash as DeleteIcon} from 'react-icons/hi'
import { useRouter } from 'next/navigation'

const RemoveBtn = ({id}) => {
    const router = useRouter()
    
    const removeTopic = async () => {
        
        const confirmed = confirm("Tem certeza que deseja deletar esse topico?");


        if(confirmed) {
           const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            })
            if(res.ok) router.refresh()
            
        }
    }
  return (
    <button onClick={removeTopic} className='text-red-400'>
        <DeleteIcon size={24} />
    </button>
  )
}

export default RemoveBtn