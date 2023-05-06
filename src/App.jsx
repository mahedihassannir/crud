import { Link } from 'react-router-dom'
import './App.css'

function App() {

  // here is code section


  let handelUser = e => {

    e.preventDefault()

    let form = e.target


    let name = form.name.value


    let pasword = form.email.value


    let user = { name, pasword }

    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'

      },
      body: JSON.stringify(user)

    })




      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.insertedId) {
          alert("added successfully")
          form.reset()
        }
      })



  }

  return (
    <>
      <h1>simple curde</h1>
      {/* title done  */
      }


      <div>

        <div>
          <Link to="/user">user</Link>
        </div>


        <form onSubmit={handelUser}>
          <input name='name' type="text" />
          <br />
          <br />

          <input name='email' type="email" />

          <br />
          <br />
          <input type="submit" value="add user" />

        </form>

      </div>




    </>
  )
}

export default App
