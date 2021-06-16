import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../../@bloggerinho/api'

import * as LoginActions from '../../@bloggerinho/actions/user-actions'

import * as Style from './style'

function Login () {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState({})

  function onChangeField (fieldName, event) {
    setFormFields({ ...formFields, [fieldName]: event.target.value })
  }

  const handleSubmit = () => {
    api().post('/auth', { ...formFields })
      .then(res => dispatch(LoginActions.login(res.data)))
  }

  return (
    <Style.Container>
      <Style.LoginFormContainer>
        <Style.Title>Bloggerinho</Style.Title>
        <Style.FieldWrapper>
          <label>Nome:</label>
          <Style.TextField onChange={event => onChangeField('name', event)} type="text" id="fname" name="fname" />
        </Style.FieldWrapper>
        <Style.FieldWrapper>
          <label>Senha:</label>
          <Style.TextField onChange={event => onChangeField('password', event)} type="password" id="fpassword" name="fpassword" />
        </Style.FieldWrapper>
        <Style.EnterBtn onClick={() => handleSubmit()}>Entrar... </Style.EnterBtn>
      </Style.LoginFormContainer>
    </Style.Container>
  )
}

export default Login
