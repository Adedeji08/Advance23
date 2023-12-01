import React, { useState, useRef } from "react";
import { Modal } from "antd";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TextField, Grid } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import "react-phone-number-input/style.css";
import CircleLoader from "react-spinners/CircleLoader";
import emailjs, { sendForm } from '@emailjs/browser'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Volunteer() {
    const [loading, setLoading] = useState(false);
    const form = useRef()
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const departments = ['Ushering', 'Media', 'Sanitation', 'Protocol', 'Welfare', 'Watch Men'];

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      await emailjs.sendForm(
        'service_qbadhm9',
        'template_tr94g6q',
        form.current,
        '8LdIQzTIF_nj5NP0p'
      );
  
      toast.success('You have successfully registered for advance 2023!');
     
    } catch (error) {
      toast.error('Failed to send the message, please try again');
     
  
    } finally {
      setLoading(false);
    }
  };

  return (
       <div className="w-[70%] mx-auto mt-14 ">
      <form 
       ref={form} onSubmit={sendEmail}
     
      >
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="mt-[38px] font-normal text-[15px] mr-[10px] ">
            <label className="block mb-2 text-[#8697A8]">First Name</label>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  placeholder="First Name"
                  className="w-full  px-[19px] py-3 rounded"
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error ? fieldState.error.message : null
                  }
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-[38px] font-normal text-[15px] mr-[10px]">
            <label className="block mb-2 text-[#8697A8]">Last Name</label>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name must be at least 3 characters",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  placeholder="Last Name"
                  className="w-full px-[19px] py-3 rounded"
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error ? fieldState.error.message : null
                  }
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-[38px]  font-normal text-[15px] mr-[10px]">
            <label className="block mb-2 text-[#8697A8]">Email</label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email. E.g, example@gmail.com",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  placeholder="Email"
                  className="w-full px-[19px] py-3 rounded"
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error ? fieldState.error.message : null
                  }
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-[38px] font-normal text-[15px] mr-[10px]">
            <Grid item xs={12}>
              <label className="block mb-2 text-[#8697A8]">Phone Number</label>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                rules={{
                  required: "Phone number is required",
                }}
                render={({ field, fieldState }) => (
                  <div>
                    <PhoneInput
                      id="phone-input"
                      placeholder="Phone Number"
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      defaultCountry="NG"
                      international
                      withCountryCallingCode
                      className={`custom-phone-input  ${` `}`}
                    />
                    {fieldState.error && (
                      <FormHelperText error>
                        {fieldState.error.message}
                      </FormHelperText>
                    )}
                  </div>
                )}
              />
            </Grid>
          </div>

          <div className="mt-[38px] font-normal text-[15px] mr-[10px]">
            <label className="block text-[#8697A8] mb-2">Deparment</label>
            <Controller
              name="department"
              control={control}
              defaultValue=""
              rules={{ required: "Choose a Department..." }}
              render={({ field, fieldState }) => (
                <div>
                  <Select
                    {...field}
                    className="w-full bg-[#F8FAFB] px-[19px] py-3 rounded capitalize"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    style={{ height: "54px" }}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    error={!!fieldState.error}
                  >
                    <MenuItem disabled value="">
                     Choose a Department...
                    </MenuItem>
                    {departments?.map((dept, _id) => (
                      <MenuItem key={_id} value={dept} className="capitalize">
                      {dept}
                    </MenuItem>
                    ))}
                  </Select>
                  {fieldState.error && (
                    <FormHelperText error>
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </div>
              )}
            />
          </div>

          <div className="mt-[38px] font-normal text-[15px] mr-[10px]">
            <label className="block text-[#8697A8] mb-2">Gender</label>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={{ required: "Select a gender" }}
              render={({ field, fieldState }) => (
                <div>
                  <Select
                    {...field}
                    className="w-full bg-[#F8FAFB] px-[19px] py-3 rounded capitalize"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    style={{ height: "54px" }}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    error={!!fieldState.error}
                  >
                    <MenuItem disabled value="">
                      Select a gender
                    </MenuItem>
                    <MenuItem value="male" className="capitalize">
                      Male
                    </MenuItem>
                    <MenuItem value="female" className="capitalize">
                      Female
                    </MenuItem>
                  </Select>
                  {fieldState.error && (
                    <FormHelperText error>
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </div>
              )}
            />
          </div>

          <div className="mt-[38px] font-normal text-[15px] mr-[10px]">
            <label className="block mb-2 text-[#8697A8]">
              Accommodation
            </label>
            <Controller
              name="accommodation"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <div>
                  <Select
                    {...field}
                    className="w-full bg-[#F8FAFB]  px-[19px] py-3 capitalize rounded"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    style={{ height: "54px" }}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    error={!!fieldState.error}
                  >
                    <MenuItem disabled value="">
                      Need Accommodation?
                    </MenuItem>
                      <MenuItem value="yes" className="capitalize">
                        Yes
                      </MenuItem>
                      <MenuItem value="no" className="capitalize">
                        No
                    </MenuItem>
                  </Select>
                  {fieldState.error && (
                    <FormHelperText error>
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#117C1A] h-[44px] rounded-[5px] mt-[38px] text-center mx-auto cursor-pointer flex justify-center items-center w-[167px] text-[#FFF] text-[15px] font-medium hover:opacity-80"
        >
          {loading ? (
            <CircleLoader color="#ffffff" loading={loading} size={20} />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  )
}

export default Volunteer