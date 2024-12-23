import { useEffect, useRef, useState } from "react"

enum Operator{
    add = '+',
    substrack = '-',
    multiply= '*',
    divider = '/'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('')

    const [number, setNumber] = useState('0')
    const [previusNumber, setPreviusNumber] = useState('0')

    const LastOperation = useRef<Operator>()

    useEffect(() =>{
        setFormula(number)
    }, [number])

    const buildNumber = (numberString: string) => {
        //Verificar si se ingresa un punto decimal
        if(number.includes('.') && numberString.startsWith('.')){
            return
        }

        if(number.startsWith('0') || number.startsWith('-0')){
            if(number==='.'){
                return setNumber(number+numberString)
            }
            //Evaluar si es otro cero y no hay punto
            if(numberString ==='0' && number.includes('.')){
                return setNumber(number+numberString)
            }
            //Evaluar si es diferente de cero, no hay punto y es el primer numero
            if(numberString != '0' && !number.includes('.')){
                return setNumber(numberString)
            }

            //Evita el 000000.000
            if(numberString==='0' && !number.includes('.')){
                return
            }
    
        }
        setNumber(number+numberString)
    }

    const Reset = () =>{
        setFormula('0'),
        setNumber('0')
    }

    return{
        //Props
        formula,
        number,
        previusNumber,
        Reset,

        //Metodos
        buildNumber,
    }
}