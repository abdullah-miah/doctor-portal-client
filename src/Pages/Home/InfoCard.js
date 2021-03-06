import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
  <figure className='pl-3 pt-5'>
      <img src={img} alt="Album"/>

      </figure>
  <div class="card-body">
    <h2 class="card-title text-white">{cardTitle}</h2>
    <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
    );
};

export default InfoCard;