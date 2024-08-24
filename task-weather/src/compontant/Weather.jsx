import axios from 'axios'
import { useEffect, useState  } from 'react'
import CardUi from './CardUi'
function Weather() {

const [data, setdata] = useState({weather:[],loading:true,error:null})
const [inputSearch, setinputSearch] = useState('cairo')

const fetchData = async() => { 
    try{
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&appid=979e237b0f5e09e3c71616ac4781af58&units=metric`)
        setdata({weather:data,loading:false})
}

 catch(error){
    setdata({loading:false,error:error.message})
 }
}
useEffect(() => {
    fetchData()
}, [inputSearch])






if (data.loading) {
    return <p>loading...</p>
}

  return (
    <>
<div className='container'>
<div className="input-container">
   <input type="text" onChange={(e) => setinputSearch(e.target.value) }   placeholder='Search...' />
</div>
    <CardUi data={data.weather}/>
</div>
    </>
  )
}

export default  Weather