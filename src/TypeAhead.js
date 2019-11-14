import React, {Fragment, useEffect, useState} from 'react';
import './TypeAhead.css';

function TypeAhead(props) {

    const [filter, setFilter] = useState()

    const decorateLabel = (label) => {
        // let regexp = /(`${filter}`).*/;
        // let regexp = new RegExp(filter, "i")
        let labelArray = label.split(filter)
        return labelArray.map((labelPart, idx)=>{
            if (idx !== labelArray.length -1) {
                return (
                    <Fragment>
                        <span>{labelPart}</span>
                        <span className={"filter"}>{filter}</span>
                    </Fragment>
                )
            } else {
                return (
                    <span>{labelPart}</span>
                )
            }
        })
        // return label.replace(regexp, `<h3>${filter}</h3>`);
    }

    return (
        <div className="TypeAhead">
            <input onKeyUp={({target:{value}})=>{setFilter(value.toLowerCase())}} />
            <div className={"container"}>
                {props.options.filter((option) =>
                {
                    return option.value.includes(filter) && filter.length
                }).map((option)=>(
                    <div key={option.value}>
                        {decorateLabel(option.label)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TypeAhead;
