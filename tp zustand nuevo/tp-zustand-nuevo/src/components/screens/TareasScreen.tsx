import { useEffect } from "react"
import { getAllTareas } from "../../http/tarea"


export const TareasScreen = () => {

    const getTareas = async ()=>{
        const result = await getAllTareas()
        console.log(result)
        return result
    }

    useEffect(()=>{
        getTareas()
    },[])
  return (
    <div>
        jajas
    </div>
  )
}
