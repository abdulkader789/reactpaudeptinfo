import React from 'react';

const Student = ({ student }) => {
  const { name, id, phone, email } = student;

  return (
   <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}
      </th>
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{phone}</td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          More Details
        </a>
      </td>
    </tr>
    </tbody>
  );
};

export default Student;
