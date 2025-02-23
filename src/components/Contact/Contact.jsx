import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete contact</button>
    </>
  );
};

export default Contact;
