import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const ForgotPasswordOTPPage = () => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const ForgotSchema = Yup.object().shape({
    otp: Yup.string().required("OTP is required"),
    newPassword: Yup.string().required("New Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
      newPassword: "",
    },
    validationSchema: ForgotSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        const setNewPasswordResponse = await axios.post(
          `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Auth/SetNewPassword`,
          {
            otp: values.otp,
            newPassword: values.newPassword,
          }
        );

        if (setNewPasswordResponse.status === 200) {
          setSuccessMessage(
            "Password reset successfully. You can now login with your new password."
          );
          setError(""); // Clear any previous error messages
        } else {
          setError("An error occurred. Please try again."); // Handle non-200 status codes
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          setError(
            error.response.data.title || "An error occurred. Please try again."
          );
        } else {
          setError("An error occurred. Please try again later.");
        }
      }
    },
  });

  const { errors, touched } = formik;

  return (
    <div className="form-box">
      <div className="fullHeight p-ai-center p-d-flex p-jc-center">
        <div className="shadow card m-3 px-3 py-4 px-sm-4 py-sm-5">
          <h4 className="text-center">Forgot Password</h4>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="p-field">
              <span className="p-float-label">
                <InputText
                  id="otp"
                  name="otp"
                  value={formik.values.otp}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": Boolean(touched.otp && errors.otp),
                  })}
                />
                <label
                  htmlFor="otp"
                  className={classNames({
                    "p-error": Boolean(touched.otp && errors.otp),
                  })}
                >
                  OTP*
                </label>
              </span>
              {touched.otp && errors.otp && (
                <small className="p-error">{errors.otp}</small>
              )}
            </div>
            <div className="p-field">
              <span className="p-float-label">
                <InputText
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": Boolean(
                      touched.newPassword && errors.newPassword
                    ),
                  })}
                />
                <label
                  htmlFor="newPassword"
                  className={classNames({
                    "p-error": Boolean(
                      touched.newPassword && errors.newPassword
                    ),
                  })}
                >
                  New Password*
                </label>
              </span>
              {touched.newPassword && errors.newPassword && (
                <small className="p-error">{errors.newPassword}</small>
              )}
            </div>

            <div className="submitBtnBox">
              <Button
                type="submit"
                label="Set New Password"
                iconPos="right"
                loading={loading}
                className="mt-4 submitBtn"
                disabled={loading}
              />
            </div>
            {error && <div className="p-error">{error}</div>}
            {successMessage && <div className="p-success">{successMessage}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordOTPPage;
