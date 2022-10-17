import { ContactLi} from '../ContactLi/ContactLi';
import { Ul } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import {
  // getError
   getContacts
} from "redux/selectors";


export const ContactList = ({  }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  

  return (<Ul>
    {contacts.map((contacts) => (<ContactLi contacts={contacts}  key={contacts.id} />))}
  </Ul>)
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};