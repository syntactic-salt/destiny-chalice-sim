import React from 'react';
import image from './chalice.svg';

export default function Chalice(props) {
    return (
        <img src={image} className={props.className} />
    );
}
