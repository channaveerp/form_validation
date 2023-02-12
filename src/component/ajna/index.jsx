import React, { useEffect, useState } from 'react';
import style from './index.module.css';

const Contactus = () => {
  const [inputData, setinputData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    jobtitle: '',
    organization: '',
    weblink: '',
    comment: '',
    purpose: '',
  });
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputData({ ...inputData, [name]: value });
  };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...inputData });
    setFormErrors(validation(inputData));
    console.log('inputData:', inputData);
    setIssubmit(true);
  };
  console.log('inpu', inputData);

  const validation = (value) => {
    console.log('value:', value);
    const errors = {};
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.firstname) {
      errors.firstname = 'firstName is required!';
    }
    if (!value.lastname) {
      errors.lastname = 'lastname is required!';
    }
    if (!value.email) {
      errors.email = 'email is required!';
    } else if (!reg.test(value.email)) {
      errors.email = 'not valid email!';
    }

    if (value.phone === '') {
      errors.phone = 'phone number required!!';
    } else if (value.phone.length <= 9) {
      errors.phone = 'not a valid phone required!!';
    } else if (value.phone.length > 10) {
      errors.phone = 'phonenumber not more then 10 digit!';
    }
    if (!value.organization) {
      errors.organization = 'organization is required!';
    }
    if (!value.jobtitle) {
      errors.jobtitle = 'jobtitle is required!';
    }
    if (!value.type) {
      errors.type = 'type of business is required!';
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('input', inputData);
      setIssubmit(true);
      alert('form submitted');
    }
  }, [formErrors, isSubmit]);
  return (
    <div className={style.container}>
      <div className={style.contactTxt}>
        <h1>
          <span>Contact us</span> for more info
        </h1>
      </div>
      <form action='' onClick={handleSubmit}>
        <div className={style.labelInputCont}>
          <div className={style.labelInput}>
            <label htmlFor=''>First Name*</label>
            <input
              type='text'
              name='firstname'
              value={inputData.firstname}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{formErrors.firstname}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor=''>Last Name*</label>
            <input
              type='text'
              name='lastname'
              value={inputData.lastname}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{formErrors.firstname}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor=''>Business Email*</label>
            <input
              type='text'
              name='email'
              value={inputData.email}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{formErrors.email}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor=''>Contact Number*</label>
            <input
              type='phone'
              name='phone'
              value={inputData.phone}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{formErrors.phone}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor=''>Job Title*</label>
            <input
              type='text'
              name='jobtitle'
              value={inputData.jobtitle}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{formErrors.jobtitle}</p>
          </div>{' '}
          <div className={style.labelInput}>
            <label htmlFor=''>Organization Name*</label>
            <input
              type='text'
              name='organization'
              value={inputData.organization}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{formErrors.organization}</p>
          </div>
          <div className={style.labelInput1}>
            <label htmlFor=''>Website Link Here*</label>
            <input
              type='text'
              name='weblink'
              value={inputData.weblink}
              onChange={handleChange}
            />
          </div>
          <div className={style.types}>
            <div>Type</div>
            <div className={style.typesContetnt}>
              <div className={style.radio}>
                <input
                  type='radio'
                  name='purpose'
                  value='support'
                  id='purpose'
                  checked={inputData.purpose === 'support'}
                  onChange={handleChange}
                />
                <label htmlFor='purpose'>support</label>
              </div>
              <div className={style.radio}>
                <input
                  type='radio'
                  id='purpose'
                  name='purpose'
                  value='business'
                  checked={inputData.purpose === 'business'}
                  onChange={handleChange}
                />
                <label htmlFor='purpose'>Business enquirey</label>
              </div>
              <div className={style.radio}>
                <input
                  type='radio'
                  id='purpose'
                  name='purpose'
                  value='partnership'
                  checked={inputData.purpose === 'partnership'}
                  onChange={handleChange}
                />
                <label htmlFor='purpose'>Partnership</label>
              </div>
              <div className={style.radio}>
                <input
                  type='radio'
                  id='purpose'
                  name='purpose'
                  value='other'
                  checked={inputData.purpose === 'other'}
                  onChange={handleChange}
                />
                <label htmlFor='purpose'>Others</label>
              </div>
            </div>
          </div>
          <div className={style.purposeArea}>
            <label htmlFor=''>Mention your purpose below*</label>
            <textarea
              className={style.commentArea}
              name='comment'
              value={inputData.comment}
              onChange={handleChange}></textarea>
          </div>
        </div>
        <div className={style.btn}>
          <button type='button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
