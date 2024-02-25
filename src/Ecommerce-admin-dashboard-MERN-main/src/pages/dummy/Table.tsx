const Table = () => {
   const std ={
    name:"Ali",
    age:21,
    exam:{
        mid:"pass",
        final:"fail"
    }
   }
//    const {exam:{final}} = std
//    console.log(final);

    // const {name:myName}=std
    // console.log(myName);
    
   

    return <>
    <h1>Table</h1>
    <div {...std} >
        <h3></h3>
    </div>
    </>
}

export default Table