import React , { Component } from 'react';
import './App.css';


class App extends Component{
    constructor(props){
      super(props)
      this.state = {
       // todos: ["Amber" , "Maria"],
      // todos:[{ title : "Amber" , edit:false } ],
       todos:[ ],
       title: '',  
      //  const result = todos.trim()
      //  console.log(result)
        // value:'',
        // value:[]
      };
    }
    // add_todo=()=>{
    //   let obj1 ={title1:this.state.value.trim()}
    //   this.setState({
    //      todos : [this.state.todos  ,obj1 ],
    //     value : ""

    // }
    //add todo
    add_todo=()=>{
     // console.log(this.state.value)
    //  this.state.todos.push(this.state.value)
     // console.log(this.state.todos)               //show all value

     //first method
    // this.setState({
      // todos:this.state.todos
    // })
     //Second Method seperate operator
//this.setState({
  //todos : [...this.state.todos  , this.state.value],
  //value:""
//if(this.state.value != ' '){
  // if(this.state.todos === ""){
  //   this.state.value = false;
  //}

debugger  
let obj = {title:this.state.value }     
//this.state.todos.trim()
if(this.state.value.trim() == ''){
alert("Null Entry Not Allow")
}
else{

  this.setState({
   // todos : [this.state.todos  ,obj1 ],
   todos : [...this.state.todos  ,obj ],
   value : "",
  }
  )}
}
 // let objValue = {title:this.state.value==""}
   //todoss : [...this.state.todos  ,obj1 ],
// })
onChange = (e) => {
  this.setState({
    [e.target.todos]: e.target.value,
  });
};

//delete todo
delete_todo=(index)=>{
//console.log("check th function..")
this.state.todos.splice(index,1)
this.setState({
todo:this.state.todos
})
}

//edit todo
edit_todo=(index,val)=>{
  this.state.todos[index].edit = true;
 this.setState({
   todos:this.state.todos
  })
}
  //this.setState({
   // todo:this.state.todos
   // })
//console.log(index)
// var updated_value = prompt("Enter your value")
// this.state.todos[index] = updated_value;
// this.setState({
//   todo:this.state.todos
//   })


// handleChange =(e)=>{
//   console.log(e.target.value)
// }
// handleChange =(e)=>{
//   console.log(e.target.value)
// }
// handleChange =(e,i)=>{
//   console.log(e.target.value,i)
// }

handleChange = ( e , index)=>{
 this.state.todos[index].title = e.target.value;
 this.setState({
   todos:this.state.todos,
   value:''
 })
}
update = (index)=>{
  this.state.todos[index].edit = false;
  this.setState({
    todo:this.state.todos
   })
}
    render(){
      let{ todos , value} = this.state;               //destructing method //value get for state 
    return(
     
<div className="container">
<h1 className="todoList">ToDo List</h1>
  {/* <input  type="text" onChange={(e) => console.log(e.target.value)}  placeholder="enter your value"></input> */}
  <input value={value} type="text" onChange={  (e) => this.setState({value: e.target.value}) } placeholder="enter your value"></input>

<button className="addBtn" onClick={this.add_todo} type="submit"
         onSubmit={this.handleSubmit} >Add Item</button>
<ul>
  {todos.map ((v,i) =>{
    return <li key={i}>
    {/* {v.title} */}
    {v.edit ? <input value={v.title} onChange={(e)=>this.handleChange(e,i)} type="text" /> : v.title}
    {v.edit ?
    <button onClick={() => this.update(i)} className="updateBtn">Update</button>
    :
    <button onClick={()=>this.edit_todo(i, v.title)} className="editBtn">Edit</button>
    }
    <button onClick={()=>this.delete_todo(i)} className="dltBtn">Delete</button>
    </li>

  })}
</ul>
</div>
    )
  }
}


export default App;
  



