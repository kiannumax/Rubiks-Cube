/* import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faTimes,faBookDead } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker'; */



/*           WebSite NavBar
   var varfaTimes = <FontAwesomeIcon icon={faTimes}/>
   var varfaSearch = <FontAwesomeIcon icon={faSearch}/>

   function navSearch() {
       var x = $("#faSearch");
       if(x.has("i").length) {
       $(".indexSearch").css("display","inherit");
       ReactDOM.render(
           <FontAwesomeIcon icon={faTimes}/>,
           document.getElementById('navButton')
       );
       }
       else {
           $(".indexSearch").css("display","none");
           ReactDOM.render(
               <FontAwesomeIcon icon={faSearch}/>,
               document.getElementById('navButton')
           );
       }
   }

   ReactDOM.render(
       <Suspense fallback={<p>Loading...</p>}>
   <ul className="navbar-nav navbar-nav1">
       <li className="nav-item"><button className="btn "><i><FontAwesomeIcon icon={faHome}/></i>Home</button></li>
       <li className="nav-item"><button className="btn">Brands</button></li>
       <li className="nav-item"><a className="nav-link" href="account.html"><FontAwesomeIcon icon={faUser}/></a></li>
       <li className="nav-item indexSearch">
             <form className="form-inline">
               <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
               <button className="btn btn-success" type="submit"><FontAwesomeIcon icon={faSearch}/>Search</button>
             </form>
       </li>
       <li id="faSearch" className="nav-item"><button onClick={navSearch} id="navButton" className="btn">
               <FontAwesomeIcon icon={faSearch}/></button> 
       </li>
   </ul>
   </Suspense>,
             document.getElementById('collapsibleNavbar')
   );   */

   
// function fullName(person) {
//   return  person.firstName + " " + person.lastName
// }

// function Son(props) {
//     return (
//         <>
//             {fullName(props.son)},
//             {props.son.age}
//         </>
//     );
// };

// function Mom(props) {
//     return (
//         <Fragment>
//             {fullName(props.mom)},
//             {props.mom.age}
//         </Fragment>
//     )
// }

// function Dad(props) {
//     return (
//         <div>
//     {fullName(props.dad)}
//     {props.dad.age}
//         </div>
//     )
// }

// function Family(props) {
//     return (
//         <div>
//     <Mom mom={props.mom}/> <br/>
//     <Dad dad={props.dad} /> <br/>
//     <Son son={props.son} /> <br/>
//     </div>
//     )
// }

// const family = {
//     son: {
//         age: '14',
//         firstName: 'Max',
//         lastName: 'Kiannu',
//     },
//     mom: {
//         age: '34',
//         firstName: 'Anastassia',
//         lastName: 'Bostrom',
//     },
//     dad: {
//         age: '39',
//         firstName: 'Veikko',
//         lastName: 'Kiannu,'
//     },
// };

// const icon = <FontAwesomeIcon icon={faUser} />

// const element = (
//     <div>
//     <Family 
//       son={family.son} 
//       mom={family.mom}
//       dad={family.dad}
//       />
//     </div>
// );

