import React,{Component} from "react"

class Sam extends Component{
    constructor(props);
    super(props);

    state={
            username:"",
            password:"",
            data:"",
            isLoggedin:true
    }
    render(){
        let {data,doctors,users}=this.state
        if(isLoggedin){
            return(
                <div>
                    <div>
                    {
                        doctors.map(()=>{                   //replace data-doctors,doc-patientList,direct map list
                            const {patientList}=this.state
                            //map for docs
                            patientList.map(()=>{
                                const {patientID}=this.state
                                //map for patients


                            })   
                           
                        }
                        )
                    }   
                </div>
                    {
                            users.map(()=>{
                                const {_id}=this.state //map data.users
                                //map for new patients

                                //compare
                            
                                
                            }
                        )
                    }
                </div>

            )
        }

    }


}

export default Sam;