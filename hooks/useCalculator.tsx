import { useEffect, useRef, useState } from "react"

enum Operator{
    add = '+',
    substrack = '-',
    multiply= 'x',
    divider = '/'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0')

    const [number, setNumber] = useState('0')
    const [previusNumber, setPreviusNumber] = useState('0')

    const LastOperation = useRef<Operator>()




    useEffect(() => {
        if(LastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${LastOperation.current} ${number}`);
        }else{
            setFormula(number)
        }

    },[number])

    useEffect(() =>{
        const subResult = calculareSubResult()
        setPreviusNumber(`${subResult}`)
        // setFormula(number)
    }, [formula])

    const calculareSubResult = () =>{
        const [ firstValue, operation, secondValue ] = formula.split(' ')
        const num1= Number(firstValue)
        const num2= Number(secondValue)

        if( isNaN(num2) ) return num1

        switch (operation){
            case Operator.add:
                return num1 + num2

            case Operator.substrack:
                return num1 - num2

            case Operator.multiply:
                return num1 * num2

            case Operator.divider:
                return num1 / num2

                default:
                    throw new Error (`Operation ${operation} not implemented`)
        }
    }

    const setLastNumber = () => {
        calculateResult()
        if(number.endsWith('.')){
            console.log('entro aqui en el error')
            setPreviusNumber(number.slice(0,-1))
            console.log(number)
            console.log(previusNumber)
        }else{
            
        }
        setPreviusNumber(number)
        setNumber('0')

    }

    const divideOperation = () => {
        console.log(number)
        setLastNumber();
        LastOperation.current = Operator.divider;
    }

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
        setNumber('0'),
        setPreviusNumber('0'),
        LastOperation.current = undefined
    }

    const toggleSign = () => {
        if(number.includes('-')){
            //Hecho por el profe
            return setNumber(number.replace('-',''))

            //Hecho por mi
            // var newNum= number.replace('-','')   
            // setNumber(newNum)
            // console.log(newNum)
        } else{
            //Hecho por el Profe
            setNumber('-'+number)
            //Hecho por mi
            // var newNum= '-'+number
            // setNumber(newNum)
            // console.log(newNum)
        }

    }

    const del = () =>{
        
        // let currentSign = ''
        // let temporalNumber = number

        // if(number.includes('-')){
        //     currentSign = '-'
        //     temporalNumber = number.substring(1)
        // }

        // if(temporalNumber.length > 1){
        //     setNumber(currentSign + temporalNumber.slice(0,-1))
        // }

        // setNumber('0')

        if(number.length > 1){
            setNumber(number.slice(0,-1))
        }

        if(number.length <= 1){
            setNumber('0')
        }

        if(number.startsWith('-')){
                setNumber(number.slice(0,-1))
            if(number.length <= 2){
                setNumber(number.slice(0,-2))
                setNumber('0')
            }
        }
    }

    const addOperation = () => {
        console.log(number)
        console.log(previusNumber)
        setLastNumber();
        LastOperation.current = Operator.add;
    }

    const substrackOperation = () => {
        console.log(number)
        setLastNumber();
        LastOperation.current = Operator.substrack;
    }
    
    const multiplyOperation = () => {
        console.log(number)
        setLastNumber();
        LastOperation.current = Operator.multiply;
    }

    const calculateResult = () => {
        const result = calculareSubResult()
        setFormula(`${result}`) 
        LastOperation.current= undefined
        setPreviusNumber('0')
    }

    return{
        //Props
        formula,
        number,
        previusNumber,

        //Metodos
        Reset,
        buildNumber,
        toggleSign,
        del,
        addOperation,
        substrackOperation,
        multiplyOperation,
        divideOperation,
        calculareSubResult,
        calculateResult
    }
}