// function ListNumber(props) {
//     return  <li> {props.value} {icon}</li>;
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listNumbers = numbers.map((number) => 
//     <ListNumber key={numbers.toString()} value={number} />
//     );
//     return(
//         <ul>{listNumbers}</ul>
        
//     );
// }

// var numbers = [1,2,3];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('numbers')
// );

// function buttonFunction() {
//     var name = document.getElementById("nameinput").value;
//     var lastName = document.getElementById("lastinput").value;
//     var age = document.getElementById("ageinput").value;

//     var test = {
//         person: {
//         firstName: name,
//         lastName: lastName,
//         age: age,
//         },
//      };

//      function User(props) {
//         return (
//             <div>
//             {fullName(props.person)},
//             {props.person.age}
//           </div>
//         )
//     }

//     const loh = (
//         <div>
//             <User person={test.person} />
//         </div>
//     );
   
// if(name==="Max" && lastName==="Kiannu" && age==="14") {
//     ReactDOM.render(
//         <Greeting isLoggedIn={true} />,
//         document.getElementById("greeting")
//     );
// }

// else if(name==="Veikko" && lastName==="Kiannu" && age==="39") {
//     ReactDOM.render(
//         <Greeting isLoggedIn={true} />,
//         document.getElementById("greeting")
//     );
// }

// else if(name==="Anastassia" && lastName==="Bostrom" && age==="34") {
//     ReactDOM.render(
//         <Greeting isLoggedIn={true} />,
//         document.getElementById("greeting")
//     )
// }

// else {
//     ReactDOM.render(
//         <Greeting isLoggedIn={false} />,
//         document.getElementById("greeting")
//     );
//     ReactDOM.render(
//         loh,
//         document.getElementById("pinga")
//     );
//     ReactDOM.render(
//         <button className={'addbutt'} onClick={addFunction}>
//             Add
//         </button>,
//         document.getElementById('addButton')
    
//     );
// }

// function UserGreeting(props) {
//     let x = document.getElementById("nameinput").value;
//     return <h3> Welcome back, {x} </h3>;
// }

// function GuestGreeting() {
//     return (<h3>Welcome guest</h3>)
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn) {
//         return <UserGreeting />;
//     }
//     else{
//         return <GuestGreeting />;
//     }
//   }


// function addFunction() {
//     ReactDOM.render(
//         loh,
//         document.getElementById('root2')
//     )
//     numbers.push('4');
//   }
// }

// ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

// ReactDOM.render(
//     <button className={'butt'} onClick={buttonFunction}>
//         Try
//     </button>,
//     document.getElementById("Nick")
// );

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//     componentDidMount () {
//         this.timerID = setInterval (
//             () => this.tick(),100
//         );
//     }
//     componentWillUnmount () {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

// render() {
//     return(
//     <div>
//         <h3>It is {this.state.date.toLocaleTimeString()}</h3>
//     </div>
//     );
//   }
// };

// ReactDOM.render(
//     <Clock />,
//     document.getElementById("clock")
// );




// class TestInput extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {value: '',error:false};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     static getDerivedStateFromEror(error) {
//         return {error:true}
//     }

// componentDidCatch(error,errorInfo) {
//     import ("./errors.js").then(errors => {
//         errorTest()
//     });
// }
//     handleChange (event) {
//         this.setState({value: event.target.value});
//     }
//     handleSubmit(event) {
//         alert('Why did you say ' + this.state.value);
//         event.preventDefault();
//    }
//    render() {
//        if(this.state.error) {
//            return <p>Something went wrong...</p>
//        }
//       return(
//           <form onSubmit={this.handleSubmit}>
//               <input type="text" placedholder="Try something" value={this.state.value}
//                onChange={this.handleChange} />
//                <input type="submit" value="Send" />
//           </form>
//       );
//   }
// }

// ReactDOM.render(
//     <TestInput />,
//     document.getElementById('testInput')
// )

// var scalNames = {
//     E: 'Euro',
//     R: 'Ruble'
// }

// function toEuro(ruble) {
//     return ruble * 71.71;
// }

// function toRuble(euro) {
//     return euro / 71.71
// }

// function tryConvert(value,convert) {
//     var input = parseFloat(value);
//     if(Number.isNaN(input)) {
//         return '';
//     } 
//     var output = convert(input);
//     var rounded = Math.round(output * 100/100)/100;
//     return rounded.toString();
// }

// class Valueinput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.testInput = React.createRef();
//         this.state = {error:false}
//     }
//     handleChange(e) {
//         try {
//         this.props.onValueChange(e.target.value)
//         } catch(error) {
//             this.setState({ error:true });
//         }
//     }
//     render() {
//         var value = this.props.value;
//         var scale = this.props.scale;
//         if(this.state.error) {
//             return <p>Error 404</p>
//         }
//         return (
//             <Suspense fallback={<p>Loading..</p>}>
//             <fieldset>
//                 <legend htmlFor="ruble">Enter value in {scalNames[scale]}:</legend>
//                 <input id="ruble" value={value} onChange={this.handleChange}
//                  ref={this.testInput} />
//             </fieldset>
//             </Suspense>
//         )
//     }
// }

// function MoneyVerdict(props) {
//     if(props.euro >= 250) {
//         return <p>You can buy Supreme moneygun</p>
//     }
//     return <p>You can't buy Supreme moneygun</p>;
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChangeEuro = this.handleChangeEuro.bind(this);
//         this.handleChangeRuble = this.handleChangeRuble.bind(this);
//         this.state = {value:'',scale:'E'};
//     }
//     handleChangeEuro(value) {
//         this.setState({scale:'E',value})
//     }
//     handleChangeRuble(value) {
//         this.setState({scale:'R',value})
//     }
//     render() {
//         const scale = this.state.scale;
//         const value = this.state.value;
//         const euro = scale === 'E'?
//         tryConvert(value,toRuble) : value;
//         const ruble = scale === 'R' ?
//         tryConvert(value,toEuro): value;
//         return (
//             <div>
//             <Valueinput scale="E" value={euro} onValueChange={this.handleChangeRuble} />
//             <Valueinput scale="R" value={ruble} onValueChange={this.handleChangeEuro} />
//             <MoneyVerdict euro={parseFloat(euro)} />
//             </div>
//         );  
//     }
// }

// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('Euro')
// );

// function refFunction() {
//     // focus (this.testInput.current.focus())
// }

// ReactDOM.render(
//     <button onClick={refFunction} id="refbutt">Click</button>,
//     document.getElementById('refButt')
// )
// ReactDOM.render(<App />, document.getElementById('root'));
 


// function rekursia(props) {
//     document.write(props) 
//     if(props >= 20) {
//         return
//     }
//     else {
//         rekursia(props + 1)
//     }
// }

