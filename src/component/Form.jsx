import React, { useEffect, useState } from 'react';
import style from './Form.module.css';

const Form = () => {
  const [inputfiled, setInputfiel] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputfiel({ ...inputfiled, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(inputfiled));
    console.log('inputfiled:', inputfiled);
    setIssubmit(true);
  };

  const validation = (values) => {
    console.log('values:', values);
    const errors = {};
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.username) {
      errors.username = 'username is require!';
    }
    if (!values.email) {
      errors.email = 'email is require!';
    } else if (!reg.test(values.email)) {
      errors.email = 'This not a valide email formate!';
    }
    if (!values.password) {
      errors.password = 'password is require!';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be greater then 4 charectors!';
    } else if (values.password.length > 10) {
      errors.password = 'Password should not be greater then 10 charectors!';
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('inputfiled', inputfiled);
    }
  }, [formErrors]);
  console.log(inputfiled);
  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <>Sign in succesfully</>
      ) : (
        <></>
      )}
      <form className={style.formCont} onClick={handlesubmit}>
        <div className={style.field}>
          <label htmlFor=''>user name</label>
          <input
            type='text'
            name='username'
            value={inputfiled.username}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>
        <div className={style.field}>
          <label htmlFor=''>Email</label>
          <input
            type='text'
            name='email'
            value={inputfiled.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className={style.field}>
          <label htmlFor=''>Password</label>
          <input
            type='text'
            name='password'
            value={inputfiled.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <div className={style.btn}>
          <button type='button'>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
