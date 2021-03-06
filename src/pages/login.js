import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/firebase'

const onSubmit = (form) => {
  return signInWithEmailAndPassword(auth, form.email, form.password)
}

export const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute('data-name')

    if (!!field) {
      setForm({
        ...form,
        [field]: e.target.value,
      })
    }
  }

  return (
    <div>
      <h1>login</h1>

      <input
        placeholder="email"
        value={form.email}
        data-name="email"
        onChange={handleChangeForm}
      />
      <input
        placeholder="password"
        value={form.password}
        data-name="password"
        onChange={handleChangeForm}
      />
      <button onClick={() => onSubmit(form)}>login</button>
    </div>
  )
}
