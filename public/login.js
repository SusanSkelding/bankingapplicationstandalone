const { findOne } = require("../dal");

function Login(){
	const [show, setShow]     = React.useState(true);
	const [status, setStatus] = React.useState('');    
	const [name, setName] = React.useState("");
  
	return (
	  <Card
		bgcolor="success"
		txtcolor="white"
		header="Login"
		status={status}
		body={show ? 
		  
		  <LoginForm setShow={setShow} setStatus={setStatus}/> :
		  <LoginMsg setShow={setShow} setStatus={setStatus}/>
		  
		
		}
	  />
	) 
  }
  
  function LoginMsg(props){
	return(<>
	  <h5>User Logged In</h5>
	  <button type="submit" 
		className="btn btn-light" 
		onClick={() => props.setShow(true)}>
		  Log Out
	  </button>
	</>);
  }
  
  function LoginForm(props){
	const [email, setEmail]       = React.useState('');
	const [password, setPassword] = React.useState('');
  
	function handle(){
	  fetch(`/account/login/${email}/${password}`)
	  .then(response => response.text())
	  .then(text => {
		  try {
			  const data = JSON.parse(text);
			  props.setStatus('');
			  props.setShow(false);
			  setBalance(user.balance);
			  console.log('JSON:', data);
		  } catch(err) {
			  props.setStatus(text)
			  console.log('err:', text);
		  }
	  });
  
	  
	}
  
	function checkCredentials() {
  
	  fetch(`/account/checkUser/${email}/${password}`)
	  .then(response => response.text())
	  .then(text => {
		  try {
			  const data = JSON.parse(text);
			  props.setStatus(text);
			  props.setShow(false);
			  setBalance(user.balance);
			  console.log('JSON:', data);
		  } catch(err) {
			  props.setStatus(text)
			  console.log('err:', text);
		  }
	  });
  
  
  
	}
	function clearForm() {
	  setEmail('');
	  setPassword('');
	  setShow(true);
	}
	
  
	return (<>
  
	  Email<br/>
	  <input type="input" 
		className="form-control" 
		placeholder="Enter email" 
		value={email} 
		onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
	  Password<br/>
	  <input type="password" 
		className="form-control" 
		placeholder="Enter password" 
		value={password} 
		onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
	  <button type="submit" className="btn btn-light"  onClick={handle}>Login</button>
	  
	 
	</>);
  }