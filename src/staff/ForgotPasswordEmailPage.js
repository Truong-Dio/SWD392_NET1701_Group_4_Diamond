import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";

const ForgotPasswordEmailPage = () => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        // Gọi API gửi mã OTP
        const confirmEmailResponse = await axios.post(
          `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Auth/ConfirmEmail/${values.email}`
        );

        if (confirmEmailResponse.status === 200) {
          setSuccessMessage(
            "OTP has been sent to your email. Please check your inbox."
          );
          navigate("/otp");
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          setError(error.response.data.title || "An error occurred. Please try again.");
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
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} className="p-fluid">
              <div className="p-field">
                <span className="p-float-label">
                  <InputText
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": Boolean(touched.email && errors.email),
                    })}
                  />
                  <label
                    htmlFor="email"
                    className={classNames({
                      "p-error": Boolean(touched.email && errors.email),
                    })}
                  >
                    Email*
                  </label>
                </span>
                {Boolean(touched.email && errors.email) && (
                  <small className="p-error">{errors.email}</small>
                )}
              </div>

              <div className="submitBtnBox">
                <Button
                  type="submit"
                  label="Send OTP"
                  iconPos="right"
                  loading={loading}
                  className="mt-4 submitBtn"
                  disabled={loading}
                />
              </div>
              {error && <div className="p-error">{error}</div>}
              {successMessage && (
                <div className="p-success">{successMessage}</div>
              )}
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordEmailPage;
