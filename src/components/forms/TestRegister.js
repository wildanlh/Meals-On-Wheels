import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { registerAPI } from "../../api/auth-api"
import FailedMessage from "./auth/FailedMessage"
import Input from "./Input"
import SuccessMessage from "./auth/SuccessMessage"
import { Button } from "react-bootstrap"
import { bannerportairt1 } from "../../assets"

const TestRegister = () => {
  const [status, setStatus] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ criteriaMode: "all" })

  const onSubmitHandler = (data) => {
    registerAPI({
      name: data.name,
      address: data.address,
      gender: data.gender,
      role: data.role,
      email: data.email,
      password: data.password,
      file: data.file,
    })
      .then((res) => {
        setSuccessMessage(res.data.message)
        setStatus("SUCCESS")
        reset()
      })
      .catch((err) => {
        setErrorMessage(err.response.data)
        setStatus("FAILED")
      })
  }
  return (
    <div className='container d-flex justify-content-center'>
      <div className='col-xxl-8 px-4 py-5'>
        <div
          className='card row flex-lg-row-reverse  py-5'
          bis_skin_checked='1'
        >
          <h3 className='contact-title mx-3 text-white text-center'>
            REGISTER
          </h3>
          <hr className='text-white' />
          <div
            className='col-10 col-sm-8 col-lg-6 img-center'
            bis_skin_checked='1'
          >
            <img
              src={bannerportairt1}
              className='rounded img-register mb-3 pe-3'
              alt='Bootstrap Themes'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6 text-center text-white' bis_skin_checked='1'>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              {status === "SUCCESS" && (
                <SuccessMessage onClose={() => setStatus("")}>
                  {successMessage}
                </SuccessMessage>
              )}
              {status === "FAILED" && (
                <FailedMessage onClose={() => setStatus("")}>
                  {errorMessage}
                </FailedMessage>
              )}

              <Input
                label='Full Name'
                name='name'
                type='text'
                errors={errors}
                placeholder='Enter your full name'
                register={register}
                validation={{
                  required: "Name is required",
                }}
              />

              <Input
                label='Address'
                name='address'
                type='text'
                errors={errors}
                placeholder='Enter your address'
                register={register}
                validation={{
                  required: "Address is required",
                }}
              />

              <div className='mb-4'>
                <label for='validationServer04' className='form-label fs-5'>
                  Gender
                </label>
                <select
                  className='form-select'
                  id='validationServer04'
                  aria-describedby='validationServer04Feedback'
                  register={register}
                  required
                >
                  <option selected disabled value=''>
                    Choose a gender
                  </option>
                  <option value='MALE'>Male</option>
                  <option value='FEMALE'>Female</option>
                </select>
                <div id='validationServer04Feedback' class='invalid-feedback'>
                  Please select a valid gender.
                </div>
              </div>

              <div className='mb-4'>
                <label for='validationServer04' className='form-label fs-5'>
                  Role
                </label>
                <select
                  className='form-select'
                  id='validationServer04'
                  register={register}
                  aria-describedby='validationServer04Feedback'
                  required
                >
                  <option selected disabled value=''>
                    Choose a role
                  </option>
                  <option value='ROLE_MEMBER'>Member</option>
                  <option value='ROLE_RIDER'>Rider</option>
                  <option value='ROLE_CAREGIVER'>Caregiver</option>
                  <option value='ROLE_VOLUNTEER'>Volunteer</option>
                </select>
                <div id='validationServer04Feedback' class='invalid-feedback'>
                  Please select a valid role.
                </div>
              </div>

              <Input
                label='Email'
                name='email'
                type='text'
                errors={errors}
                placeholder='Enter your email'
                register={register}
                validation={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter valid email",
                  },
                }}
                emailTaken={status === "FAILED" ? true : false}
              />

              <Input
                label='Password'
                name='password'
                type='password'
                errors={errors}
                placeholder='Enter your password'
                register={register}
                validation={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be between 6-18 characters long",
                  },
                  maxLength: {
                    value: 18,
                    message:
                      "Password can't be greater than 18 characters long",
                  },
                }}
              />

              <div className='mb-3'>
                <label for='formFile' className='form-label fs-5'>
                  File Upload
                </label>
                <input
                  className='form-control'
                  type='file'
                  id='formFile'
                  register={register}
                />
              </div>

              <div className='text-center mb-2 d-grid mx-3 pt-3'>
                <Button type='submit' className='button fw-bold' size='lg'>
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestRegister
