import { useContext } from "react"
import AppContext from "context/AppContext"

const Error = ()=>{

  const { movieListIsEmpty, settingDataFromLocalStorage } = useContext(AppContext)
  const {state:{movieList}} = useContext(AppContext)

  const isEmpty = movieListIsEmpty()
  if(isEmpty == 0){
    settingDataFromLocalStorage() 
  }


  return(
    <div className="ContainerError">
      <div className="Erro__ImageFilter">      
      </div>
      <div className="Error__Image">
        <img src="/images/NotFound.jpg" alt="" />
      </div>
      <div className="Error__Info">
        <p>404</p>
        <p>Page not Found</p>
      </div>
    </div>
  )
}

export default Error