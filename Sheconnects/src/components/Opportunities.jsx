
import {useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Opportunities = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <div className="mt-6 p-4 bg-gray-100">
      <p className="text-3xl font-semibold mb-8 text-pink-900  mt-12 px-16">Opportunities</p>
      <div className="flex mb-8 px-16">
        <button className="mr-2 py-2 px-8 bg-pink-900 text-white rounded-full" data-aos="zoom-in-up">Business</button>
        <button className=" mr-2 py-2 px-8 bg-gray-200 text-black rounded-full" data-aos="zoom-in-up">IT</button>
        <button className=" mr-2 py-2 px-8 bg-gray-200 text-black rounded-full" data-aos="zoom-in-up">Marketing</button>
        <button className="py-2 px-8 bg-gray-200 text-black rounded-full" data-aos="zoom-in-up">Designing</button>
      </div>
      <div className="space-y-4 px-16">
        <div className="bg-white p-4 rounded-lg shadow-md py-4 px-8 "  data-aos="fade-left">
          <h3 className="text-lg font-semibold mb-2">Software Intern</h3>
          <p className="text-sm">The TMT company</p>
          <p className="text-xs text-gray-500">2 days ago</p>
          <button className="mt-2 bg-pink-900 text-white py-2 px-8 rounded-full">Apply here</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md py-4 px-8  "  data-aos="fade-left">
          <h3 className="text-lg font-semibold mb-2">Software Intern</h3>
          <p className="text-sm">The TMT company</p>
          <p className="text-xs text-gray-500">2 days ago</p>
          <button className="mt-2 bg-pink-900 text-white py-2 px-8 rounded-full">Apply here</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md  py-4 px-8  "  data-aos="fade-left">
          <h3 className="text-lg font-semibold mb-2">Software Intern</h3>
          <p className="text-sm">The TMT company</p>
          <p className="text-xs text-gray-500">2 days ago</p>
          <button className="mt-2 bg-pink-900 text-white py-2 px-8 rounded-full">Apply here</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md  py-4 px-8 "  data-aos="fade-left">
          <h3 className="text-lg font-semibold mb-2">Software Intern</h3>
          <p className="text-sm">The TMT company</p>
          <p className="text-xs text-gray-500">2 days ago</p>
          <button className="mt-2 bg-pink-900 text-white py-2 px-8 rounded-full">Apply here</button>
        </div>
      
      </div>
    </div>
  );
};

export default Opportunities;
