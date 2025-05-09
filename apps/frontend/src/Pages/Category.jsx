
import Breadcrumb from '@/components/ui/Breadcrumb'
import React from 'react'
import { useParams } from 'react-router-dom';
import {freelancers} from '../data/freelancer'
import FreelancerCard from '@/components/initials/FreelancerCard';
const Category = () => {
    const param = useParams();
    const categoryName = param.category
        .split("-")
        .join(" ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
        console.log(categoryName);
    

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
            freelancers?.map((freelancer,i)=>(
                <FreelancerCard key={i} {...freelancer}/>
            ))
        }
      </div>
    </div>
  );
}

export default Category