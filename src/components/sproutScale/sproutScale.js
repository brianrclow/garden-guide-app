import React, { useState } from 'react'
import { COLORS } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

export const SproutScale = ({scale}) => {
    

    const getWholes = input => {
        const float = parseFloat(input);
        const num = parseInt(input);
        let useHalf = (float != num);
        let stars = [];
        for(let i=0;i<num;i++) {
            stars.push(<Ionicons key={i} name="ios-star" size={16} color={COLORS.primaryGreen}></Ionicons>);
        }
        if(useHalf) stars.push(<Ionicons key={99} name="ios-star-half" size={16} color={COLORS.primaryGreen}></Ionicons>);
        const remaining = num + (useHalf ? 1 : 0);
        for(let i=remaining;i<5;i++) {
            stars.push(<Ionicons key={i} name="ios-star-outline" size={16} color={COLORS.primaryGreen}></Ionicons>);
        }
        return stars;
    }
    return (
            <>
            {getWholes(scale)}
            </>
    );
}