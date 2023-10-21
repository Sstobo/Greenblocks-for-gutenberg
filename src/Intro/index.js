import { PlainText, RichText, InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';

wp.blocks.registerBlockType("green-blocks/intro", {
  title: "Green Blocks Intro",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    header: { type: "string",  default: "Intro Block"},
    content: { type: "string",  default: "This is the intro block content" },
    style: { type: "string", default: "text-center" } 
  },
  edit: EditComponent,
  save: function (props) {
    return (
      <>
       <pre style={{display: "none"}}>{JSON.stringify(props.attributes)}</pre>
       <div className={`green-blocks-intro container mx-auto p-5 ${props.attributes.style}`}>
         <h2 className="text-2xl font-bold">{props.attributes.header}</h2>
         <RichText.Content className="content" tagName="div" value={props.attributes.content} />
       </div>
      </>
    );
  }
})

function EditComponent(props) {
  const onHeaderChange = header => {
    props.setAttributes({ header });
  };
  
  const onContentChange = content => {
    props.setAttributes({ content });
  };

  const onStyleChange = style => {
    props.setAttributes({ style });
  };
  
  return (
    <div className={`green-blocks-intro container mx-auto bg-slate-200 p-5 ${props.attributes.style}`}>
      <h6 className="text-sm text-gray-500 p-0 m-1
      ">Intro Block</h6>
      <PlainText
        className={`header text-2xl font-bold  p-2 rounded-sm ${props.attributes.style}`}
        value={props.attributes.header}
        onChange={onHeaderChange}
        placeholder="Enter your header text here..."
      />
      <RichText
        className="content p-2 rounded-sm bg-white"
        tagName="p"
        value={props.attributes.content}
        onChange={onContentChange}
        label="Enter your content text here..."
        placeholder="Enter your content text here..."
      />
      <InspectorControls>
        <SelectControl
          className="m-2"
          label="Block alignment"
          value={props.attributes.style}
          onChange={onStyleChange}
          options={[
            { label: 'Centered', value: 'text-center' },
            { label: 'Left', value: 'text-left' },
            { label: 'Right', value: 'text-right' },
          ]}
        />
      </InspectorControls>
    </div>
  );
}