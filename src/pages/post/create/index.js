import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import api from '../../../@bloggerinho/api'
import * as PostsAction from '../../../@bloggerinho/actions/post-actions'

import Header from '../../../components/Header'
import UserNav from '../../../components/UserNav'

import * as Style from './style'

function CreatePost (props) {
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({})

  function onChangeField (fieldName, event) {
    setFormValues({ ...formValues, [fieldName]: event.target.value })
  }

  function handleSubmit () {
    const { title, sinopse, content } = formValues

    if (title && sinopse && content) {
      api().post('/posts', { ...formValues })
        .then(res => {
          dispatch(PostsAction.create(res.data))
          props.history.push('/app')
        })
    }
  }

  return (
    <>
      <Header
        history={props.history}
      />
      <Style.Main>
        <Style.UserInfoContainer>
          <UserNav
            name={props.user.name}
            email={props.user.email}
          />
        </Style.UserInfoContainer>
        <Style.FormContainer>
          <Style.FieldWrapper>
            <Style.TextFieldWrapper>
              <label>title:</label>
              <Style.TextField onChange={event => onChangeField('title', event)} type="text" id="fname" name="fname" />
            </Style.TextFieldWrapper>
            <Style.TextFieldWrapper>
              <label>sinopse:</label>
              <Style.TextField onChange={event => onChangeField('sinopse', event)} type="text" id="fpassword" name="fpassword" />
            </Style.TextFieldWrapper>

            <Style.TextFieldWrapper>
              <label>content:</label>
              <Style.TextArea onChange={event => onChangeField('content', event)} rows="10" id="fcontent" name="fcontent" />
            </Style.TextFieldWrapper>

            <Style.ButtonWrapper>
              <Style.CancelBtn onClick={() => props.history.push('/app')}>voltar</Style.CancelBtn>
              <Style.EnterBtn onClick={() => handleSubmit()}>criar</Style.EnterBtn>
            </Style.ButtonWrapper>
          </Style.FieldWrapper>
        </Style.FormContainer>
      </Style.Main>
    </>
  )
}

CreatePost.propTypes = {
  user: PropTypes.object,
  history: PropTypes.func
}

const mapStateToProps = ({ User }) => {
  const { user } = User

  return {
    user
  }
}

export default connect(mapStateToProps, {})(CreatePost)
