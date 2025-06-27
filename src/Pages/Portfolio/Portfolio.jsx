import React, { useState } from 'react';

import CategoryFilter from '../../Components/CategoryFilter';
import DynamicCard from '../../Components/DynamicCard';
import Pagination from '../../Components/Pagination';
import port1 from "../../assets/Images/port1.png"
import port2 from "../../assets/Images/port2.png"
import port3 from "../../assets/Images/port3.png"
import port4 from "../../assets/Images/port4.png"
import port5 from "../../assets/Images/port4.png"
import port6 from "../../assets/Images/port4.png"
import port7 from "../../assets/Images/port4.png"
import port8 from "../../assets/Images/port2.png"
import port9 from "../../assets/Images/port2.png"
import port10 from "../../assets/Images/port2.png"
import Build from '../Home/Build/Build';


const Portfolio = () => {


    const projects = [
  {
    id: 1,
    type: 'Website',
    title: 'Beach Booking Website',
    image: port1,
  },
  {
    id: 2,
    type: 'Apps',
    title: 'Restaurant Apps Design',
    image: port2,
  },
  {
    id: 3,
    type: 'Website — Apps',
    title: 'Fintech Apps & Website',
    image: port3,
  },
  {
    id: 4,
    type: 'Apps',
    title: 'Cosmetic Apps Design',
    image: port4,
  },
  {
    id: 5,
    type: 'Development',
    title: 'Why Custom Software Beats Off-the-Shelf Every Time',
    image: port5,
  },
  {
    id: 6,
    type: 'Development',
    title: 'How We Build Scalable Web Apps From Scratch',
    image: port6,
  },
  {
    id: 7,
    type: 'Development',
    title: 'Mobile-First Development: Why It’s No Longer Optional',
    image: port7,
  },
  {
    id: 8,
    type: 'Hosting',
    title: 'Is Your Website Really Secure? Here’s How to Check',
    image: port8,
  },
  {
    id: 9,
    type: 'Hosting',
    title: 'The Hidden Costs of Cheap Hosting (And How to Avoid Them)',
    image: port9,
  },
  {
    id: 10,
    type: 'Hosting',
    title: 'SSL, Firewalls, and Beyond: Protecting Your Digital Space',
    image: port10,
  },
  // Add more for pagination
];

    const itemsPerPage = 4;


     const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = category === 'All'
    ? projects
    : projects.filter(p => p.type.includes(category));

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayed = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

        return (

            <div>
                <div className=" items-center text-center mb-[11px]">
        <h1 className="md:text-[64px] text-inter font-bold ">Discover Our Creative Project</h1>
        <p className="text-gray-500 text-inter md:text-[18px] font-normal mb-6">
        Explore Our Diverse Projects That Showcase Innovation, Creativity, And Excellence
      </p>
        </div>
        
        
      
       <div className="p-6">
      

      

      <CategoryFilter selected={category} onChange={(cat) => {
        setCategory(cat);
        setPage(1);
      }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        {displayed.map(project => (
          <DynamicCard key={project.id} {...project} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>

   <div className="md:mb-[150px]">
<Build></Build>
   </div>



            </div>
               
        );
};

export default Portfolio;