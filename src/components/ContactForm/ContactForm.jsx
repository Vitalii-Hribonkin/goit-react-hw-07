import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short!").required("Required"),
    number: Yup.string().matches(/^\d+$/, "Only numbers").min(5, "Too short!").required("Required"),
  });

  const onSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ errors, touched }) => (
        <Form>
          <div>
            <Field id="name" type="text" name="name" placeholder="Enter your name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </div>
          <div>
            <Field id="number" type="text" name="number" placeholder="Enter your number" />
            {errors.number && touched.number ? <div>{errors.number}</div> : null}
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
