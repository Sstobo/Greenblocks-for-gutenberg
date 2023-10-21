import React, { useState } from "react"
import ReactDOM from "react-dom"

import { InspectorControls, PanelBody, PanelRow, PanelControl } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

const OurComponent = ({ attributes, setAttributes }) => {
    const { configValue } = attributes;

    const setConfigValue = ( value ) => {
        setAttributes({ configValue: value });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Calibration Options" initialOpen={true}>
                    <TextControl
                        label="Your Config Option"
                        value={ configValue }
                        onChange={ setConfigValue }
                    />
                </PanelBody>
            </InspectorControls>

            <div className="bg-gray-200 border-2 border-gray-300 p-4 my-3 rounded shadow-md">
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <img src={props.imageUrl} alt={props.imageAlt} />
            </div>
        </>
    );
};