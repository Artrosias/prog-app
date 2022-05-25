import React,{ useState , useEffect} from 'react';


const ApiCall = () => {

    const [data , setData] = useState({})
    const [age , setAge] = useState(1)

    useEffect( () =>{

        fetch("https://randomuser.me/api/").then(
            response => response.json()
        ).then(data => 
                setData(data.results[0]),
                console.log("Fetch")
        )
    },[age] )


    const onChangeAge = () => {
        setAge(age +1 )
    }

    return (
        <>
            <h1>ok</h1>
            <button onClick = {onChangeAge}>AUMENTA ETA'</button>
            <p>{data.gender}</p>
            <b>Age vale {age}</b>
        </> 

    )
}

export default ApiCall