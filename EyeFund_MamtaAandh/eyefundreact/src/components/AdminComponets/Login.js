import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Hardcoded username and password for demonstration
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      // Simulate a token
      const token = 'fake-jwt-token';
      localStorage.setItem('token', token); 
      navigate('/admin'); 
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9 my-5">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                <form className="needs-validation" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Username is required
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Password is required
                    </div>
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="align-items-center d-flex">
                    <button type="submit" className="btn btn-primary ms-auto">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Troubleshoot? <a href="##" className="text-dark">Try out</a>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              EyeFund Foundation - Mamata Andh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;



















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError(null); 

//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       if (data.token) {
//         localStorage.setItem('token', data.token); 
        
//         navigate('/admin'); 
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <section class="h-100">
//       <div class="container h-100">
//         <div class="row justify-content-sm-center h-100">
//           <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9 my-5">

//             <div class="card shadow-lg">
//               <div class="card-body p-5">
//                 <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
//                 <form class="needs-validation" onSubmit={handleSubmit}>
//                   <div class="mb-3">
//                     <label class="mb-2 text-muted" htmlFor="username">Username</label>
//                     <input id="username" type="text" class="form-control" name="username" value={username}
//                       onChange={(e) => setUsername(e.target.value)} required />
//                     <div class="invalid-feedback">
//                       Username is required
//                     </div>
//                   </div>

//                   <div class="mb-3">
//                     <label class="mb-2 text-muted" for="password">Password</label>
//                     <input id="password" type="password" class="form-control" name="password" value={password}
//                       onChange={(e) => setPassword(e.target.value)} required />
//                     <div class="invalid-feedback">
//                       Password is required
//                     </div>
//                   </div>


//                   <div class="align-items-center d-flex">
//                     <button type="submit" class="btn btn-primary ms-auto">
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//               <div class="card-footer py-3 border-0">
//                 <div class="text-center">
//                   Troubleshoot? <a href="##" class="text-dark">Try out</a>
//                 </div>
//               </div>
//             </div>
//             <div class="text-center mt-5 text-muted">
//               EyeFund Foundation - Mamata Andh
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//   );
// }

// export default Login;