import React from 'react'
import Image from 'react-bootstrap/Image'

const Cards = () => {
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
         <div class="col">
           <div class="card h-100">
             <Image src="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" className="" alt="..." />
             <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a        little bit longer.</p>
             </div>
           </div>
         </div>
         <div className="col">
           <div className="card h-100">
             <Image src="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" class="card-img-top" alt="..." />
             <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">This is a short card.</p>
             </div>
           </div>
         </div>
         <div className="col">
           <div className="card h-100">
             <Image src="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" class="card-img-top" alt="..." />
             <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
             </div>
           </div>
         </div>
         <div className="col">
           <div className="card h-100">
             <Image src="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" class="card-img-top" alt="..." />
             <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a        little bit longer.</p>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Cards
