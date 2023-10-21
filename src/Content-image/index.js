const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.blockEditor;

registerBlockType("green-blocks/content-image", {
  title: "Green Blocks Content Image",
  icon: "welcome-add-page",
  category: "common",
  attributes: {
    content: { type: "string", source: "html", selector: "p" },
    imageUrl: { type: "string", default: null },
    imageAlt: { type: "string", default: null }
  },
  edit({ attributes: { content, imageUrl, imageAlt }, setAttributes, className }) {
    return (
      <div className={className}>
        <RichText
          tagName="p"
          value={content}
          onChange={newContent => setAttributes({ content: newContent })}
        />
        <MediaUpload
          onSelect={image => setAttributes({ imageUrl: image.url, imageAlt: image.alt })}
          allowedTypes={"image"}
          render={({ open }) => <button onClick={open}>Select image</button>}
        />
      </div>
    );
  },
  save: () => null
});