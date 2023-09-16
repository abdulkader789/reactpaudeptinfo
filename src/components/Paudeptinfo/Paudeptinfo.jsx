import React, { useState, useEffect } from 'react';
import './Paudeptinfo.css';
import Student from './Student';

function Paudeptinfo() {
  const [students, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((students) => {
        setData(students);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [buttonStates, setButtonStates] = useState({
    buttonOne: false,
    buttonTwo: false,
    buttonThree: false,
  });

  const handleClick = (e) => {
    const buttonId = e.target.id;
    setButtonStates({
      buttonOne: buttonId === 'buttonOne',
      buttonTwo: buttonId === 'buttonTwo',
      buttonThree: buttonId === 'buttonThree',
    });
  };

  return (
    <div className='flex relative'>
      <div className='w-[30%]  sidebar h-[83.9vh] stick bg-green-600'>
        <button
          id='buttonOne'
          onClick={handleClick}
          className='bg-green-600 text-white px-10 py-4 w-full'
        >
          Faulties
        </button>
        <button
          id='buttonTwo'
          onClick={handleClick}
          className='bg-green-600 text-white px-10 py-4 w-full'
        >
          Students
        </button>
        <button
          id='buttonThree'
          onClick={handleClick}
          className='bg-green-600 text-white px-10 py-4 w-full'
        >
          Others
        </button>
      </div>
      <div className='w-[70%] flex flex-col px-20  pt-2'>
        <form className='stick'>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
        <div>
          <section className='mt-5'>
          {buttonStates.buttonOne ? (
            <div id='div-one'>
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Faulty Name
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Id
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Email
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Phone
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  {students.map((student) => (
                    <Student key={student.id} student={student}></Student>
                  ))}
                </table>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {buttonStates.buttonTwo ? (
            <div id='div-two'>
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Student Name
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Id
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Email
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Phone
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  {students.map((student) => (
                    <Student key={student.id} student={student}></Student>
                  ))}
                </table>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {buttonStates.buttonThree ? (
            <div id='div-three'>
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Student Name
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Id
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Email
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Phone
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Action
                      </th>
                    </tr>
                  </thead>
                 
                  {students.map((student) => (
                    <Student key={student.id} student={student}></Student>
                  ))}
                 
                </table>
              </div>
              
            </div>
           
          ) : (
            <div></div>
          )}

</section>
        </div>
      </div>
    </div>
  );
}

export default Paudeptinfo;