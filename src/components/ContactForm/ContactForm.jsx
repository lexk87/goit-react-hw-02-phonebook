import PropTypes from 'prop-types';
import {
    FormContainer,
    Label,
    Input,
    Error,
    Button,
} from './ContactForm.styled';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegex =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const initialValues = {
    id: '',
    name: '',
    number: '',
};

const schema = yup.object().shape({
    name: yup
        .string()
        .min(3)
        .matches(nameRegex, 'Please, enter valid name')
        .required(),
    number: yup
        .string()
        .matches(numberRegex, 'Please, enter valid number')
        .required(),
});

export const ContactForm = ({ contacts, addContact }) => {
    const handleSubmit = (values, { resetForm }) => {
        values.id = nanoid();

        const isContactIncluded = contacts.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );

        isContactIncluded
            ? alert(`${values.name} is already in contacts`)
            : addContact(values);

        resetForm();
    };

    return (
        <FormContainer>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <Form autoComplete="off">
                    <Label htmlFor="name">
                        Name
                        <Input
                            type="text"
                            name="name"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />
                        <Error component={p} name="name" />
                    </Label>

                    <Label htmlFor="number">
                        Number
                        <Input
                            type="tel"
                            name="number"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        />
                        <Error component={p} name="number" />
                    </Label>
                    <Button type="submit"></Button>
                </Form>
            </Formik>
        </FormContainer>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.array,
    addContact: PropTypes.func,
};
