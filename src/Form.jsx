import { useState } from 'react'
import './form.css'

function General({ info, setInfo, edit }) {
  return (
    <>
      <h2> General Information</h2>
      <div className='form-inputs'>
        <Input
          label='First Name'
          type='text'
          name='firstName'
          test='adf'
          info={info}
          setInfo={setInfo}
          value={info.firstName}
          edit={edit}
        />
        <Input
          label='Last Name'
          type='text'
          name='lastName'
          info={info}
          setInfo={setInfo}
          value={info.lastName}
          edit={edit}
        />
        <Input
          label='Email'
          type='email'
          name='email'
          info={info}
          setInfo={setInfo}
          value={info.email}
          edit={edit}
        />
        <Input
          label='Phone Number'
          type='tel'
          name='phone'
          info={info}
          setInfo={setInfo}
          value={info.phone}
          edit={edit}
        />
      </div>
    </>
  );
}

function Education({ info, setInfo, edit }) {
  return (
    <>
      <h2>Educational Experience</h2>
      <div className='form-inputs'>
        <Input
          label='School Name'
          type='text'
          name='school'
          info={info}
          setInfo={setInfo}
          value={info.school}
          edit={edit}
        />
        <Input
          label='Title of Study'
          type='text'
          name='titleOfStudy'
          info={info}
          setInfo={setInfo}
          value={info.titleOfStudy}
          edit={edit}
        />
        <Input
          label='Date of Study'
          type='date'
          name='dateOfStudy'
          info={info}
          setInfo={setInfo}
          value={info.dateOfStudy}
          edit={edit}
        />
      </div>
    </>
  );
}

function Practical({ info, setInfo, edit }) {
  return (
    <>
      <h2>Experience</h2>
      <div className='experience-form-inputs'>
        <Input
          label='Company Name'
          type='text'
          name='company'
          info={info}
          setInfo={setInfo}
          value={info.company}
          edit={edit}
        />
        <Input
          label='Position Title'
          type='text'
          name='position'
          info={info}
          setInfo={setInfo}
          value={info.position}
          edit={edit}
        />
        <TextArea
          label='Main Responsibilites'
          name='main'
          info={info}
          setInfo={setInfo}
          value={info.main}
          edit={edit}
        />
      </div>
      <div className='dates'>
        <Input
          label='Date from'
          type='date'
          name='dateFrom'
          info={info}
          setInfo={setInfo}
          value={info.dateFrom}
          edit={edit}
        />
        <Input
          label='Date until'
          type='date'
          name='dateUntil'
          info={info}
          setInfo={setInfo}
          value={info.dateUntil}
          edit={edit}
        />
      </div>

    </>
  );
}

function Input(props) {
  function onChange(e) {
     props.setInfo({...props.info, [props.name]:e.target.value})
  }
  return (
    <>
      <label>
        <div>{props.label}</div>
        {' '}
        <input type={props.type} name={props.name} defaultValue={props.edit ? props.value : ''} onChange={onChange}></input>
      </label>
    </>
  );
}

function TextArea(props) {
  function onChange(e) {
     props.setInfo({...props.info, [props.name]:e.target.value})
  }
  return (
    <>
      <label className='textarea'>
        <div>{props.label}</div>
        {' '}
        <textarea  name={props.name} defaultValue={props.edit ? props.value : ''} onChange={onChange}></textarea>
      </label>
    </>
  );
}

function Buttons({ setEdit }) {
  return (
    <div>
      <EditButton label='Edit' type='button' setEdit={setEdit} />
      <SubmitButton label='Submit' type='submit' />
    </div>
  );
}

function EditButton(props) {
  function handleEdit() {
    props.setEdit(true);
    console.log("hello");
  }
  return (
    <>
      <button type={props.type} onClick={handleEdit}>{props.label}</button>
    </>
  );
}

function SubmitButton(props) {
  return (
    <>
      <button type={props.type}>{props.label}</button>
    </>
  );
}

function Form({ info, setInfo }) {
  const [edit, setEdit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements);
    setInfo({
      ...info,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      school: e.target.school.value,
      titleOfStudy: e.target.titleOfStudy.value,
      dateOfStudy: e.target.dateOfStudy.value,
      company: e.target.company.value,
      position: e.target.position.value,
      main: e.target.main.value,
      dateFrom: e.target.dateFrom.value,
      dateUntil: e.target.dateUntil.value
    });
    setEdit(false);
    e.target.reset();
  }
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <General info={info} setInfo={setInfo} edit={edit} />
        <Education info={info} setInfo={setInfo} edit={edit} />
        <Practical info={info} setInfo={setInfo} edit={edit} />
        <Buttons setEdit={setEdit} />
      </form>
    </div>
  )
}



export default Form;
