import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TextField, Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import "react-phone-number-input/style.css";
import CircleLoader from "react-spinners/CircleLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Participant() {
  const [loading, setLoading] = useState(false);
  
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
  
  });

  return (
    <div className="w-[70%] mx-auto mt-14 ">
      <form 
      onSubmit={handleSubmit}
        className="new-staff-form "
      action="https://getform.io/f/78817b5b-232c-4a4e-a5da-d26f37bbc897"
        method="POST"
        encType="multipart/form-data"
       
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
            {errors.firstName && <p>{errors.firstName.message}</p>}
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
            {errors.lastName && <p>{errors.lastName.message}</p>}
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
            {errors.email && <p>{errors.email.message}</p>}
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
                      className={`custom-phone-input ${` `}`}
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
                    <MenuItem value="Yes" className="capitalize">
                      Yes
                    </MenuItem>
                    <MenuItem value="No" className="capitalize">
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
  );
}

export default Participant;
