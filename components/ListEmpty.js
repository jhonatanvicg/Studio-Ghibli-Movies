

const ListEmpty = ()=>{
  return(
      <div className="List__Container--Empty">
        <div className="Container__Empty">
          <img className="Empty__Image" src="/images/empty.png" alt="" />
          <p>Your Favorite List is Empty</p>
        </div>
      </div>
  )
}

export default ListEmpty