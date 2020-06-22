import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss'

const CollectionItem = ({ item, name, imageUrl, price}) => {
  return (
    <div className='collection-item'>
      <div
      className='image'
      style={{ backgroundImage: `url(${imageUrl})`}}
      >
      </div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted>Add to card</CustomButton>
    </div>
  );
}
 
export default CollectionItem;