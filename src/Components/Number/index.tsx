import { useEffect, useState } from "react"

type NumberType = "Number"
interface NumberProps {
    type?: NumberType
    number?:number
  
}

export const Number = ({ number=0,type = "Number" }: NumberProps) => {
    const [contador,setContador] = useState(0)
    const aumentarContador = async ()=>{
        const velocidad = number / 100
        for (let i = 0; i <= number; i+=velocidad) {
            await new Promise((r) => setTimeout(r, 1));
            setContador(i)
            //aqui se ejeuta el codigo una catidad de veces   
        }
    }
    useEffect(() => {
        aumentarContador()
    }, [])
    


    return (<>
        <div className={`Number ${type}`}>
            {contador}
        </div>
    </>)

}