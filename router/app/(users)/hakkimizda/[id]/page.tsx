interface IDynamicRoutes{
    params:{
      id:number|string
    }
}
function DynamicRoutes({params}:IDynamicRoutes) {
    console.log("id : ",params.id);
    
  return (
    <div>
      DynamicRoutes {params.id}
    </div>
  )
}

export default DynamicRoutes
