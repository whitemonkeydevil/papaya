import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
      data:"",
      isLoggedIn:false
    }
  }

  onChgtxt=(e)=>{
    this.setState({
      username:e.target.value
    })
    console.log(e.target.value)
  }
  
  onPswdTxtChg=(e)=>{
    this.setState({
      password:e.target.value
      
    })
    console.log(e.target.value)
  }

  Onclick=(e)=>{
    const{username,password}=this.state;
    fetch('https://cors-anywhere.herokuapp.com/https://us-central1-plusbeat-a5425.cloudfunctions.net/submitResponse',
    {   
       method:'POST',
       headers:{
         'Content-Type' : 'application/json'
        },
      body:JSON.stringify({
          email:username,
          password:password
       })
    }) 
    .then(res => res.json())

    .then((data) => { 
      if(data.status)
      { this.setState({
        isLoggedIn:true,
        doctor:data.doctor,
        user:data.doctor

      })
      }
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  render() {
    let {data,isLoggedIn}=this.state
    if(isLoggedIn){
        return(
            <div>
                <div>
                {
                    doctor.map(()=>{                   //replace data-doctors,doc-patientList,direct map list
                        const {patientList}=this.state
                        //map for docs
                        return(
                        <div>
                          <h1>
                          {patientList}
                          </h1>
                        </div>
                        )
                        doctor.map(()=>{
                            const {patientID}=this.state
                            //map for patients
                          {patientList.patientID}
                          

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
                          if(this._id===patientID)
                          {
                            return(
                              {

                              }
                              
                            )

                          }
                        
                    }
                    )
                }
            </div>

        )
    }
   else
   {
    return(

      <div>
      <input onChange={this.onChgtxt} placeholder={"user"} value={username} ></input>
      <input onChange={this.onPswdTxtChg} type={"password"} placeholder={"reactjs"} value={password}></input>
      <button onClick={this.Onclick}>.:CLICK HERE:.</button>  
      </div>  
 
    )
    
    
  }

}
}
export default App;
