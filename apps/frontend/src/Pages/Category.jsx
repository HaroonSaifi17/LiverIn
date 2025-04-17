import Breadcrumb from '@/components/ui/Breadcrumb'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { freelancers } from '../data/freelancer'
import FreelancerCard from '@/components/initials/FreelancerCard';
import axios from 'axios';

const Category = () => {
  const param = useParams();
  const categoryName = param.category
    .split("-")
    .join(" ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  console.log(categoryName);

  const [gigs, setGigs] = useState([]); // P7961

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/category/name/${categoryName}`);
        setGigs(response.data);
      } catch (err) {
        console.error("Failed to fetch gigs", err);
      }
    };

    fetchGigs();
  }, [categoryName]); // P0587

  return (
    <div className="w-11/12 mx-auto">
      <Breadcrumb />
      <div>
        <p className="text-lg">
          Showing Pro catalog results, offering you the{" "}
          <span className="font-bold">best hand-picked </span>
          freelancers for <span className="font-bold">any project</span>.
        </p>
        <p className='mt-2'>335 Pro freelancers for <span className='font-bold'>{categoryName}</span> Posts</p>
      </div>
      <div className='w-full mt-4 flex flex-col gap-3'>
        {
          gigs.length > 0 ? (
            gigs.map((gig, i) => (
              <FreelancerCard key={i} {...gig} />
            ))
          ) : (
            freelancers.map((freelancer, i) => (
              <FreelancerCard key={i} {...freelancer} />
            ))
          )
        }
      </div>
    </div>
  );
}

export default Category
