

function Greetings(props){

  const yes=<h1>Welcome {props.username}</h1>;
  const no=<h1>Please LogIn</h1>

  return(
    props.loggedin?yes:no
  );
}
export default Greetings