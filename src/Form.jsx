import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Define the validation schema using Yup
const schema = yup.object().shape({
  Name: yup.string().required('Name is required'),
  Email: yup.string().email('Invalid email format').required('Email is required'),
  Phone: yup.string().matches(/^[0-9]+$/, 'Phone must be a number').required('Phone is required'),
  Message: yup.string().required('Message is required')
});

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const serviceId = '';
    const templateId = '';
    const publicKey = '';

    emailjs.send(serviceId, templateId, data, publicKey)
      .then(
        () => {
          console.log('SUCCESS!');
          alert('We will reach back soon!!!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-deep-blue text-sm font-bold mb-2" htmlFor="Name">
          Name
        </label>
        <input
          type="text"
          id="Name"
          {...register('Name')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-deep-blue focus:outline-none focus:border-vibrant-pink"
        />
        {errors.Name && <span className="text-vibrant-pink text-xs">{errors.Name.message}</span>}
      </div>
      <div>
        <label className="block text-deep-blue text-sm font-bold mb-2" htmlFor="Email">
          Email
        </label>
        <input
          type="email"
          id="Email"
          {...register('Email')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-deep-blue focus:outline-none focus:border-vibrant-pink"
        />
        {errors.Email && <span className="text-vibrant-pink text-xs">{errors.Email.message}</span>}
      </div>
      <div>
        <label className="block text-deep-blue text-sm font-bold mb-2" htmlFor="Phone">
          Phone
        </label>
        <input
          type="tel"
          id="Phone"
          {...register('Phone')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-deep-blue focus:outline-none focus:border-vibrant-pink"
        />
        {errors.Phone && <span className="text-vibrant-pink text-xs">{errors.Phone.message}</span>}
      </div>
      <div>
        <label className="block text-deep-blue text-sm font-bold mb-2" htmlFor="Message">
          Message
        </label>
        <textarea
          id="Message"
          {...register('Message')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-deep-blue focus:outline-none focus:border-vibrant-pink"
          rows="4"
        ></textarea>
        {errors.Message && <span className="text-vibrant-pink text-xs">{errors.Message.message}</span>}
      </div>
      <motion.button
        type="submit"
        className="bg-vibrant-pink hover:bg-deep-blue text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </form>
  );
};

export default Form;