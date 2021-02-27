import React from 'react'
import { useEffect,useState } from 'react'; 

import './favorites.scss';
import { useCounterContext } from '../../context/counterContext'

export const Favorites = () => {
  const { counterAbout,counterSkills,counterEducation,counterExperince,counterProjects,object } = useCounterContext()
  const [maxPoints, setMaxPoints] = useState(0)
  const [prefer, setPrefer] = useState('');

  useEffect(()=> {
      bigger()
  });

  const arr = [counterAbout,counterSkills,counterEducation,counterExperince,counterProjects]; 
 

  const bigger = ()=> {
  //   let len = arr.length;
  //   for (let i = 0; i < len-1; i++){ 
  //       for (let j = 0; j < len-1-i; j++){
  //            if (arr[j+1] < arr[j]){ 
  //               let t = arr[j+1]; 
  //               arr[j+1] = arr[j]; 
  //               arr[j] = t; 
  //           }
  //       }
  //    }                   
  //   console.log(arr[arr.length - 1]);
  //  return arr[arr.length - 1];
      arr.sort((a,b) => { 
      return a - b;
    })
     setMaxPoints(arr[arr.length - 1])
     for (let key in object){
      if (maxPoints===object[key]){
        setPrefer(key)
      }
      
     }
     
  }
  
  
    return (
        <div className="favorites">
          <h3>Favorites</h3>
            <span>about: {counterAbout}</span>
            <span>skills: {counterSkills}</span>
            <span>projects: {counterEducation}</span>
            <span>education: {counterExperince}</span>
            <span>experience: {counterProjects}</span>
            <span> You prefer to know more about my {prefer} : {maxPoints} </span>
        </div>
    );
}