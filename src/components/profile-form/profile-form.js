import { Input } from '@mui/material'
import { toggleVisibleForm } from '../../store/profile'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../store/profile'
import styles from './profile.module.css'

export const ProfileForm = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  telegram,
  skype,
}) => {
  const [form, setForm] = useState({
    firstName,
    lastName,
    phoneNumber,
    email,
    telegram,
    skype,
  })
  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute('data-name')

    if (!!field) {
      setForm({
        ...form,
        [field]: event.target.value,
      })
    }
  }

  return (
    <div>
      <h1 className={styles.edit} onClick={() => dispatch(toggleVisibleForm())}>
        Редактировать
      </h1>
      <hr />
      {profile.isVisibleForm && (
        <div>
          <Input
            placeholder="firstName"
            value={form.firstName}
            onChange={handleChangeForm}
            inputProps={{
              'data-name': 'firstName',
            }}
          />
          <Input
            placeholder="lastName"
            value={form.lastName}
            onChange={handleChangeForm}
            inputProps={{
              'data-name': 'lastName',
            }}
          />
          <Input
            placeholder="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChangeForm}
            inputProps={{
              'data-name': 'phoneNumber',
            }}
          />
          <Input
            placeholder="email"
            value={form.email}
            onChange={handleChangeForm}
            inputProps={{
              'data-name': 'email',
            }}
          />
          <Input
            placeholder="telegram"
            value={form.telegram}
            onChange={handleChangeForm}
            inputProps={{
              'data-name': 'telegram',
            }}
          />
          <Input
            placeholder="skype"
            value={form.skype}
            onChange={handleChangeForm}
            inputProps={{
              'data-name': 'skype',
            }}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(updateProfile(form))}
          >
            save
          </button>
        </div>
      )}
    </div>
  )
}
