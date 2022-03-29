import Link from "next/link";
  

const Footer = ()=>{
  return(
    <div className="Footer">
      <div className="Footer__Icons">
        <p>Icons from:</p>
        <a href="https://www.flaticon.com/" target="_blank">
          <img className="Icons__Flaticon" src="images/flaticon_negative.svg" alt="" />
        </a>
        <a href="https://www.svgrepo.com/" target="_blank">
        <img className="Icons__SVGRepo" src="images/SVGRepo.svg" alt="" />
        </a>
      </div>
      <div className="Footer__API">
        <p>API Data From:</p>
        <a href="https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API" target="_blank">
          <img className="API__API" src="images/logoGhibli.svg" alt="" />
        </a>
      </div>
      <div className="Footer__Github">
        <p>The Code</p>
        <a href="https://github.com/jhonatanvicg" target="_blank">
          <img className="Github__Github" src="images/github.svg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Footer